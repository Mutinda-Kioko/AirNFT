import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles.js'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (
        <View>
            {/* Titles */}
            <View style={styles.row}>
                <View style={styles.adult}>
                    <Text style={styles.title}>Adults</Text>
                    <Text style={styles.titleText}>Ages 13 and above</Text>
                </View>
                <View style={styles.buttons}>
                    <Pressable
                    style={styles.button}
                    onPress={() => setAdults(Math.max(0,adults - 1))}>
                        <Text style={styles.textButton}>-</Text>
                    </Pressable>
                    <Text style={styles.buttonText}>{adults}</Text>
                    <Pressable
                    style={styles.button}
                    onPress={() => setAdults(adults + 1)}>
                        <Text style={styles.textButton}>+</Text>
                    </Pressable>                    
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.adult}>
                    <Text style={styles.title}>Children</Text>
                    <Text style={styles.titleText}>Ages 4 to 12</Text>
                </View>
                <View style={styles.buttons}>
                    <Pressable
                    style={styles.button}
                    onPress={() => setChildren(Math.max(0,children - 1))}>
                        <Text style={styles.textButton}>-</Text>
                    </Pressable>
                    <Text style={styles.buttonText}>{children}</Text>
                    <Pressable
                    style={styles.button}
                    onPress={() => setChildren(children + 1)}>
                        <Text style={styles.textButton}>+</Text>
                    </Pressable>                    
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.adult}>
                    <Text style={styles.title}>Infants</Text>
                    <Text style={styles.titleText}>NewBorns to  3 years</Text>
                </View>
                <View style={styles.buttons}>
                    <Pressable
                    style={styles.button}
                    onPress={() => setInfants(Math.max(0,infants - 1))}>
                        <Text style={styles.textButton}>-</Text>
                    </Pressable>
                    <Text style={styles.buttonText}>{infants}</Text>
                    <Pressable
                    style={styles.button}
                    onPress={() => setInfants(infants + 1)}>
                        <Text style={styles.textButton}>+</Text>
                    </Pressable>                    
                </View>
            </View>
        </View>
    )
}

export default GuestsScreen
