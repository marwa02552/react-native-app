import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icon } from '../../constants';
import { StyleSheet } from 'react-native';
const TabIcon = ({ icon, color, name }) => {
    return (
        <View    style={style.icon}        >
            <Image source={icon} resizeMode="contain" style={{ width: 24, height: 24, tintColor: color }} />
            <Text style={{ color: color }}>{name}</Text>
        </View>
    );
};

const tabslayout = () => {
    return (
        <>
            <Tabs 
                screenOptions={{
                    tabBarStyle: {
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                    },
                    tabBarShowLabel:false
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon

                                icon={icon.home}
                                color={color}
                                name="Home"
                            />
                        ),
                    }}
                />
                   <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.upload}
                                color={color}
                                name="Create"
                            />
                        ),
                    }}
                />
                 <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.profile}
                                color={color}
                                name="Profile"
                            />
                        ),
                    }}
                />
                 <Tabs.Screen
                    name='bookmarket'
                    options={{
                        title: 'Bookmarket',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.bookmark}
                                color={color}
                                name="Bookmarket"
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default tabslayout;

const style=StyleSheet.create({
    icon:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    }
})