import { StyleSheet } from "react-native"
import { Color } from "../../globals/constants"
import { FONT, SCREEN_HEIGHT, SCREEN_LAYOUT, SCREEN_WIDTH } from "../../globals/styles"

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: SCREEN_LAYOUT.header,
  body: SCREEN_LAYOUT.body,
  headerText: SCREEN_LAYOUT.headerText,
  bodyText: {
    fontSize: 18,
    fontFamily: FONT.fontRegular,
    color: "#9C9A9A",
    marginTop: 40,
    textAlign: "center",
    height: 70,
    paddingHorizontal: 15,
  },
  camera: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: "gray",
  },
  switchSelector: {
    marginTop: 20,
    width: 150,
    height: 30,
  },
  scanAgainText: {
    fontSize: 18,
    fontFamily: FONT.fontBold,
    color: Color.secondary
  }
})
