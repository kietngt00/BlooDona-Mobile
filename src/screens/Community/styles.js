import { Platform, StyleSheet } from 'react-native'
import { Color } from '../../globals/constants'
import {
  FONT,
  SCREEN_HEIGHT,
  SCREEN_LAYOUT,
  SCREEN_WIDTH,
} from '../../globals/styles'

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: { ...SCREEN_LAYOUT.header, justifyContent: 'space-between' },
  body: SCREEN_LAYOUT.body,
  avatar: SCREEN_LAYOUT.avatar,
  headerText: SCREEN_LAYOUT.headerText,
  bodyText: {
    ...SCREEN_LAYOUT.bodyText,
    marginTop: 10,
  },
  list: {
    marginVertical: 10,
    height: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.45 : SCREEN_HEIGHT * 0.5,
  },
  plusButton: {
    backgroundColor: Color.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  rightButton: {
    backgroundColor: Color.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'flex-end',
    marginTop: 30,
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
})
