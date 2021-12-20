import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Color, ScenceKey } from "../../globals/constants"
import HomeScreen from "../../screens/Home"
import { Text, View } from "react-native"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"
import QRCodeScreen from "../../screens/QRCode"
import BloodSOSScreen from "../../screens/BloodSOS"
import BloodSOSNav from "./BloodSOSNav"

const Tab = createBottomTabNavigator()

function CommunityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CommunityScreen!</Text>
    </View>
  )
}

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScenceKey.HomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case ScenceKey.HomeScreen:
              return <FontAwesome5 name='home' size={size} color={color} />
            case ScenceKey.QRCodeScreen:
              return <MaterialIcons name="filter-center-focus" size={size} color={color} />
            case ScenceKey.BloodSOSNav:
              return <FontAwesome5 name='broadcast-tower' size={size} color={color} />
            case ScenceKey.CommunityScreen:
              return <MaterialIcons name="message" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true
      })}
    >
      <Tab.Screen name={ScenceKey.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={ScenceKey.QRCodeScreen} component={QRCodeScreen} />
      <Tab.Screen name={ScenceKey.BloodSOSNav} component={BloodSOSNav} />
      <Tab.Screen name="CommunityScreen" component={CommunityScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabBar
