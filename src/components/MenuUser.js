import React from 'react'
import { View,  Alert } from 'react-native'
import { List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'
import useAuth from '../hooks/useAuth'
const MenuUser = () => {
  const Navigation = useNavigation()
  const {logout}=useAuth()
  return (
    <View>
    <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        <List.Item
          title="Cambiar nombre"
          description="Cambia el nombre de tu cuenta"
          left={(props)=><List.Icon {...props} icon="face"/>}
          onPress={()=>Navigation.navigate("change-name")}
        />
        <List.Item
          title="Cambiar email"
          description="Cambia el email de tu cuenta"
          left={(props)=><List.Icon {...props} icon="email"/>}
          onPress={()=>Navigation.navigate('change-email')}
        />
        <List.Item
        title="Cambiar username"
        description="Cambia el nombre de usuario de tu cuenta"
        left={(props)=><List.Icon {...props} icon="sim"/>}
        onPress={()=>Navigation.navigate("change-username")}
        />
        <List.Item
        title="Cambiar contraseña"
        description="Cambia la contraseña de tu cuenta"
        left={(props)=><List.Icon {...props} icon="key"/>}
        onPress={()=>Navigation.navigate("change-password")}
        />
        <List.Item
        title="Mis direcciones"
        description="Administra tus direcciones de envio"
        left={(props)=><List.Icon {...props} icon="map"/>}
        onPress={()=>Navigation.navigate("addresses")}
        />
      </List.Section>
      <List.Section>
      <List.Subheader>App</List.Subheader>
       <List.Item
          title="Pedidos"
          description="Listado de todos los pedidos"
          left={(props)=><List.Icon {...props} icon="clipboard-list"/>}
          onPress={()=>console.log("presionando mis pedidos")}
        />
        <List.Item
          title="lista de deseos"
          description="lista de todos los deseos"
          left={(props)=><List.Icon {...props} icon="heart"/>}
          onPress={()=>Navigation.navigate("favorites")}
        />      
        <List.Item
        title="Cerrar sesion"
        description="Salir de la sesion e iniciar una nueva sesion"
        left={(props)=><List.Icon {...props} icon="logout"/>}
        onPress={logout}
      />
     </List.Section>
    </View>
  )
}

export default MenuUser
