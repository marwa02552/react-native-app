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
          <View style={styles.profileText}> 
               <Text style={styles.miniCard}>J</Text>

              <Text style={{marginTop:12,marginBottom:17 ,color:"white",fontSize:16,fontWeight:"bold"}}>
                jsmastry
              </Text>
             <View style={styles.text}>
              <View style={styles.profileText}>
                <Text style={{color:"white",fontSize:16,fontWeight:"bold",marginRight:20}}>4</Text>
                <Text style={{color:"white",fontSize:14,marginRight:20}}>Posts</Text>
              </View>
              <View style={styles.profileText}>
               <Text style={{color:"white",fontSize:16,fontWeight:"bold",marginLeft:24}}>1.2K</Text>
                <Text style={{color:"white",fontSize:14,marginLeft:24}}>followers</Text>
              </View>
              </View> 
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
  profileText:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  text:{
    display:"flex",
    flexDirection:"row"
  },
  miniCard:{
    marginTop:10,
    backgroundColor:"#79F8F8",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#686F8C",
    width:40,
     paddingTop:10,
     paddingBottom:10,
    textAlign:"center",
    fontWeight:"bold",
    marginRight:10
  },
})