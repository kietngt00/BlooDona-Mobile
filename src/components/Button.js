import React from "react"
import { Text, TouchableOpacity } from "react-native"

const Button = (props) => {
  const { styles, text, onPress, child } = props
  return (
    <TouchableOpacity
      style={{
        ...styles?.container,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      {text ? <Text style={styles?.text}>{text}</Text> : null}
      {child}
    </TouchableOpacity>
  )
}

export default Button
