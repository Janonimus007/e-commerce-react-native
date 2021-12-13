import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

const Search = () => {
  return (
    <View style={style.container}>
      <Searchbar
        placeholder="Busca tu producto"
      />
    </View>
  )
}

export default Search
const style = StyleSheet.create({
  container:{
    backgroundColor:"#264871",
    paddingHorizontal:20,
    paddingVertical:10,
  }
})