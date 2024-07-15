import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import images from '../../constants/images';
import HomeCard from "../../componnets/homeCard"
import icon from '../../constants/icon';
import TrendingSection from '../../componnets/trendingSection';


const data=[
  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail},
  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail}
,  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail}
,  {postTitel:"how ai is used this days",name:"mmmmmmm",img:images.thumbnail}

]
const home = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <FlatList
         style={{ paddingLeft:15,paddingRight:15}}
          data={data}
          renderItem={({ item }) => (
             <HomeCard postTitel={item.postTitel} name={item.name} img={item.img} />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={()=>(
            <View>
              <View style={styles.top}>
                <View style={styles.titel}>
                  <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>Welcom back</Text> 
                  <Text style={{color:"white",fontSize:16}}>JSMastery</Text> 
                </View>
                <Image source={images.logoSmall} resizeMode='contain' style={{width:60,height:40}}/>
              </View>
              <View style={{marginTop:25,marginBottom:25}}>
              <Text style={{color:"white",fontSize:16}}>Latest video</Text> 
              <TrendingSection/>
              </View>
              <View style={styles.inputSearch}>
              <TextInput
               style={styles.input} 
               placeholder='Search a video topic'
               placeholderTextColor={'#CDCDE0'}
               />
              <Image source={icon.search} resizeMode='contain' style={{width:15,height:15}}/>
              
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E2D",
    height: "100%",
  
    
  },
  input: {
   
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#232533',
    color: 'white',
  }
,
top:{
  display:"flex",
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:"center"
},
inputSearch:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232533',
    marginBottom:15,
    marginTop:15
}


});
