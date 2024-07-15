import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import { StyleSheet } from 'react-native';
import Button from '../../componnets/button'
import { Link } from 'expo-router';
const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');


  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={images.logo} resizeMode='contain' style={{ width: 180, height: 100 }} />
          <Text style={styles.titel}>Signup to Aora</Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.lable}>User name</Text>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.lable}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View stylstyle={{ marginBottom: 10 }} e={{ marginBottom: 10 }}>
            <Text style={styles.lable}>Password</Text>
            <TextInput
              value={password}
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setPassword}

            />
          </View>
          <Button link="/profile" text="signup" />
          <View style={styles.subTitel}>
            <Text style={{ color: "white" }}>Have an account already?</Text>
            <Link style={{ color: "#FF9C01" }} href="/sign-in">sign in</Link>
          </View>
        </View>

      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default signup
const styles = StyleSheet.create({
  input: {
    height: 35,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "#232533"
  },

  container: {
    backgroundColor: "#1E1E2D",
    height: "100%",
    paddingLeft: 30,
    paddingRight: 30
  },
  titel: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20
  },
  lable: {
    color: "white",
    fontSize: 14,
    marginBottom: 10

  },
  subTitel: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center"
  }
})
