import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoUser = (props) => {
  const {user} = props
  useEffect(() => {
   console.log(user);
  }, [user])
  return (
    <View style={style.container}>
      <Text style={style.tittle}>Bienvenido</Text>
      {!(user.name ==="first name" && user.last_name==="last name")||(user.name ===null && user.last_name===null)?
      (<Text style={style.titleName}>
        {user.name} {user.last_name}
      </Text>):
     ( <Text style={style.titleName}>{user.email}</Text>)
      }
    </View>
  )
}

export default InfoUser
const style = StyleSheet.create({
  container:{
    height:100,
    justifyContent:'center',
    padding:20
  },
  tittle:{
    fontSize:20
  },
  titleName:{
    fontSize:20,
    fontWeight:"bold"
  },
})
