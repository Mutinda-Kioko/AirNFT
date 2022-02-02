import React, {useState} from 'react'
import { View, TextInput, FlatList, Text, processColor } from 'react-native'
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import SuggestionRow from './SuggestionRow';
import 'dotenv';

const DestinationSearchScreen = () => {
    const navigation = useNavigation()
    return (
            <View style={styles.container}>
            <GooglePlacesAutocomplete
            placeholder='Where are you going...'
            onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
                console.log(data, details);
                navigation.navigate('Guests'); 
                }}
        fetchDetails
        styles={{
             textInput:styles.textInput,

        }}
         query={{
             key:process.env.API_KEY,
             language: 'en',
             types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item}/>}
    />
            </View>
    )
}

export default DestinationSearchScreen
