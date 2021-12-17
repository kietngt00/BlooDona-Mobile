import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScenceKey } from "../../globals/constants";
import LoginScreen from "../../screens/Login";
import SignUpScreen from "../../screens/SignUp";
import SignUpProfileScreen from "../../screens/SignUp/profile";
import VerifyCodeScreen from "../../screens/SignUp/VerifyCode";

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false}}
      initialRouteName={ScenceKey.LoginScreen}
    >
      <Stack.Screen name={ScenceKey.LoginScreen} component={LoginScreen}/>
      <Stack.Screen name={ScenceKey.SignUpScreen} component={SignUpScreen}/>
      <Stack.Screen name={ScenceKey.VerifyCodeScreen} component={VerifyCodeScreen}/>
      <Stack.Screen name={ScenceKey.SignUpProfileScreen} component={SignUpProfileScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator