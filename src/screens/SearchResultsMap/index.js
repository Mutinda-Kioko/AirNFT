import { View, FlatList, useWindowDimensions } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';



const SearchResultsMap = () => {
const [selectedPlaceId, setSelectedPlaceId] = useState(null);
const width = useWindowDimensions().width;
const flatlist = useRef();
const maP = useRef();
const viewConfig = useRef({itemVisiblePercentThreshold: 70});
const onViewChanged = useRef(({viewableItems}) => {
  if (viewableItems.length > 0) {
    const selectedPlace = viewableItems[0].item
    setSelectedPlaceId(selectedPlace.id)
  }
})

useEffect(() => {
if (!selectedPlaceId || !flatlist) {
  return;
}
const index = places.findIndex(place => place.id === selectedPlaceId)
flatlist.current.scrollToIndex({index});
const selectedPlace = places[index];
const region = {
  latitude: selectedPlace.coordinate.latitude,
  longitude: selectedPlace.coordinate.longitude,
  latitudeDelta: 0.8,
  longitudeDelta: 0.8,
}
maP.current.animateToRegion(region);
}, [selectedPlaceId]);

return (
    <View style={{width:'100%', height:'100%'}}>
    <MapView
    ref={maP}
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
    ref={flatlist}
    data={places}
    horizontal
    renderItem={({item}) => <PostCarouselItem post={item}/> }
    showsHorizontalScrollIndicator={false}
    snapToInterval={width - 60}
    snapToAlignment={'center'}
    decelerationRate={'fast'}
    viewabilityConfig={viewConfig.current}
    onViewableItemsChanged={onViewChanged.current}
    />
  </View>
    </View>
  );
};

export default SearchResultsMap;
