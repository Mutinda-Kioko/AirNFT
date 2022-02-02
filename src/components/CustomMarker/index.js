import { View, Text } from 'react-native';
import React from 'react';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const CustomMarker = (props) => {
    const {coordinate, price} = props;
  return (
<Marker coordinate={coordinate}>
<View style={{backgroundColor:'white', padding: 5, borderRadius: 10, borderColor:'grey', borderWidth: 1}}>
        <Text style={{fontWeight:'bold'}}>
            {price}
        </Text>
    </View>
</Marker>
  );
};

export default CustomMarker;
