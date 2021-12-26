import { Platform, StyleSheet } from 'react-native'
import { Color } from '../../globals/constants'
import {
  FONT,
  SCREEN_HEIGHT,
  SCREEN_LAYOUT,
  SCREEN_WIDTH,
} from '../../globals/styles'

export const styles = StyleSheet.create({
  container: {
    ...SCREEN_LAYOUT.container,
    paddingTop: Platform.OS === 'ios' ? 45 : 0,
  },
  header: { ...SCREEN_LAYOUT.header, justifyContent: 'space-between' },
  avatar: SCREEN_LAYOUT.avatar,
  headerText: SCREEN_LAYOUT.headerText,
  body: SCREEN_LAYOUT.body,
  donateCountBox: {
    width: 140,
    height: 140,
    borderRadius: 90,
    backgroundColor: Color.primary,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 25,
    fontFamily: FONT.fontBold,
    color: '#fff',
  },
  donationText: {
    fontSize: 15,
    fontFamily: FONT.fontRegular,
    color: '#fff',
  },
  button: {
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: 20,
    width: 150,
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: FONT.fontBold,
    color: Color.primary,
    marginRight: 10,
  },
})
