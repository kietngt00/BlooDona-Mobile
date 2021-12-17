import { StyleSheet } from "react-native"
import { Color } from "../../../globals/constants"
import { FONT, height, SCREEN_WIDTH } from "../../../globals/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontFamily: FONT.fontBold,
    color: "#A8A6A7",
    marginTop: 20,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    marginHorizontal: 5,
  },
  focusCell: {
    borderColor: "#000",
  },
  resendButton: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: Color.primary,
  },
  resendText: {
    fontSize: 15,
    fontFamily: FONT.fontRegular,
    color: Color.primary,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: Color.primary,
    borderRadius: 20,
    width: SCREEN_WIDTH * 0.5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: 20,
    fontFamily: FONT.fontRegular,
    color: "#fff",
  },
})
