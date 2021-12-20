import { StyleSheet } from "react-native"
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"
import { Color } from "../../globals/constants"
import { FONT, SCREEN_WIDTH } from "../../globals/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title1Container: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Color.primary,
  },
  title1: {
    paddingHorizontal: 2,
    fontSize: 36,
    fontFamily: FONT.fontRegular,
    color: Color.primary,
  },
  title2: {
    fontSize: 36,
    fontFamily: FONT.fontRegular,
    color: "#B6AEAE",
  },
  signIn: {
    fontFamily: FONT.fontBold,
    fontSize: 36,
    color: Color.primary,
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: SCREEN_WIDTH * 0.8,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingTop: 20,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
  },
  forgetPassContainer: {
    paddingTop: 5,
    alignItems: "flex-end",
    width: SCREEN_WIDTH * 0.8,
  },
  forgetPassword: {
    fontSize: 16,
    fontFamily: FONT.fontBold,
    color: Color.secondary,
  },
  loginButton: {
    width: SCREEN_WIDTH * 0.8,
    backgroundColor: Color.primary,
    borderRadius: 20,
    marginTop: 35,
    paddingVertical: 3,
  },
  login: {
    fontSize: 25,
    fontFamily: FONT.fontRegular,
    color: "white",
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  signUpButton: {
    borderBottomWidth: 1,
    borderColor: Color.secondary,
  },
  signUp: {
    fontFamily: FONT.fontBold,
    color: Color.secondary,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: "#A8A6A7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: SCREEN_WIDTH * 0.9,
  },
  bottomText: {
    position: "absolute",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    top: -10,
    fontSize: 16,
    fontFamily: FONT.fontRegular,
  },
  logos: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    width: SCREEN_WIDTH * 0.5,
  },
})
