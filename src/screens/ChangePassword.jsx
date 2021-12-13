import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import * as Yup from 'yup'
import { updateUserApi } from '../api/user'
import useAuth from '../hooks/useAuth'
const ChangePassword = () => {
  const navigation = useNavigation()
  const {auth} = useAuth()
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit: async (formData)=>{
      setLoading(true)
      try {
        const response = await updateUserApi(auth,formData)
        if(response.statusCode) throw alert("arror al cambiar la contraseña")
        alert("felicidades, tu contraseña se ha cambiado con exito")
        navigation.goBack()
      } catch (error) {
        
        alert(error)
      }
      setLoading(false)
    }
    
  })
  return (
    <View style={stylee.container}>
      <TextInput
        secureTextEntry
        style = {stylee.inputContraseña}
        label="Contraseña"
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        error={formik.errors.password}
        value={formik.values.password}
      />
      <TextInput
        secureTextEntry
        style = {stylee.inputContraseña}
        label="repetir contraseña"
        onChangeText={(text)=>formik.setFieldValue("repeatPassword",text)}
        error={formik.errors.repeatPassword}
        value={formik.values.repeatPassword}
      />
      <Button
        mode='contained'
        style={stylee.botonContraseña}
        loading={loading}
        onPress={formik.handleSubmit}
      >Cambiar la contraseña</Button>
    </View>
  )
}

export default ChangePassword
const stylee = StyleSheet.create({
  container:{
    padding:20
  },
  inputContraseña:{
    marginBottom:10
  },
  botonContraseña:{
    marginTop:10,
    backgroundColor:'black'
  }
})

const initialValues =()=>{
  return{
    password:"",
    repeatPassword:""
  }
}

const validationSchema =()=>{
  return{
    password: Yup.string().required(true).min(4,true),
    repeatPassword: Yup.string().required().oneOf([Yup.ref("password")],true)

  }
}