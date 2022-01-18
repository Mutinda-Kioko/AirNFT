import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Home';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454' ,
        }}>
           <Tab.Screen
           name={"Explore"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                ) 
            }}
           />
           <Tab.Screen
           name={"Saved"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                ) 
            }}
           />
           <Tab.Screen
           name={"Create"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name="add-circle-outline" size={25} color={color} />
                ) 
            }}
           />
           <Tab.Screen
           name={"Messages"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                ) 
            }}
           />
           <Tab.Screen
           name={"Profile"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color} />
                ) 
            }}
           />
            
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;
