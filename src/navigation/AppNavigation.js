import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Cart from '../screens/Cart'
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Account from '../screens/Account'
import Awesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet } from 'react-native'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import AccountStack from './AccountStack'

const Tab = createMaterialBottomTabNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={style.tabs}
        screenOptions={({route})=>({
          tabBarIcon:(routeStatus)=>{
            return setIcon(route,routeStatus)
          }
        })}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title:"Inicio"
          }}
        />
        <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
          title:"Favoritos"
        }}
        />   
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            title:"Carrito"
          }}
        />        
    
        <Tab.Screen
        name="account"
        component={AccountStack}
        options={{
          title:"Mi Cuenta"
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

function setIcon(route,routeStatus){
  let iconName="";
  switch(route.name){
    case "home":
      iconName ="home";
      break;
    case "favorites":
      iconName ="heart";
      break;
    case "cart":
      iconName ="shopping-cart";
      break;
    case "account":
      iconName ="bars";
      break;
  }
  return <Awesome name={iconName} style={style.icon}/>
}

const style = StyleSheet.create({
  tabs:{
    backgroundColor:"#264871"
  },
  icon:{
    color:"#BFD0E4"
  }
})