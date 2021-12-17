import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'
import { FONT, SCREEN_WIDTH } from "../globals/styles"

const BasePassword = (props) => {
  const [hidePass, setHidePass] = useState(true)

  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        secureTextEntry={hidePass}
      />
      <FontAwesome5
        name={hidePass ? "eye-slash" : "eye"}
        size={15}
        color="black"
        onPress={() => setHidePass(!hidePass)}
      />
    </View>
  )
}

export default BasePassword

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: SCREEN_WIDTH*0.8,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  textInput: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
    width: SCREEN_WIDTH*0.7
  }
})
