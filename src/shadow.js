import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const getShadowOffset = (type, offset) => {
  switch(type) {
    case ['top', 'bottom'].includes(type):
      return {
        width: 0,
        height: offset
      }
    case ['left', 'right'].includes(type):
      return {
        width: offset,
        height: 0
      }
    default:
      return {
        width: 0,
        height: 0
      }
  }
}

const Shadow = ({
  type,
  shadowColor,
  shadowOpacity,
  shadowOffset,
  shadowRadius,
  elevation
}) => {
  const shadowStyle = {
    shadowColor: shadowColor,
    shadowOffset: getShadowOffset(type, shadowOffset),
    shadowRadius: shadowRadius,
    shadowOpacity: shadowOpacity,
    elevation: elevation
  }
  return (
    <View style={[styles.shadow, styles[type], shadowStyle]} />
  )
}

export default Shadow