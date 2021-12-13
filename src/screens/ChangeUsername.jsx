import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import * as Yup from 'yup'
import { getMeAoi,updateUserApi } from '../api/user'
import useAuth from '../hooks/useAuth'
const ChangeUsername = () => {
  const {auth} = useAuth()
  const [loading, setLoading] = useState(false)
  useFocusEffect(
    useCallback(
      () => {
        (async ()=>{
          const response = await getMeAoi(auth.token)
          await formik.setFieldValue("username",response.username)
        })()
      },[],
    )
  )
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit: async (formData)=>{
      setLoading(true)
      console.log(auth)
     try {
        const response = await updateUserApi(auth,formData)
        if (response.statusCode) throw alert("el nombre de usuario ya existe")
        alert("su usuario ha sido modificado con exito")
        navigation.goBack()
      } catch (error) {
        alert(error)
        formik.setFieldError("username",true)
      }
      setLoading(false)
    }
  })

  return (
    <View style={stylee.container}>
      <TextInput
        label="nombre de usuario"
        onChangeText={(text)=>formik.setFieldValue("username",text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <Button
        loading={loading}
        style={stylee.botonUsuario}
        mode='contained'
        onPress={formik.handleSubmit}
      >
        Cambiar nombre de usuario
      </Button>
      
    </View>
  )
}

export default ChangeUsername
const stylee = StyleSheet.create({
  container:{
    padding:20
  },
  botonUsuario:{
    backgroundColor:'black',
    marginTop:20
  }
})

const initialValues =()=>{
  return{
    username:""
  }
}

const validationSchema =()=>{
  return{
    username:Yup.string().required(true).min(4)
  }
}