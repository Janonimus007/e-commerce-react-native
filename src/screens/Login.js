import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import {layoutStyle} from '../styles'
import FormRegister from '../components/FormRegister'
import FormLogin from '../components/FormLogin'
const Login = () => {
  const [showLogin, setShowLogin] = useState(true)
  const gotoLogin =()=>{
    setShowLogin(!showLogin)
  }
  return (
    <View style={layoutStyle.container}>
      <ImageBackground
        style={style.imagen}
        source={require('../assets/images/iacomerce.png')}
      />
    {showLogin?<FormLogin gotoLogin={gotoLogin}/> :<FormRegister gotoLogin={gotoLogin}/>}  
    </View>
  )
}

export default Login

const style = StyleSheet.create({
  imagen:{
    flex:1,
    width:'90%',
    height:40,
    marginTop:'30%',
    alignSelf:'center',
    marginBottom:0
  }
})