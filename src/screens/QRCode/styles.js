import { StyleSheet } from "react-native"
import { Color } from "../../globals/constants"
import { FONT, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../globals/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT * 0.08,
    paddingBottom: 25,
  },
  body: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    height: SCREEN_HEIGHT * 0.86,
  },
  headerText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: "#fff",
  },
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
})
