import React, { useContext } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppContext } from "../context/AppContext"
import HomeScreen from "../../screens/Home"
import { ScenceKey } from "../../globals/constants"
import AuthNavigator from "./AuthNavigator"

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  const {isLogin} = useContext(AppContext)

  const initialRoute = isLogin ? ScenceKey.AuthNavigator : ScenceKey.HomeScreen

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name={ScenceKey.AuthNavigator} component={AuthNavigator}/>
      <Stack.Screen name={ScenceKey.HomeScreen} component={HomeScreen}/>
    </Stack.Navigator>
  );
}

export default MainNavigator