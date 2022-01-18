import React, {useState} from 'react'
import { View,Pressable, TextInput, FlatList, Text } from 'react-native'
import styles from "./styles.js";
import searchResult from '../../../assets/data/search';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const DestinationSearchScreen = () => {
    const navigation = useNavigation()
    const [inputText, setInputText] = useState('')
    return (
        <View style={styles.container}>
            {/* Input*/}
            <TextInput 
             style={styles.textInput}
             placeholder='Search for a house...'
             value={inputText}
             onChangeText={setInputText}
            />
            {/* list of components*/}
            <FlatList
            data={searchResult}
            renderItem = {({item}) => (
                <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name='location-pin'  size={30}/>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
            )}
            />
        </View>
    )
}

export default DestinationSearchScreen
