import { StyleSheet } from "react-native";
import { Color } from "../../../globals/constants";
import { FONT, SCREEN_HEIGHT, SCREEN_LAYOUT, SCREEN_WIDTH } from "../../../globals/styles";

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: { 
    height: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.1 : SCREEN_HEIGHT * 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    width: SCREEN_WIDTH,
    height: 30,
    alignItems: "flex-start",
    marginLeft: 20
  }
})