import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScenceKey } from "../../globals/constants"
import BloodSOSScreen from "../../screens/BloodSOS"
import SOSBroadCastedScreen from "../../screens/BloodSOS/SOSBroadCasted"

const Stack = createNativeStackNavigator()

const BloodSOSNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScenceKey.BloodSOSScreen}
    >
      <Stack.Screen
        name={ScenceKey.BloodSOSScreen}
        component={BloodSOSScreen}
      />
      <Stack.Screen
        name={ScenceKey.SOSBroadCastedScreen}
        component={SOSBroadCastedScreen}
      />
    </Stack.Navigator>
  )
}

export default BloodSOSNav