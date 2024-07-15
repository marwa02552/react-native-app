import { View, Text,Image } from 'react-native'
import React from 'react'
import icon from "../constants/icon" 
import { StyleSheet } from 'react-native';

const homeCard = (props) => {
  return (
    <View style={styles.card}>
        <View style={styles.titel}>
            <View style={styles.profile}>
                <Text style={styles.miniCard}>J</Text>
                <View>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>{props.postTitel}</Text>
                    <Text style={{color:"white",fontSize:14}}>{props.name}</Text>
                </View>
            </View>
<View>
<Image source={icon.menu}  resizeMode='contain' style={{height:30}} />

</View>
        </View>
        <Image  source={props.img} resizeMode='contain' style={{width:"100%"}}/>
    </View>
  )
}

export default homeCard
const styles = StyleSheet.create({
  card:{
    width:"100%",
    marginBottom:20,
    marginTop:20,
   
  },
  titel:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginBottom:10,
    justifyContent:"space-between"
  },
  miniCard:{
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
  profile:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  }
})