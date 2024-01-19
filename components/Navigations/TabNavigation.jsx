import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../Screen/Homescreen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import Colors from '../../assets/Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Map',
                    tabBarActiveTintColor: Colors.PRIMARY,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="map" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarLabel: 'Hồ sơ',
                    tabBarActiveTintColor: Colors.PRIMARY,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="user-circle" size={size} color={color} />
                    )
                }}
            />
    </Tab.Navigator>
  )
}