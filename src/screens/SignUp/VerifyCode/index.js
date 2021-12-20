import React, { useState } from "react"
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { FontAwesome5 } from "@expo/vector-icons"
import { Color, ScenceKey } from "../../../globals/constants"
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field"
import Button from "../../../components/Button"

const CELL_COUNT = 6

const VerifyCodeScreen = ({ navigation, route }) => {
  const [value, setValue] = useState("")
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <FontAwesome5
          name="check-circle"
          size={45}
          color={Color.primary}
          solid
        />
        <Text style={styles.text}>Enter the 6-digit code from your SMS</Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Button
          text="Resend the code"
          styles={{ container: styles.resendButton, text: styles.resendText }}
        />
        <Button
          text="Submit"
          styles={{ container: styles.submitButton, text: styles.submitText }}
          onPress={() => navigation.navigate(ScenceKey.SignUpProfileScreen)}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default VerifyCodeScreen
