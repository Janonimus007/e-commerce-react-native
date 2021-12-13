import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import {registerStyle} from '../styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { registerApi } from '../api/user'
const FormRegister = (props) => {
  const [loading, setLoading] = useState(false)
  const {gotoLogin}=props
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit: async(formData)=>{
      setLoading(true)
      try {
        await registerApi(formData)
        console.log('ok')
        setLoading(false)
        gotoLogin()
      } catch (error) {
        console.log('error');
        alert('no se pudo realizar el registro')  
        setLoading(false)     
      }
      console.log('registro de data');
      console.log(formData);
    }
  })
  return (
    <View stlye={registerStyle.conteinerForm}>
      <TextInput
        style={registerStyle.inputRegister}
        label='Email'
        underlineColor="black"
        activeUnderlineColor="black"
        onChangeText={(text)=>formik.setFieldValue("email",text)}
        values={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        style={registerStyle.inputRegister}
        label='Nombre de usuario'
        underlineColor="black"
        activeUnderlineColor="black"
        onChangeText={(text)=>formik.setFieldValue("username",text)}
        values={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        style={registerStyle.inputRegister}
        label='Contraseña'
        underlineColor="black"
        activeUnderlineColor="black"
        secureTextEntry
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        values={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        style={registerStyle.inputRegister}
        label='Confirmar Contraseña'
        underlineColor="black"
        activeUnderlineColor="black"
        secureTextEntry
        onChangeText={(text)=>formik.setFieldValue("repeatPassword",text)}
        values={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />
      <Button
       onPress={formik.handleSubmit} 
       loading={loading}
      >Registrarme</Button>
      <Button onPress={gotoLogin} style={registerStyle.botonInicioSesion}>Iniciar sesion</Button>

    </View>
  )
}

export default FormRegister
function initialValues(){
  return{
    email:"",
    username:"",
    password:"",
    repeatPassword:""
  }
}
function validationSchema(){
  return {
    email:Yup.string().email(true).required(true),
    username:Yup.string().required(true),
    password:Yup.string().required(true),
    repeatPassword:Yup.string().required(true).oneOf([Yup.ref("password")],true)

  }
}