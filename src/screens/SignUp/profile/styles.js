import  {StyleSheet} from 'react-native'
import { Color } from '../../../globals/constants'
import { FONT, SCREEN_WIDTH } from '../../../globals/styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    marginTop: 50,
    color: Color.primary,
    fontSize: 30,
    fontFamily: FONT.fontBold
  },
  body: {
    flex: 1,
    paddingTop: 40
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: SCREEN_WIDTH*0.9,
    paddingTop: 5
  },
  subTitle: {
    fontSize: 18,
    fontFamily: FONT.fontBold,
    width: SCREEN_WIDTH*0.3
  },
  textInput: {
    fontSize: 18,
    fontFamily: FONT.fontRegular,
    paddingHorizontal: 4
  },
  uploadButton: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: Color.secondary,
    borderRadius: 15,
    paddingVertical: 30,
    flexDirection: 'row', 
    justifyContent: 'center',
    width: SCREEN_WIDTH*0.6
  },
  uploadText: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
    paddingLeft: 10
  },
  startButton: {
    marginTop: 100,
    backgroundColor: Color.primary,
    borderRadius: 20,
    height: 40
  },
  startText: {
    fontSize: 20,
    fontFamily: FONT.fontRegular,
    color: '#fff'
  }
})