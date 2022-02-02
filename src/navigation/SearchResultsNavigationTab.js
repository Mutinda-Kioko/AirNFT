import React from 'react';
import SearchResultsMap from '../screens/SearchResultsMap';
import SearchResultScreen from '../screens/SearchResult';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const SearchResultsNavigationTab = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle:{
            backgroundColor:"#f15454",
        }
    }}>
      <Tab.Screen name={"List"} component={SearchResultScreen}/>
      <Tab.Screen name={"Map"} component={SearchResultsMap}/>
    </Tab.Navigator>
  );
};

export default SearchResultsNavigationTab;
