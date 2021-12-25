import { StyleSheet } from 'react-native'
import { Color } from '../../../globals/constants'
import { FONT, SCREEN_HEIGHT, SCREEN_LAYOUT, SCREEN_WIDTH } from '../../../globals/styles'

export const styles = StyleSheet.create({
  container: SCREEN_LAYOUT.container,
  header: {...SCREEN_LAYOUT.header, justifyContent: 'space-between'},
  body: SCREEN_LAYOUT.body,
  avatar: SCREEN_LAYOUT.avatar,
  headerText: SCREEN_LAYOUT.headerText,
  topBody: {
    flexDirection: 'row',
    marginTop: 10,
    width: SCREEN_WIDTH,
    justifyContent: 'center'
  },
  bodyText: {
    ...SCREEN_LAYOUT.bodyText
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  list: {
    marginVertical: 10,
  },
})