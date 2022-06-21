import React from 'react'
import {View} from 'react-native'
import styles from './styles'
import DropShadow from "react-native-drop-shadow";

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

const Shadow = ({type, backgroundColor = 'white', shadowOffset, ...shadowProps}) => (
  <DropShadow style={[styles.shadow, styles[type], shadowProps, {shadowOffset: getShadowOffset(type, shadowOffset)}]}>
    <View style={{height: '100%', width: '100%', backgroundColor}} />
  </DropShadow>
);

export default Shadow
