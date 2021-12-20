import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SCREEN_WIDTH } from '../globals/styles'
import { Button } from './Button'

const BaseNotice = (props) => {
  return (
    <View style={styles.container}>

    </View>
  )
}

export default BaseNotice

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH*0.9,
    height: 100,
    elevation: 20,
    shadowOpacity: 20,
    marginBottom: 5,
    backgroundColor: 'gray'
  }
})