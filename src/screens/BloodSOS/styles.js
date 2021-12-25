import { Platform, StyleSheet } from 'react-native'
import { Color } from '../../globals/constants'
import { FONT, SCREEN_HEIGHT, SCREEN_LAYOUT, SCREEN_WIDTH } from '../../globals/styles'

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: SCREEN_LAYOUT.header,
  body: SCREEN_LAYOUT.body,
  headerText: SCREEN_LAYOUT.headerText,
  infoContainer: {
    marginHorizontal: 20,
    flex: 1,
  },
  bodyText: {
    ...SCREEN_LAYOUT.bodyText,
    marginBottom: 10,
    marginTop: 30,
  },
  textInput: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: Color.primary,
    fontSize: 18,
    fontFamily: FONT.fontRegular,
    textAlign: 'center',
  },
  unitText: {
    fontSize: 18,
    fontFamily: FONT.fontBold,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: Color.primary,
    borderRadius: 50,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: '#fff',
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
    textAlign: 'justify',
    height: 150,
    textAlignVertical: 'top',
    borderWidth: 1,
  },
})
