import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'

const Post = (props) => {
    const _post = props.post;
    return (
        <View style={styles.container}>
           {/* Image */}
           <Image
           style={styles.image}
           source={{_uri: _post.image}}
           />
           {/* Bed and Bedroom */}
           <Text style={styles.bedroom}>{_post.bed} bed {_post.bedroom} Bedroom</Text>
           {/* Type and escription */}
           <Text style={styles.description}  numberOfLines={2}>
            {_post.type}.  {_post.title}
           </Text>
           {/* Old Price/ New Price */}
           <Text style={styles.prices}>
               <Text style={styles.oldPrice}>{_post.oldPrice} AVAX </Text>
               <Text style = {styles.newPrice}>  {_post.newPrice} AVAX </Text>
               /night
           </Text>
           {/* Total Price */}
           <Text style={styles.totalPrice}>{_post.totalPrice} AVAX Total</Text>
        </View>
    )
}

export default Post
