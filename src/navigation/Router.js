import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests'
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen  name={"Home"}
                component={HomeTabNavigator}
                options={{
                    headerShown: false
                }}/>
                <Stack.Screen  name={"Destination Search"}
                component={DestinationSearchScreen}
                options={{
                    title: "Search Your Destination"
                }}/>
                <Stack.Screen  name={"Guests"}
                component={GuestsScreen}
                options={{
                    title: "Number of Guests"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
