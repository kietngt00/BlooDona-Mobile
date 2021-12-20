import { ColorPropType, StyleSheet } from "react-native"
import { Color } from "../../globals/constants"
import { FONT, SCREEN_WIDTH } from "../../globals/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: FONT.fontBold,
    color: Color.primary,
  },
  body: {
    alignItems: "flex-start",
    paddingTop: 30,
  },
  inputContainer: {
    width: SCREEN_WIDTH * 0.8,
    marginBottom: 30,
    borderBottomWidth: 1
  },
  textInput: {
    width: SCREEN_WIDTH * 0.7,
    fontSize: 16,
    fontFamily: FONT.fontRegular,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 20,
    fontFamily: FONT.fontBold,
    paddingBottom: 10,
  },
  button: {
    width: SCREEN_WIDTH * 0.8,
    height: 40,
    backgroundColor: Color.primary,
    marginTop: 40,
    borderRadius: 20,
  },
  signUp: {
    fontSize: 25,
    fontFamily: FONT.fontRegular,
    color: "#fff",
  },
  bottom: {
    marginTop: 20,
    flexDirection: "row",
  },
  loginButton: {
    borderBottomWidth: 1,
    borderColor: Color.secondary,
  },
  login: {
    fontSize: 15,
    fontFamily: FONT.fontBold,
    color: Color.secondary,
  },
})
