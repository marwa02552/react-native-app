import { View, Text, FlatList, TextInput, Image } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import HomeCard from '../../componnets/homeCard';
import images from '../../constants/images';
import icon from '../../constants/icon';
const data = [
  { postTitel: "how ai is used this days", name: "mmmmmmm", img: images.thumbnail },
  { postTitel: "how ai is used this days", name: "mmmmmmm", img: images.thumbnail }
  , { postTitel: "how ai is used this days", name: "mmmmmmm", img: images.thumbnail }
  , { postTitel: "how ai is used this days", name: "mmmmmmm", img: images.thumbnail }

]
const bookmarket = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <HomeCard postTitel={item.postTitel} name={item.name} img={item.img} />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <View>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Saved videos</Text>

              <View style={styles.inputSearch}>
                <TextInput
                  style={styles.input}
                  placeholder='Search a video topic'
                  placeholderTextColor={'#CDCDE0'}
                />
                <Image source={icon.search} resizeMode='contain' style={{ width: 15, height: 15 }} />

              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default bookmarket

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E2D",
    height: "100%",


  },
  inputSearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232533',
    marginBottom: 15,
    marginTop: 15
  }
})
