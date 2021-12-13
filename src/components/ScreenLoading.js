import React from 'react'
import { Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'

const ScreenLoading = (props) => {
  const {color,text}=props
  return (
    <SafeAreaView style={style.container}>
      <ActivityIndicator size="large" color={color} style={style.loading}/>
      <Text style={style.loading}>{text}</Text>
    </SafeAreaView>
  )
}

export default ScreenLoading
const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18
  },
  loading:{
    marginBottom:10
  }
})
