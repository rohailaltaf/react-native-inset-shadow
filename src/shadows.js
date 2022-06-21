import React from 'react'
import Shadow from './shadow'

const Shadows = ({
                   top = true,
                   bottom = true,
                   right = true,
                   left = true,
                   ...props}) => (
  <>
    {top && <Shadow type="top" {...props} />}
    {bottom && <Shadow type="bottom" {...props} />}
    {left && <Shadow type="left" {...props} />}
    {right && <Shadow type="right" {...props} />}
  </>
);

// default to show all edges
Shadows.defaultProps = {
  left: true,
  top: true,
  right: true,
  bottom: true
}

export default Shadows
