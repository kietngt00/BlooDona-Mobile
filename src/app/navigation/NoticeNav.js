import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScenceKey } from '../../globals/constants'
import NoticeScreen from '../../screens/Notice'
import AcceptDonateScreen from '../../screens/AcceptDonate'

const Stack = createNativeStackNavigator()

const NoticeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScenceKey.NoticeScreen}
    >
      <Stack.Screen name={ScenceKey.NoticeScreen} component={NoticeScreen} />
      <Stack.Screen
        name={ScenceKey.AcceptDonateScreen}
        component={AcceptDonateScreen}
      />
    </Stack.Navigator>
  )
}

export default NoticeNav
