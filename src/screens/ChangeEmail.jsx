import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getMeAoi ,updateUserApi} from '../api/user'
const ChangeEmail = () => {
  const {auth} = useAuth()
  const [loading, setLoading] = useState(false)

  const Navigation = useNavigation()
  useFocusEffect(
    useCallback(
      () => {
        (async ()=>{
          const response= await getMeAoi(auth.token)
          await formik.setFieldValue("email",response.email)
        })();
      },[],
    )
  )
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData)=>{
      try {
        setLoading(true)
        const response= await updateUserApi(auth,formData)
        if(response.statusCode) throw alert("el email ya existe");
        alert('tu cambio se ha realizado con exito')
        Navigation.goBack()
      } catch (error) {
        alert(error)
      }
      setLoading(false)
    }
  })
  return (
    <View style={style.container}>
      <TextInput
        label="Cambiar email"
        onChangeText={(text)=>formik.setFieldValue("email",text)}
        value={formik.values.email}
        error ={formik.errors.email}
       
      />
      <Button
        loading={loading}
        onPress={formik.handleSubmit}
        style={style.botonCambioemail}>
        Cambiar email
      </Button>

      
    </View>
  )
}

export default ChangeEmail
const style = StyleSheet.create({
  container:{
    padding:20
  },
  botonCambioemail:{
  marginTop:20
  }
})
function initialValues() {
  return{
    email:"",
  }
}
function validationSchema() {
  return{
    email: Yup.string().email(true)
  }
}