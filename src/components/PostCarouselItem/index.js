import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import styles from './styles.js'

const PostCarouselItem = (props) => {
    const _post = props.post;
    const width = useWindowDimensions().width
    return (
        <View style={styles.container,{width: width - 60}}>
            <View style={styles.innerContainer}>
                 {/* Image */}
           <Image
           style={styles.image}
           source={{uri: _post.image}}
           />
           {/* Bed and Bedroom */}
           <View  style={{flex:1, marginHorizontal: 10}}>
           <Text style={styles.bedroom}>{_post.bed} bed {_post.bedroom} Bedroom</Text>
           {/* Type and escription */}
           <Text style={styles.description}  numberOfLines={2}>
            {_post.type}.  {_post.title}
           </Text>
           <Text style={styles.prices}>
               <Text style = {styles.newPrice}>  {_post.newPrice} AVAX </Text>
               /night
           </Text>
           </View>
            </View> 
        </View>
    )
}

export default PostCarouselItem
