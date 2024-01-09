import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
    const onPress = async () => {
        try {
        const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
        if (createdSessionId) {
            setActive({ session: createdSessionId });
        } else {
            // Use signIn or signUp for next steps such as MFA
        }
        } catch (err) {
            console.error("OAuth error", err);
        }
    };

    return ( 
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50
        }}>
            <Image source={require('../../assets/images/gas_station_logo.png')}
                style={styles.logoImage}
            />

            <Image source={require('../../assets/images/gas_station_intro.png')}
                style={styles.bgImage}
            />

            <View style={{ padding: 20 }}>
                <Text style={styles.heading}>Gas Station Finder</Text>
                <Text style={styles.desc}>Tìm kiếm trạm xăng xung quanh bạn một cách nhanh chóng</Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: 'BeVietnamPro',
                        fontSize: 17
                    }}>
                        Login with Google
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    logoImage: {
        width: 200,
        height: 100,
        marginBottom: 25,
        objectFit: 'contain'
    },

    bgImage: {
        width: '100%',
        height: 200,
        marginTop: 20,
        objectFit: 'cover'
    },

    heading: {
        fontSize: 25,
        fontFamily: 'BeVietnamPro-bold',
        textAlign: 'center',
        marginTop: 20
    },

    desc: {
        fontSize: 17,
        fontFamily: 'BeVietnamPro',
        marginTop: 15,
        textAlign: 'center',
        color: Colors.GRAY
    },

    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 70
    }
  });