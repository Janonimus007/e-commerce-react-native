import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator, IconButton } from 'react-native-paper'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-web'
import {getAddressesApi} from '../api/address'
import useAuth from '../hooks/useAuth'
import {sizes} from 'lodash'
import AddressList from '../components/AddressList'
const Addresses = () => {
  const navigation = useNavigation()
  const [reloading, setReloading] = useState(null)
  const [addresses, setAddresses] = useState(null)
  const {auth}=useAuth()
  useFocusEffect(
    useCallback(
      () => {
        (async ()=>{
          const response = await getAddressesApi(auth)
          setAddresses(response)
          setReloading(false)
        })()
      },[reloading],
    )
  )
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mis direcciones</Text>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate("addaddress")}>
      <View style={styles.addAdress}>
        <Text style={styles.addresText}>Añadir una direccion</Text>
        <IconButton icon="arrow-right" color="black" size={19}/> 
      </View>
      </TouchableWithoutFeedback>
      {!addresses?(
        <ActivityIndicator style={styles.activitiloading} />
      ): addresses.length===0?(
        <Text style={styles.textoDirecciones}>Escribe tus direcciones</Text>
      ):(
        <AddressList addresses={addresses} reloading={setReloading}/>
      ) }
    </ScrollView>
  )
}

export default Addresses
const styles= StyleSheet.create({
  container:{
    padding:20
  },
  title:{
    fontSize:20
  },
  addAdress:{
    borderWidth:0.9,
    borderRadius:5,
    borderColor:'black',
    paddingHorizontal:15,
    paddingVertical:5,
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center'
  },
  addresText:{
    fontSize:16
  },
  activitiloading:{
    marginTop:20
  },
  textoDirecciones:{
    marginTop:20
  }
})