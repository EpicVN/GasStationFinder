import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useState, useEffect } from 'react';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"
import * as SecureStore from "expo-secure-store";
import * as Location from 'expo-location';

import LoginScreen from './components/Screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './components/Navigations/TabNavigation';
import { UserLocationContext } from './Context/UserLocationContext';

SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const [fontsLoaded] = useFonts({
    'BeVietnamPro': require('./assets/fonts/BeVietnamPro-Regular.ttf'),
    'BeVietnamPro-medium': require('./assets/fonts/BeVietnamPro-Medium.ttf'),
    'BeVietnamPro-bold': require('./assets/fonts/BeVietnamPro-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider 
      tokenCache={tokenCache}
      publishableKey={'pk_test_cHJvZm91bmQtbWFudGlzLTczLmNsZXJrLmFjY291bnRzLmRldiQ'
    }>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>
          
          <SignedOut>
            <LoginScreen />
          </SignedOut>

          <StatusBar style="auto" />
        </View>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  },
});
