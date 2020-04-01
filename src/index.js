import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import Shadows from './shadows'

const InsetShadow = ({ 
  children,
  containerStyle,
  left,
  top,
  right,
  bottom,
  shadowColor,
  shadowRadius,
  shadowOffset,
  shadowOpacity,
  elevation
}) => {
  const shadowProps = {
    left,
    top,
    right,
    bottom,
    shadowColor,
    shadowRadius,
    shadowOffset,
    shadowOpacity,
    elevation
  }
  return (
    <View style={[styles.container, containerStyle]}>
      {children}
      <Shadows {...shadowProps} />
    </View>
  )
}

InsetShadow.propTypes = {
  children: PropTypes.node.isRequired,
  /* (default: {}) add style to the wrapper */
  containerStyle: PropTypes.object,
  /* (default: true) show the left shadow? */
  left: PropTypes.bool,
  /* (default: true) show the top shadow? */
  top: PropTypes.bool,
  /* (default: true) show the right shadow? */
  right: PropTypes.bool,
  /* (default: true) show the bottom shadow? */
  bottom: PropTypes.bool,
  /* (default: black) shadow color */
  shadowColor: PropTypes.string,
  /* (default: 3) shadow radius */
  shadowRadius: PropTypes.number,
  /* (default: 1) shadow offset - height for top, bottom, width for left, right */ 
  shadowOffset: PropTypes.number,
  /* (default 0.5) shadow opacity */
  shadowOpacity: PropTypes.number,
  /* (default: 5) shadow elevation for android */
  elevation: PropTypes.number,
}

InsetShadow.defaultProps = {
  containerStyle: {},
  left: true,
  top: true,
  right: true,
  bottom: true,
  shadowColor: 'black',
  shadowRadius: 3,
  shadowOffset: 5,
  shadowOpacity: 0.5,
  elevation: 5,
}

export default InsetShadow
