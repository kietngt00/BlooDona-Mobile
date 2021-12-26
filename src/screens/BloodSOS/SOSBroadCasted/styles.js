import { StyleSheet } from "react-native";
import { Color } from "../../../globals/constants";
import { FONT, SCREEN_HEIGHT, SCREEN_LAYOUT, SCREEN_WIDTH } from "../../../globals/styles";

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: SCREEN_LAYOUT.header,
  body: SCREEN_LAYOUT.body,
  headerText: SCREEN_LAYOUT.headerText,
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
    position: 'absolute',
    left: 10
  }
})