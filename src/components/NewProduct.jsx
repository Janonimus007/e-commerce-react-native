import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {getLastProductsApi} from "../api/product"
const NewProduct = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    (async ()=>{
      const response =  await getLastProductsApi(2)
      setProducts(response)
    })()
  }, [])
  return (
    <View>
      <Text> hola mundo</Text>
    </View>
  )
}

export default NewProduct
