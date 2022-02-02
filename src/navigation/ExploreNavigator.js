import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/Home";
import SearchResultScreen from '../screens/SearchResult';
import SearchResultsNavigationTab from './SearchResultsNavigationTab'
const Stack = createStackNavigator();

const Router = (props) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={'welcome'}
            component={HomeScreen}
            options={{
                headerShow: false
            }}
            />
            
            <Stack.Screen
            name={'SearchResultScreen'}
            component={SearchResultsNavigationTab}
            options={{
                title:"Search your destination"
            }}
            />
        </Stack.Navigator>
    );
};

export default Router;