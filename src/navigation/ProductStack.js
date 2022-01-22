import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home"

const Stack = createNativeStackNavigator()
const ProductStack = () => {
  return (
   <Stack.Navigator
   screenOptions={{
    headerTinColor:'#264871',
    headerStyle:{backgroundColor:'#264871'},
    cardStyle:{
      backgroundColor:'white'
    }
  }}
   >
     <Stack.Screen
      name="home"
      component={Home}
      options={{headerShown:false}}
     />
   </Stack.Navigator>
  )
}

export default ProductStack
