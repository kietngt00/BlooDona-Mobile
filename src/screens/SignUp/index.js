import React from "react"
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthSVG from "../../../assets/svg/AuthSVG"
import BasePassword from "../../components/BasePassword"
import Button from "../../components/Button"
import { ScenceKey } from "../../globals/constants"
import { FONT, SCREEN_WIDTH } from "../../globals/styles"
import { styles } from "./styles"

const SignUpScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <AuthSVG width={250} height={200} />
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <Text style={styles.subTitle}>Phone number</Text>
            <View style={styles.phoneContainer}>
              <Text fontSize={18} fontFamily={FONT.fontRegular}>
                +84{" "}
              </Text>
              <TextInput
                placeholder="xxxxxxxxx"
                keyboardType="numeric"
                style={styles.textInput}
              />
            </View>
          </View>
          <View marginBottom={30}>
            <Text style={styles.subTitle}>Password</Text>
            <BasePassword placeholder="Please enter your password" />
          </View>
          <View>
            <Text style={styles.subTitle}>Confirm Password</Text>
            <BasePassword placeholder="Please enter your password" />
          </View>
        </View>
        <Button
          text="Sign Up"
          styles={{ container: styles.button, text: styles.signUp }}
          onPress={() => navigation.navigate(ScenceKey.VerifyCodeScreen)}
        />
        <View style={styles.bottom}>
          <Text fontSize={15} fontFamily="nunito-regular">
            Already have an account?{" "}
          </Text>
          <Button
            text="Login"
            styles={{ container: styles.loginButton, text: styles.login }}
            onPress={navigation.goBack}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpScreen
