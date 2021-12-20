import { StyleSheet } from "react-native";
import { Color } from "../../../globals/constants";
import { FONT, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../globals/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 30,
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
  bodyText: {
    fontSize: 20,
    fontFamily: FONT.fontBold,
    color: Color.primary,
    paddingBottom: 20,
    textAlign: "left",
    paddingHorizontal: 20
  },
  svg: {
    marginTop: 40
  },
  backButton: {
    width: SCREEN_WIDTH,
    height: 30,
    alignItems: "flex-start",
    marginLeft: 20
  }
})