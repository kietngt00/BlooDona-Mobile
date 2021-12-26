import { StyleSheet } from "react-native";
import { Color } from "../../globals/constants";
import { FONT, SCREEN_LAYOUT, SCREEN_WIDTH } from "../../globals/styles";

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: {...SCREEN_LAYOUT.header, justifyContent:'space-between'},
  body: {...SCREEN_LAYOUT.body, paddingHorizontal: 20},
  headerText: SCREEN_LAYOUT.headerText,
  bodyText: SCREEN_LAYOUT.bodyText,
  avatar: SCREEN_LAYOUT.avatar,
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
    fontSize: 14,
    fontFamily: FONT.fontRegular,
    textAlign: 'left',
    width: SCREEN_WIDTH-40
  },
  map: {
    width: SCREEN_WIDTH*0.9,
    height: 200
  },
  location: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    width: SCREEN_WIDTH*0.9
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  bottomText: {
    fontSize: 12,
    fontFamily: FONT.fontRegular,
    color: '#fff',
  },
  textContainer: {
    marginRight: 5,
    backgroundColor: Color.primary,
    borderRadius: 15,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  rightButton: {
    backgroundColor: Color.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})