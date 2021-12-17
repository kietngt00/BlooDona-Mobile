import React from 'react';
import { useFonts } from 'expo-font';
import AppContextProvider from './src/app/context/AppContext';
import AppNavigator from './src/app';

export default function App() {
  const [loaded] = useFonts({
    'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  return (
    loaded && (
      <AppContextProvider>
        <AppNavigator/>
      </AppContextProvider>
    )
  );
}


