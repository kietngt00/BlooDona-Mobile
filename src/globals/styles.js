import {Dimensions, StyleSheet} from 'react-native'

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