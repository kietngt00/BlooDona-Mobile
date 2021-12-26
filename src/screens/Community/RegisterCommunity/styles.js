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
  clubName: {
    fontSize: 18,
    fontFamily: FONT.fontBold,
    marginTop: 20
  },
  formContainer: {
    width: SCREEN_WIDTH*0.7,
    alignItems: 'flex-start',
    marginTop: 20
  },
  formField: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
  },
  formInput: {
    borderWidth: 0.5,
    width: SCREEN_WIDTH*0.7,
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 20,
    height: 30
  },
  buttonContainer: {
    backgroundColor: Color.primary,
    borderRadius: 10,
    width: 80,
    height: 35
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
    color: '#fff'
  }
})