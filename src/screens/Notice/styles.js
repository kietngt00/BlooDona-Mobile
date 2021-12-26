import { Platform, StyleSheet } from "react-native";
import { Color } from "../../globals/constants";
import { FONT, SCREEN_HEIGHT, SCREEN_LAYOUT } from "../../globals/styles";

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: {...SCREEN_LAYOUT.header, justifyContent: 'space-between'},
  body: SCREEN_LAYOUT.body,
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
  topBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  bodyText: {
    fontSize: 30,
    fontFamily: FONT.fontBold,
    color: Color.primary
  },
  backButton: {
    position: 'absolute',
    left: -110
  },
  list: {
    height: SCREEN_HEIGHT*0.7,
    marginVertical: 10
  }
})