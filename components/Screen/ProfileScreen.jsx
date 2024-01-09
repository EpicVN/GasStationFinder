import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { LoginScreen } from "./LoginScreen.jsx";
import Colors from "../../assets/Utils/Colors";

const SignOut = () => {
  const { isLoaded, getToken, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {signOut();}}
        style={styles.button}
      >
        <Text 
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'BeVietnamPro',
            fontSize: 17
          }}
        >
          Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
};
 
export default function App() {
  return (
      <View styles={styles.container}>
          <View style={{padding: 20, marginTop: 220}}>
            <Text style={styles.heading}>You are Signed in</Text>
            <SignOut />
          </View>
      </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

  heading: {
    fontSize: 25,
    fontFamily: 'BeVietnamPro-bold',
    textAlign: 'center',
    marginTop: 20
},

  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: 'flex',
    borderRadius: 99,
    marginTop: 70
  }
});