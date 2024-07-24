import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import icon from '../../constants/icon';
import Button from "../../componnets/button"
const Create = () => {
    const [form, setForm] = useState({
        title: "",
        video: null,
        image: null,
    });


    const pickImage = async (mediaType) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            if (mediaType === 'image') {
                setForm({ ...form, image: result.assets[0].uri });
            } else if (mediaType === 'video') {
                setForm({ ...form, video: result.assets[0].uri });
            }
        }
    };

    return (
        <GestureHandlerRootView>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{paddingLeft:15,paddingRight:15}}>
                    <Text style={styles.headerText}>Upload Video</Text>
                    <View>
                        <Text style={{ color: "white", fontSize: 16 }}>video titel</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Give your video titel.....'
                        />
                    </View>

                    <View>
                        <Text style={{ color: "white", fontSize: 16,marginBottom:10 }}>Upload image</Text>

                        <TouchableOpacity style={styles.inputfile} onPress={() => pickImage("image")}>
                            <View style={styles.text}>

                                <Image source={icon.upload} resizeMode='contain' style={{ width: 30, height: 30, marginRight: 10 }}></Image>
                                <Text>Choase a file</Text>

                            </View>
                            {form.image && <Image source={{ uri: form.image }} resizeMode='contain' width={250} height={500} />}
                        </TouchableOpacity>

                    </View>
                  <View>
                  <Text style={{ color: "white", fontSize: 16,marginBottom:10 }}>Upload video</Text>

                  <TouchableOpacity style={styles.input} onPress={() => pickImage("video")}>
                        <View style={styles.text}>
                            <Image source={icon.upload} resizeMode='contain' style={{ width: 30, height: 30 }}></Image>
                        </View>
                        {form.video &&
                            <Video
                                source={{ uri: form.video }}
                                style={{ width: '100%', height: 256, borderRadius: 16 }}
                                useNativeControls
                                resizeMode={Video.RESIZE_MODE_CONTAIN}
                                isLooping
                            />

                        }
                    </TouchableOpacity>
                  </View>
                    <View>
                        <Text style={{ color: "white", fontSize: 16 }}>AI Promote</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='The promote you used to crete this video'
                        />
                    </View>
                    <Button link="/profile" text="Submit and publish" />

                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default Create;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E1E2D",
        height: "100%",
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        height: 150,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#232533",
        color: 'grey'


    },
    inputfile: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#232533",
        color: 'grey'

    },

    textInput: {
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#232533",
        padding: 10,
        marginTop: 10,
        color: 'grey'
    },
    text: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center"
    }
});
