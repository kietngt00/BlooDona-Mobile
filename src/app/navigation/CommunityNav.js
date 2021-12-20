import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScenceKey } from "../../globals/constants"
import CommunityScreen from "../../screens/Community"

const Stack = createNativeStackNavigator()

const CommunityNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScenceKey.CommunityScreen}
    >
      <Stack.Screen
        name={ScenceKey.CommunityScreen}
        component={CommunityScreen}
      />
    </Stack.Navigator>
  )
}

export default CommunityNav
