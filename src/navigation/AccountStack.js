import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account'
import ChangeName from '../screens/ChangeName';
import ChangeEmail from '../screens/ChangeEmail';
import ChangeUsername from '../screens/ChangeUsername';
import ChangePassword from '../screens/ChangePassword';
import Addresses from '../screens/Addresses';
import AddAddress from '../screens/AddAddress';
const Stack = createNativeStackNavigator()
const AccountStack = () => {
  return (
   <Stack.Navigator
    screenOptions={{
      headerTintColor:'#264871',
      headerStyle:{backgraundColor:'black'},
      cardStyle:{
        backgraundColor:'#264871'
      },
    }}
   >
     <Stack.Screen
        name ="cuenta"
        component={Account}
        options={{title:"Cuenta",headerShown:false}}
     />
     <Stack.Screen
        name ="change-name"
        component={ChangeName}
        options={{title:"Cambiar nombre y apellidos"}}
     />
      <Stack.Screen
        name ="change-email"
        component={ChangeEmail}
        options={{title:"Cambiar email"}}
     />
      <Stack.Screen
        name ="change-username"
        component={ChangeUsername}
        options={{title:"Cambiar nombre de usuario"}}
     />
      <Stack.Screen
        name ="change-password"
        component={ChangePassword}
        options={{title:"Cambiar mi contraseña"}}
     />
      <Stack.Screen
        name ="addresses"
        component={Addresses}
        options={{title:"Direcciones"}}
     />
      <Stack.Screen
        name ="addaddress"
        component={AddAddress}
        options={{title:"Agregar direcciones"}}
     />
   </Stack.Navigator>
  )
}

export default AccountStack
