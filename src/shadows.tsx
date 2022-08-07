import React from 'react'
import Shadow, {ShadowProps} from './shadow'

export type ShadowsProps = {
  top: boolean;
  bottom: boolean;
  right: boolean;
  left: boolean;
} & Omit<ShadowProps, 'type'>

const Shadows = ({
                   top = true,
                   bottom = true,
                   right = true,
                   left = true,
                   ...props}: ShadowsProps) => (
  <>
    {top && <Shadow type="top" {...props} />}
    {bottom && <Shadow type="bottom" {...props} />}
    {left && <Shadow type="left" {...props} />}
    {right && <Shadow type="right" {...props} />}
  </>
);

export default Shadows
