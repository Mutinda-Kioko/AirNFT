import React from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native'
import styles from './styles';
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () =>  {
    const navigation = useNavigation();
    return (
        <View>
                       
            <ImageBackground source={require("../../../assets/images/wallpaper.jpg")} style={styles.image}>
             <Text style={styles.title}>Air NFT </Text>   
              <Pressable
              style={styles.button}
              onPress={() => console.warn('Explore Button Clicked')}
              >
                  <Text style={styles.buttonText}>
                      Explore NearBy Stays
                  </Text>
              </Pressable>
            </ImageBackground>
            <Pressable
              style={styles.searchbutton}
              onPress={() => navigation.navigate('Destination Search')}
              >
                  <Fontisto name="search" size={25} color={"#f15454"} />
                  <Text style={styles.searchbuttonText}>
                      Lets go SomeWhere...Shall We?
                  </Text>
              </Pressable>   
        </View>
    )
}

export default HomeScreen;
