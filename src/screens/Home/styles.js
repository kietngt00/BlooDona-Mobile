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
    justifyContent: "space-between",
    height: SCREEN_HEIGHT * 0.08,
  },
  avatar: {
    borderRadius: 35,
    backgroundColor: "gray",
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: "#fff",
    marginHorizontal: 10,
  },
  body: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    height: Platform.OS === "ios" ? SCREEN_HEIGHT * 0.8 : SCREEN_HEIGHT * 0.86,
  },
  donateCountBox: {
    width: 140,
    height: 140,
    borderRadius: 90,
    backgroundColor: Color.primary,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: "#fff",
  },
  donationText: {
    fontSize: 15,
    fontFamily: FONT.fontRegular,
    color: "#fff",
  },
  button: {
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: 20,
    width: 150,
    height: 40,
    marginTop: 10,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: FONT.fontBold,
    color: Color.primary,
    marginRight: 10,
  },
})