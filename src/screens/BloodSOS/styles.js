import { Platform, StyleSheet } from "react-native"
import { Color } from "../../globals/constants"
import { FONT, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../globals/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT * 0.08,
  },
  body: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    height: Platform.OS === "ios" ? SCREEN_HEIGHT * 0.8 : SCREEN_HEIGHT * 0.86,
  },
  headerText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: "#fff",
  },
  infoContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    height: SCREEN_HEIGHT*0.4
  },
  bodyText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    marginBottom: 10,
    marginTop: 30,
    color: Color.primary
  },
  textInput: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: Color.primary,
    fontSize: 18,
    fontFamily: FONT.fontRegular,
    textAlign: 'center'
  },
  unitText: {
    fontSize: 18,
    fontFamily: FONT.fontBold
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: Color.primary,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: '#fff',
  }
})
