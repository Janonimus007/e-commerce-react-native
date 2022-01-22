import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { StatusBar } from 'react-native-web'
import NewProduct from '../components/NewProduct'
import Search from '../components/Search'

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={'#264871'}/>
      <Search/>
      <ScrollView>
        <NewProduct/>
      </ScrollView>
    </>
  )
}

export default Home
