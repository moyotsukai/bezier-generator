import React from 'react'
import { BezierPoints } from '../spline/BezierPoints'

type Props = {
  path: BezierPoints
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