import React from 'react'
import {ColorValue, View, ViewStyle} from 'react-native'
import styles from './styles'
import DropShadow from "react-native-drop-shadow";


export type DropShadowStyle = Pick<ViewStyle, 'shadowOffset' | 'shadowOpacity' | 'shadowColor' | 'shadowRadius'>

export type ShadowProps = {
  type: 'top' | 'bottom' | 'left' | 'right';
  backgroundColor?: ColorValue;
  shadowOffset?: number;
} & Omit<DropShadowStyle, 'shadowOffset'>

const getShadowOffset = (type: ShadowProps["type"], offset: number = 0): ViewStyle['shadowOffset'] => {
  switch(type) {
    case 'top':
    case 'bottom':
      return {
        width: 0,
        height: offset
      }
    case 'left':
    case 'right':
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

const Shadow = ({type, backgroundColor = 'white', shadowOffset, ...shadowStyle}: ShadowProps) => (
  <DropShadow style={[styles.shadow, styles[type], shadowStyle, {shadowOffset: getShadowOffset(type, shadowOffset)}]}>
    <View style={{height: '100%', width: '100%', backgroundColor}} />
  </DropShadow>
);

export default Shadow
