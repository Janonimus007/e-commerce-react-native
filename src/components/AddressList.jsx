import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import {deleteAddressApi} from '../api/address'
import useAuth from '../hooks/useAuth'
const AddressList = (props) => {
  const {addresses,reloading} = props
  const [loading, setLoading] = useState(false)
  const {auth}=useAuth()
  const navigation = useNavigation()
  // const deleteAddressAlert =(address)=>{
  //   Alert.alert(
  //     "Eliminando direccion",
  //     `¿Estas seguro de que quieres eliminar la direccion de ${address.title}`,
  //     [
  //       {
  //         text:"NO"
  //       },
  //       {
  //         text:"SI",
  //         onPress:()=>console.log("eliminando la direccion")
  //       }
  //     ]
  //   )
  // }
  const goToUpdateAddress=(idAddress)=>{
    navigation.navigate("addaddress",{idAddress})
  }
  const deleteAddress = async (idAddress)=>{
    setLoading(true)
    try {
      await deleteAddressApi(auth,idAddress)
      reloading(true)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
   }
  
  return (
    <View style={styles.container}>
      {addresses.map(direccion => (
        <View key={direccion.id} style={styles.containerList}>
            <Text  style={styles.title}>{direccion.title}</Text>
            <Text  >{direccion.name_lastname}</Text>
            <Text  >{direccion.address}</Text>
            <Text  >Telefono: {direccion.phone}</Text>
            <Text  >codigo: {direccion.postal_code},ciudad: {direccion.city}, estado: {direccion.country}</Text>
            <View style={styles.botones}>
              <Button onPress={()=>goToUpdateAddress(direccion.id)} color='black' mode="contained">Editar</Button>
              <Button onPress={()=>deleteAddress(direccion.id)} color="red" mode="contained">Eliminar</Button>
            </View>
       </View>
      
      ))}
    </View>
  )
}

export default AddressList
const styles =  StyleSheet.create({
  container:{
    paddingTop:20
  },
  containerList:{
    marginBottom:20,
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
    padding:10
  },
  title:{
    fontWeight:'bold'
  },
  botones:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:5
  }
})