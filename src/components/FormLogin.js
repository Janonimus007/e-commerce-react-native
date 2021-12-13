import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import {loginApi} from '../api/user'
import { View, Text, StyleSheet } from 'react-native'
import useAuth from '../hooks/useAuth'
import { Button, TextInput } from 'react-native-paper'
import {loginStyle} from '../styles'


const FormLogin = (props) => {
  const [loading, setLoading] = useState(false)
  const {gotoLogin}= props
  const {login} = useAuth()

  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit: async (formData)=>{
      console.log(formData);
      setLoading(true)
      try {
        const response = await loginApi(formData);    
        console.log(response);
        if(response.statusCode) throw "Usuario o email no encontrado"
        login(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)

      }
      console.log(formData)
    }
  })
  return (
    <View>
      <TextInput
        style ={loginStyle.inputLogin}
        label="Email o Username"
        underlineColor="black"
        activeUnderlineColor="black"
        onChangeText={(text)=>formik.setFieldValue("identifier",text)}
        error ={formik.errors.identifier}
        values={formik.values.identifier}
      />
      <TextInput
        style ={loginStyle.inputLogin}
        label="Contraseña"
        underlineColor="black"
        activeUnderlineColor="black"
        secureTextEntry
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        error ={formik.errors.password}
        values={formik.values.password}
      />
      <Button onPress={formik.handleSubmit} loading={loading}>Ingresar</Button>
      <Button style={style.botonRegistro} onPress={gotoLogin}>Registrarme</Button>
    </View>
  )
}

export default FormLogin
const style = StyleSheet.create({
  botonRegistro:{
    marginBottom:'40%'
  }
})
function initialValues(){
  return{
    identifier:"",
    password:""
  }
}
function validationSchema(){
  return {
    identifier:Yup.string().required(true),
    password:Yup.string().required(true),
  }
}