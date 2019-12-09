import React from 'react'
import Shadow from './shadow'

const shadowTypes = ['left', 'top', 'right', 'bottom']

const Shadows = (props) => {
  return shadowTypes.map((shadow, i) => {
    if(!props[shadow]) {
      return null
    }
    const { shadowColor, shadowOpacity, shadowOffset, shadowRadius, elevation } = props
    const shadowProps = {
      shadowColor,
      shadowOpacity,
      shadowOffset,
      shadowRadius,
      elevation
    }
    return (
      <Shadow key={`shadow-${i}`} type={shadow} {...shadowProps}  />
    )
  })
}

// default to show all edges
Shadows.defaultProps = {
  left: true,
  top: true,
  right: true,
  bottom: true
}

export default Shadows