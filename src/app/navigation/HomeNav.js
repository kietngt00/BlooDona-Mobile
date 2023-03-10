import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScenceKey } from "../../globals/constants"
import HomeScreen from "../../screens/Home"
import NoticeScreen from "../../screens/Notice"
import NoticeNav from "./NoticeNav"

const Stack = createNativeStackNavigator()

const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScenceKey.HomeScreen}
    >
      <Stack.Screen name={ScenceKey.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={ScenceKey.NoticeNav} component={NoticeNav} />
    </Stack.Navigator>
  )
}

export default HomeNav
