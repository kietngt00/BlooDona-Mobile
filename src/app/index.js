import { NavigationContainer } from '@react-navigation/native'
import React, {useContext, useState} from 'react'
import { AppContext } from './context/AppContext'
import MainNavigator from './navigation/MainNavigator'

const AppNavigator = () => {
  const {
    setIsLogin,
    setUser,
    isLogin,
    user
  } = useContext(AppContext)


  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}

export default AppNavigator