import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { icon } from '../../constants'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import HomeCard from "../../componnets/homeCard"
import { StyleSheet } from 'react-native';

const data=[
  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail},
  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail}
,  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail}
,  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail}

]

const profile = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <FlatList
        data={data}
        renderItem={({ item }) => (
           <HomeCard postTitel={item.postTitel} name={item.name} img={item.img} />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={()=>(
          <View>
              <Text>
                jsmastry
              </Text>
          </View>
        )}
        
        />
      </SafeAreaView>
    </GestureHandlerRootView>
    
  )
}

export default profile
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E2D",
    height: "100%",
  
    
  },
})