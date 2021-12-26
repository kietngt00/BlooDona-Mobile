import { StyleSheet } from "react-native";
import { Color } from "../../../globals/constants";
import { FONT, SCREEN_LAYOUT, SCREEN_WIDTH } from "../../../globals/styles";

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: {...SCREEN_LAYOUT.header, justifyContent: 'space-between'},
  body: SCREEN_LAYOUT.body,
  headerText: SCREEN_LAYOUT.headerText,
  bodyText: SCREEN_LAYOUT.bodyText,
  topBody: {
    flexDirection: 'row',
    marginTop: 10,
    width: SCREEN_WIDTH,
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  infoText: {
    fontSize: 16,
    fontFamily: FONT.fontBold,
    color: Color.primary,
    textAlign: 'center'
  }
})