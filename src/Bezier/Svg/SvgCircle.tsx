import React from 'react'
import { BezierVec2 } from '../spline/BezierVec2'

type Props = {
  center: BezierVec2
  radius: number
  stroke?: string
  fill?: string
}

const SvgCircle: React.FC<Props> = (props) => {
  return (
    <circle
      cx={props.center.x}
      cy={props.center.y}
      r={props.radius}
      stroke={props.fill ?? "black"}
      fill={props.fill ?? "transparent"}
    />
  )
}

export default SvgCircle