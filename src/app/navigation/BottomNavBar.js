import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Color, ScenceKey } from "../../globals/constants"
import { Text, View } from "react-native"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"
import QRCodeScreen from "../../screens/QRCode"
import BloodSOSNav from "./BloodSOSNav"
import HomeNav from "./HomeNav"
import CommunityNav from "./CommunityNav"

const Tab = createBottomTabNavigator()

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScenceKey.HomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case ScenceKey.HomeNav:
              return <FontAwesome5 name='home' size={size} color={color} />
            case ScenceKey.QRCodeScreen:
              return <MaterialIcons name="filter-center-focus" size={size} color={color} />
            case ScenceKey.BloodSOSNav:
              return <FontAwesome5 name='broadcast-tower' size={size} color={color} />
            case ScenceKey.CommunityNav:
              return <MaterialIcons name="message" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={ScenceKey.HomeNav} component={HomeNav} />
      <Tab.Screen name={ScenceKey.QRCodeScreen} component={QRCodeScreen} />
      <Tab.Screen name={ScenceKey.BloodSOSNav} component={BloodSOSNav} />
      <Tab.Screen name={ScenceKey.CommunityNav} component={CommunityNav} />
    </Tab.Navigator>
  )
}

export default BottomTabBar
