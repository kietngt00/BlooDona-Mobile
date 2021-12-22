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
  bodyText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: Color.primary,
    marginTop: 10
  },
  list: {
    marginVertical: 10,
    height: SCREEN_HEIGHT*0.5,
  },
  plusButton: {
    backgroundColor: Color.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20
  },
  rightButton: {
    backgroundColor: Color.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'flex-end',
    marginTop: 40
  },
  bottomText: {
    fontSize: 12,
    fontFamily: FONT.fontRegular,
    color: '#fff',
  },
  textContainer: {
    marginRight: 5,
    backgroundColor: Color.primary,
    borderRadius:15,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120
  }
})
