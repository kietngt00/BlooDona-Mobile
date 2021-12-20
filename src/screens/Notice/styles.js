import { Platform, StyleSheet } from "react-native";
import { Color } from "../../globals/constants";
import { FONT, SCREEN_HEIGHT } from "../../globals/styles";

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
  body: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    height: Platform.OS === "ios" ? SCREEN_HEIGHT * 0.8 : SCREEN_HEIGHT * 0.86,
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