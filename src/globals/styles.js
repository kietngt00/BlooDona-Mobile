import {Dimensions, Platform, StyleSheet} from 'react-native'
import { Color } from './constants'

export const {width, height} = Dimensions.get('window')

export const SCREEN_WIDTH = width < height ? width : height
export const SCREEN_HEIGHT = width < height ? height : width

export const CONTENT_PADDING = {
  paddingHorizontal: 40,
}

export const SCREEN_TITLE = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 40,
}

export const FONT = {
  fontLight: 'nunito-light',
  fontRegular: 'nunito-regular',
  fontBold: 'nunito-bold',
}

export const SCREEN_LAYOUT = {
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  header: {
    paddingTop : Platform.OS === 'ios' ? 0 : 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.1 : SCREEN_HEIGHT * 0.2,
  },
  body: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    flex: 1,
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
  },
}