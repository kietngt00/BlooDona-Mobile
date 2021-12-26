import { Platform, StyleSheet } from 'react-native'
import { Color } from '../../globals/constants'
import { FONT, SCREEN_HEIGHT } from '../../globals/styles'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  clubAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
    marginRight: 5
  },
  clubName: {
    fontSize: 18,
     fontFamily: FONT.fontBold
  },
  body: {
    flex: 10,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5
  },
  chatInput: {
    borderRadius: 15,
    width: 240,
    minHeight: 30,
    borderWidth: 1,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
})
