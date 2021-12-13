import React, { useCallback,useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native'
import {Button, TextInput} from 'react-native-paper'
import { loginStyle } from '../styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth'
import {getMeAoi,updateUserApi} from '../api/user'
import { useNavigation } from '@react-navigation/native';
const ChangeName = () => {
  const {auth} = useAuth()
  const [loadind, setLoadind] = useState(false)
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit:async(formData)=>{
     
      try {
        setLoadind(true)
        await updateUserApi(auth,formData)
        alert('tu cambio se ha realizado con exito')
        navigation.goBack()
      } catch (error) {
        alert(error)
      }
      setLoadind(false)
    }
  })

  useFocusEffect(
    useCallback(
      () => {
        (async ()=>{
          const response = await getMeAoi(auth.token)
          if(response.name && response.last_name){
            await formik.setFieldValue("name",response.name)
            await formik.setFieldValue("last_name",response.last_name)
            console.log('estor en la respuesta y pase el id',response);
          }
          
        })();
      },
      [],
    )
  )

  return (
    <View style={style.container} >
      <TextInput
        style={loginStyle.inputLogin}
        label="Ingresar nombre"
        onChangeText={(text)=>formik.setFieldValue("name",text)}
        error ={formik.errors.name}
        value={formik.values.name}
      />
      <TextInput
        style={loginStyle.inputLogin}
        label="Ingresar apellido"
        onChangeText={(text)=>formik.setFieldValue("last_name",text)}
        error ={formik.errors.last_name}
        value={formik.values.last_name}
      />
      <Button
        style={style.botonCambioNombre}
        onPress={formik.handleSubmit}
        loadind={loadind}
      >
        Cambiar nombre y apellidos
      </Button>
    </View>
  )
}

export default ChangeName
const style = StyleSheet.create({
  container:{
    padding:20
  },
  botonCambioNombre:{
    marginTop:20
    }
  
})
function initialValues(){
  return{
    name:"",
    last_name:""
  }
}
function validationSchema(){
  return {
    name:Yup.string().required(true),
    last_name:Yup.string().required(true),
  }
}