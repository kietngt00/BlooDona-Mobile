import React, { useContext } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppContext } from "../context/AppContext"
import { ScenceKey } from "../../globals/constants"
import AuthNavigator from "./AuthNavigator"
import BottomTabBar from "./BottomNavBar"

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  const {isLogin} = useContext(AppContext)

  const initialRoute = isLogin ? ScenceKey.AuthNavigator : ScenceKey.BottomNavBar

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name={ScenceKey.AuthNavigator} component={AuthNavigator}/>
      <Stack.Screen name={ScenceKey.BottomNavBar} component={BottomTabBar}/>
    </Stack.Navigator>
  );
}

export default MainNavigator