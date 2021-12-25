import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScenceKey } from '../../globals/constants'
import CommunityScreen from '../../screens/Community'
import NoticeScreen from '../../screens/Notice'
import JoinCommunityScreen from '../../screens/Community/JoinCommunity'

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
      <Stack.Screen name={ScenceKey.NoticeScreen} component={NoticeScreen} />
      <Stack.Screen
        name={ScenceKey.JoinCommunityScreen}
        component={JoinCommunityScreen}
      />
    </Stack.Navigator>
  )
}

export default CommunityNav
