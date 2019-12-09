import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: '100%'
  },
  shadow: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  left: {
    width: 10,
    height: '100%',
    left: -10
  },
  top: {
    height: 10,
    width: '100%',
    top: -10
  },
  right: {
    width: 10,
    height: '100%',
    right: -10
  },
  bottom: {
    height: 10,
    width: '100%',
    bottom: -10
  }
})