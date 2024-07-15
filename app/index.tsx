import React from 'react';
import { Image,  Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

import images from '@/constants/images';
import Button from '../componnets/button'
export default function Index() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.viewStyle} >
          <Image source={images.logo} style={style.img} resizeMode="contain" />
          <Image source={images.cards} style={{ height: 280, width: "100%", maxWidth: 380 }} resizeMode="contain" />
          <View style={style.text}>
            <Text style={style.titel}>  Discover Endless {"\n"} Possibilities with <Text style={style.subText }>Aora</Text>
            </Text>
          </View>
          <Text style={style.desc} > Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora</Text>
            <Button link="sign-in" text={"join us now "}/>
           
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />

    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E2D",
    height: "100%",
    paddingLeft:30,
    paddingRight:30
    
  },
  viewStyle:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  img: {
    width: 130,
    height: 84

  },
  text: {
   display:"flex",
   alignItems:"center",
   justifyContent:"center"
  },
  titel:{
    color:"white",
    fontWeight:"bold",
    fontSize:26,
    textAlign:"center"
  },
  subText:{
    color:"#FF9C01"
  },
  desc:{
    textAlign:"center",
    fontSize:13,
    color:"#F5F5F5",
    marginTop:10
  }
})