import React, {useState} from 'react'
import { View, TextInput, FlatList, Text } from 'react-native'
import styles from "./styles.js";
import searchResult from '../../../assets/data/search';
import Entypo from '@expo/vector-icons/Entypo'

const DestinationSearchScreen = () => {
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
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name={location-pin}  size={30}/>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
            )}
            />
        </View>
    )
}

export default DestinationSearchScreen
