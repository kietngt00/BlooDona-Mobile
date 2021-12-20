import React, { useContext } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthSVG from "../../../assets/svg/AuthSVG"
import { styles } from "./styles"
import { Keyboard } from "react-native"
import { FONT } from "../../globals/styles"
import FacebookLogoSVG from "../../../assets/svg/FacebookLogoSVG"
import GoogleLogoSVG from "../../../assets/svg/GoogleLogoSVG"
import AppleLogoSVG from "../../../assets/svg/AppleLogoSVG"
import BasePassword from "../../components/BasePassword"
import { ScenceKey } from "../../globals/constants"
import { AppContext } from "../../app/context/AppContext"
import Button from "../../components/Button"

const LoginScreen = ({ navigation }) => {
  const { setIsLogin } = useContext(AppContext)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <AuthSVG width={250} height={200} />
        <View style={styles.titleContainer}>
          <View style={styles.title1Container}>
            <Text style={styles.title1}>Bloo</Text>
          </View>
          <Text style={styles.title2}>Dona</Text>
        </View>
        <Text style={styles.signIn}>Sign In</Text>
        <View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.textInput} />
          </View>
          <BasePassword placeholder="Password" />
        </View>
        <Button
          text="Forgot Password?"
          styles={{
            container: styles.forgetPassContainer,
            text: styles.forgetPassword,
          }}
        />
        <Button
          text="Login"
          styles={{ container: styles.loginButton, text: styles.login }}
          onPress={() => {
            setIsLogin(false)
            navigation.navigate(ScenceKey.BottomNavBar)
          }}
        />
        <View style={styles.signUpContainer}>
          <Text fontFamily={FONT.fontRegular}>Don't have an account yet? </Text>
          <Button
            text="Sign Up"
            styles={{ container: styles.signUpButton, text: styles.signUp }}
            onPress={() => navigation.navigate(ScenceKey.SignUpScreen)}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Sign In With</Text>
          <View style={styles.logos}>
            <Button child={<FacebookLogoSVG height={40} width={40} />} />
            <Button child={<GoogleLogoSVG height={40} width={40} />} />
            <Button child={<AppleLogoSVG height={40} width={40} />}/>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen
