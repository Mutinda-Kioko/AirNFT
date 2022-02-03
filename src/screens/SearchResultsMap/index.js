import { View, Text } from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';

const SearchResultsMap = () => {
const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={{width:'100%', height:'100%'}}>
    <MapView
    style={{width:'100%', height:'100%'}}
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude: 20.3298227,
      longitude: -16.5124847,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }}>
    {places.map((place, index) => <CustomMarker 
     key={index}
     coordinate={place.coordinate}
     price={place.newPrice}
     isSelected={place.id === selectedPlaceId}
     onPress={() => setSelectedPlaceId(place.id)}
      
      />)}

  </MapView>
    </View>
  );
};

export default SearchResultsMap;
