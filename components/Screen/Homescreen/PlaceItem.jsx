import { View, Text, Image, Dimensions, StyleSheet, Platform, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Utils/Colors'
import GlobalApi from '../../../assets/Utils/GlobalApi'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function PlaceItem({place}) {
    const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";

    const onDirectionClick = () => {
      const url=Platform.select({
        ios:"maps:"+place.location.latitude+","+place?.location?.longitude+"?q="+place?.displayName.text,
        android:"geo:"+place.location.latitude+","+place?.location?.longitude+"?q="+place?.displayName.text 
      })
      Linking.openURL(url)
    }
  return (
    <View style={{
            width: 350,
            backgroundColor: Colors.WHITE,
            margin: 5,
            borderRadius: 10
        }}>
      <LinearGradient colors={['transparent', '#FFFFFF']}>
        <Image 
            source={
                place?.photos?
                {uri:PLACE_PHOTO_BASE_URL+place?.photos[0]?.name+
                "/media?key="+GlobalApi.API_KEY+"&maxHeightPx=800&maxWidthPx=1200"}
                :require('./../../../assets/images/gas-station-location.png')}
            style={{width: '100%', borderRadius: 10, height: 130, zIndex: -1}}
        />

        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'BeVietnamPro-medium'}}>{place.displayName?.text}</Text>
        </View>

        <View style={{padding: 10}}>
            <Text style={{color: Colors.GRAY, fontFamily: 'BeVietnamPro'}}>{place?.shortFormattedAddress}</Text>
        </View>

        <TouchableOpacity style={styles.locationIcon} onPress={onDirectionClick}>
            <FontAwesome name="location-arrow" size={24} color="white" />
        </TouchableOpacity> 
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    locationIcon: {
      padding: 12,
      backgroundColor: Colors.PRIMARY,
      borderRadius: 6,
      paddingHorizontal: 14,
      position: 'absolute',
      right: 0,
      margin: 8
    },
  });