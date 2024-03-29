import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import { UserLocationContext } from '../../../Context/UserLocationContext'
import GlobalApi from '../../../assets/Utils/GlobalApi'
import PlaceListView from './PlaceListView'
import { SelectedMarkerContext } from '../../../Context/SelectedMarkerContext'

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState([]);

  useEffect(() => {
    location&&GetNearByPlace();
  }, [location])

  const GetNearByPlace = () => {
    const data = {
      "includedTypes": ["gas_station"],
      "maxResultCount": 20,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location?.latitude,
            "longitude": location?.longitude
          },
          "radius": 1500.0
        }
      }
    }

    GlobalApi.NewNearByPlace(data).then(resp => {
      console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data?.places)
    })
  }

  return (
    <SelectedMarkerContext.Provider value={{selectedMarker, setSelectedMarker}}>
      <View>
      <View style={styles.headerContainer}>
        <Header/>
      </View> 

      {placeList&&<AppMapView placeList={placeList}/>}

      <View style={styles.placeListContainer}>
        {placeList&&<PlaceListView placeList={placeList} />}
      </View>
    </View>
    </SelectedMarkerContext.Provider>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20
  },

  placeListContainer: {
    position: 'absolute',
    bottom: 0, 
    zIndex: 10,
    width: '100%',

  }
});