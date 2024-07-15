import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const button = (props) => {
  return (
    <TouchableOpacity style={style.button}>
         <Link href={props.link} style={style.text}>{props.text}</Link>
    </TouchableOpacity>
  )
}

export default button

const style = StyleSheet.create({
    button:{
        backgroundColor:"#FF9C01",
        borderRadius:5,
        paddingTop:7,
        paddingBottom:7,
        textAlign:"center",
        marginTop:20,
        width:"100%",
       
    },
    text:{
        textAlign:"center"
    }
})