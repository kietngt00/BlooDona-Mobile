import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScenceKey } from '../../globals/constants'
import CommunityScreen from '../../screens/Community'
import NoticeScreen from '../../screens/Notice'
import JoinCommunityScreen from '../../screens/Community/JoinCommunity'
import RegisterCommunityScreen from '../../screens/Community/RegisterCommunity'
import ClubRegisteredScreen from '../../screens/Community/ClubRegistered'
import NoticeNav from './NoticeNav'
import ChatScreen from '../../screens/Chat'

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
      <Stack.Screen name={ScenceKey.NoticeNav} component={NoticeNav} />
      <Stack.Screen
        name={ScenceKey.JoinCommunityScreen}
        component={JoinCommunityScreen}
      />
      <Stack.Screen
        name={ScenceKey.RegisterCommunityScreen}
        component={RegisterCommunityScreen}
      />
      <Stack.Screen
        name={ScenceKey.ClubRegisteredScreen}
        component={ClubRegisteredScreen}
      />
      <Stack.Screen name={ScenceKey.ChatScreen} component={ChatScreen} />
    </Stack.Navigator>
  )
}

export default CommunityNav
