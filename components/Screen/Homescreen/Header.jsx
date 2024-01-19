import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../../assets/Utils/Colors';

export default function Header() {
    const { user } = useUser();
    return (
        <View style={styles.container}>
            <Image 
                source={{uri:user?.imageUrl}}
                style={{ width: 40, height: 40, borderRadius: 99 }}
            />

            <Image 
                source={require('./../../../assets/images/gas_station_logo.png')}
                style={{ width: 50, height: 50, objectFit: 'contain' }}
            />

            <Image 
                source={require('./../../../assets/images/gas-pump-icon.png')}
                style={{ width: 50, height: 50, objectFit: 'contain' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors.WHITE_TRANSP
    },
  });