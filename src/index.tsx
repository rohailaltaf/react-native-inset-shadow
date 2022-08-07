import React, {FunctionComponent, PropsWithChildren} from 'react'
import {ColorValue, StyleProp, View, ViewStyle} from 'react-native'
import styles from './styles'
import Shadows from './shadows'

export type InsetShadowProps = PropsWithChildren<{
  /**
   * add style to the wrapper
   * @defaultValue undefined
   */
  containerStyle?: StyleProp<ViewStyle>,
  /**
   * show the left shadow?
   * @defaultValue true
   */
  left?: boolean,
  /**
   * show the top shadow?
   * @defaultValue true
   */
  top?: boolean,
  /**
   * show the right shadow?
   * @defaultValue true
   */
  right?: boolean,
  /**
   * show the bottom shadow?
   * @defaultValue true
   */
  bottom?: boolean,
  /**
   * shadow color
   * @defaultValue 'black'
   */
  shadowColor?: ColorValue,
  /**
   * shadow radius
   * @defaultValue 3
   */
  shadowRadius?: number,
  /**
   * shadow offset - height for top, bottom, width for left, right
   * @defaultValue 1
   */
  shadowOffset?: number,
  /**
   * shadow opacity
   * @defaultValue 0.5
   */
  shadowOpacity?: number,
  /**
   * background color
   * @defaultValue white
   */
  backgroundColor?: ColorValue,
}>

const InsetShadow: FunctionComponent<InsetShadowProps> = ({
  children,
  containerStyle,
  left = true,
  top = true,
  right = true,
  bottom = true,
  ...shadowProps
}) => (
    <View style={[styles.container, containerStyle]}>
      {children}
      <Shadows top={top} left={left} right={right} bottom={bottom} {...shadowProps} />
    </View>
  )

InsetShadow.defaultProps = {
  shadowColor: 'black',
  shadowRadius: 3,
  shadowOffset: 5,
  shadowOpacity: 0.5,
  backgroundColor: 'white'
}

export default InsetShadow
