import React from 'react'
import { BezierPathInfo } from '../../types/BezierPathInfo.type'

type Props = {
  path: BezierPathInfo
  stroke?: string
  fill?: string
}

const SvgCubicBezier: React.FC<Props> = (props) => {
  const path = props.path
  const d = `M ${path.startAnchor.x} ${path.startAnchor.y} C ${path.startControl.x} ${path.startControl.y}, ${path.endControl.x} ${path.endControl.y}, ${path.endAnchor.x} ${path.endAnchor.y}`

  return (
    <path
      d={d}
      stroke={props.stroke ?? "black"}
      fill={props.fill ?? "transparent"}
    />
  )
}

export default SvgCubicBezier