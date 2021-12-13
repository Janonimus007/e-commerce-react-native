import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { getMeAoi } from '../api/user'
import InfoUser from '../components/InfoUser'
import MenuUser from '../components/MenuUser'
import ScreenLoading from '../components/ScreenLoading'
import Search from '../components/Search'
import useAuth from '../hooks/useAuth'

const Account = () => {
  const [user, setUser] = useState({
    name:"first name",
    last_name:"last name",
    email:"email"
  })
  const {auth} =useAuth()
  useFocusEffect(
    useCallback(() => {
        (async ()=>{
          const response = await getMeAoi(auth.token)
          setUser(response)
        })()
      },
      [],
    )
  )
  return (
    <>
    {user?(
    <View style={{flex:1}}>
      <Search/>
       <ScrollView>
        <InfoUser user={user}/>
        <MenuUser/> 
       </ScrollView>
    </View>): 
    (<ScreenLoading text="cargando" color="black"/>)
    }
    
   
    </>

  )
}

export default Account
