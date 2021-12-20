import React, { useContext } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SCREEN_WIDTH } from "../../../globals/styles"
import { styles } from "./styles"
import { FontAwesome5 } from "@expo/vector-icons"
import { Color, ScenceKey } from "../../../globals/constants"
import { AppContext } from "../../../app/context/AppContext"
import Button from "../../../components/Button"

const SignUpProfileScreen = ({ navigation }) => {
  const { setIsLogin } = useContext(AppContext)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Complete your profile</Text>
        <View style={styles.body}>
          <View style={styles.nameContainer}>
            <Text style={styles.subTitle}>First name</Text>
            <Text style={styles.subTitle}>Last name</Text>
          </View>
          <View style={styles.nameContainer}>
            <View borderWidth={0.5} width={SCREEN_WIDTH * 0.25}>
              <TextInput style={styles.textInput} />
            </View>
            <View borderWidth={0.5} marginLeft={20} width={SCREEN_WIDTH * 0.6}>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View paddingTop={30}>
            <Text style={styles.subTitle}>National ID</Text>
            <View borderWidth={0.5} marginTop={5}>
              <TextInput style={styles.textInput} keyboardType="phone-pad" />
            </View>
          </View>
          <TouchableOpacity style={styles.uploadButton}>
            <FontAwesome5 name="plus" size={20} color={Color.secondary} />
            <Text style={styles.uploadText}>Upload your test paper</Text>
          </TouchableOpacity>
          <Button
            text="Start Now"
            styles={{ container: styles.startButton, text: styles.startText }}
            onPress={() => {
              setIsLogin(false)
              navigation.navigate(ScenceKey.BottomNavBar)
            }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpProfileScreen
