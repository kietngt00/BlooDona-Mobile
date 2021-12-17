import React, { useContext } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
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
        <TouchableOpacity style={styles.forgetPassContainer}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            setIsLogin(false)
            navigation.navigate(ScenceKey.HomeScreen)
          }}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text fontFamily={FONT.fontRegular}>Don't have an account yet? </Text>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate(ScenceKey.SignUpScreen)}
          >
            <Text style={styles.signUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Sign In With</Text>
          <View style={styles.logos}>
            <TouchableOpacity>
              <FacebookLogoSVG height={40} width={40} />
            </TouchableOpacity>
            <TouchableOpacity>
              <GoogleLogoSVG height={40} width={40} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AppleLogoSVG height={40} width={40} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen
