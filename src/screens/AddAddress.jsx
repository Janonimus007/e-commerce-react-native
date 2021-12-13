import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { Button, TextInput } from 'react-native-paper'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { addAddressApi } from '../api/address'
const AddAddress = () => {
  const [loading, setLoading] = useState(null)
  const navigation = useNavigation()
  const {auth} = useAuth()
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData)=>{
      setLoading(true)
      try {
        await addAddressApi(auth,formData)
        navigation.goBack()
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
  })
  return (
    <KeyboardAwareScrollView>
     <View style={styles.container}>
      <TextInput  
         style={styles.input}
         label="Titulo" 
         onChangeText={(text)=>formik.setFieldValue("title",text)} 
         value={formik.values.title}
         error={formik.errors.title}
         />
      <TextInput  
         style={styles.input}
         label="Nombre y apellidos" 
         onChangeText={(text)=>formik.setFieldValue("name_lastname",text)} 
         value={formik.values.name_lastname}
         error={formik.errors.name_lastname}
         />
      <TextInput  
         style={styles.input}
         label="Direccion" 
         onChangeText={(text)=>formik.setFieldValue("address",text)} 
         value={formik.values.address}
         error={formik.errors.address}
         />
      <TextInput  
         style={styles.input}
         label="Codigo postal" 
         onChangeText={(text)=>formik.setFieldValue("postal_code",text)} 
         value={formik.values.postal_code}
         error={formik.errors.postal_code}
         />
      <TextInput  
         style={styles.input}
         label="Poblacion" 
         onChangeText={(text)=>formik.setFieldValue("city",text)} 
         value={formik.values.city}
         error={formik.errors.city}
         />
      <TextInput  
         style={styles.input}
         label="Estado" 
         onChangeText={(text)=>formik.setFieldValue("state",text)} 
         value={formik.values.state}
         error={formik.errors.state}
         />
      <TextInput  
         style={styles.input}
         label="pais" 
         onChangeText={(text)=>formik.setFieldValue("country",text)} 
         value={formik.values.country}
         error={formik.errors.country}
         />
      <TextInput  
         style={styles.input}
         label="Telefono" 
         onChangeText={(text)=>formik.setFieldValue("phone",text)} 
         value={formik.values.phone}
         error={formik.errors.phone}
         />
      <Button
         mode="contained" 
         onPress={formik.handleSubmit}
         loading={loading}   
      >Ingresar direccion</Button>
     </View> 
    </KeyboardAwareScrollView>
  )
   

}

export default AddAddress

const initialValues =()=>{
  return{
    title:"",
    name_lastname:"",
    address:"",
    postal_code:"",
    city:"",
    state:"",
    country:"",
    phone:""
  }
}
const validationSchema =()=>{
  return{
    title: Yup.string().required(true),
    name_lastname: Yup.string().required(true),
    address:Yup.string().required(true),
    postal_code:Yup.string().required(true),
    city:Yup.string().required(true),
    state:Yup.string().required(true),
    country:Yup.string().required(true),
    phone:Yup.string().required(true)
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  input:{
    marginVertical:10
  }
})