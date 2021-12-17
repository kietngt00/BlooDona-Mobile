import React from 'react'
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello From Home Screen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;