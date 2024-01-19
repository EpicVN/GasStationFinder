import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapViewStyle from './../../../assets/Utils/MapViewStyle.json'
import { UserLocationContext } from '../../../Context/UserLocationContext';
import Markers from './Markers';

export default function AppMapView({placeList}) {
  const { location, setLocation } = useContext(UserLocationContext);


  return (
    <View>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        showsMyLocationButton={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        showsScale={true}
        mapPadding={{top: 280, bottom: 280, right: 10, left: 10}}
        showsUserLocation={true}
        showsCompass={true}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.012,
          longitudeDelta: 0.011
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude
          }}
        >
          <Image 
            source={require('./../../../assets/images/your_location_icon.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>

        {placeList&&placeList.map((item, index) => (
          <Markers place={item} index={index} key={index}/>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    }
  });