import { View, FlatList } from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';



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
  <View style={{position:'absolute', bottom: 50}}>
    <FlatList
    data={places}
    horizontal
    renderItem={({item}) => <PostCarouselItem post={item}/> }
    showsHorizontalScrollIndicator={false}
    />
  </View>
    </View>
  );
};

export default SearchResultsMap;
