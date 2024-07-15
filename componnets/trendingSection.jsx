import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import images from '../constants/images'
const data=[{img:images.thumbnail},{img:images.img1},{img:images.img2},{img:images.img3},{img:images.thumbnail},{img:images.img1},{img:images.img2}]
const TrendingSection = () => {
  return (
    <FlatList
    data={data}
    horizontal
    renderItem={({ item }) => (
        <Image resizeMode='contain'  source={item.img} style={{width:250,height:400,marginLeft:15,marginRight:15}}/>
     )}
     keyExtractor={item => item.id}
    
    />
  )
}

export default TrendingSection