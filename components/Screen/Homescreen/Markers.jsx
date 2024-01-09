import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { Marker } from 'react-native-maps';
import { SelectedMarkerContext } from '../../../Context/SelectedMarkerContext';

export default function Markers({index, place}) {
  const {selectedMarker, setSelectedMarker} = useContext(SelectedMarkerContext);
  return place&&(
    <Marker
      coordinate={{
        latitude: place.location?.latitude,
        longitude: place.location?.longitude
      }}

      onPress={() => setSelectedMarker(index)}
        >
          <Image 
            source={require('./../../../assets/images/gas-station-location-marker.png')}
            style={{ width: 60, height: 60 }}
          />
    </Marker>
  )
}