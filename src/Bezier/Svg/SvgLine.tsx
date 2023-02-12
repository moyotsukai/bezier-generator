import React from 'react'
import { BezierVec2 } from '../spline/BezierVec2'

type Props = {
  start: BezierVec2
  end: BezierVec2
  stroke?: string
  fill?: string
}

const SvgLine: React.FC<Props> = (props) => {
  return (
    <line
      x1={props.start.x}
      x2={props.end.x}
      y1={props.start.y}
      y2={props.end.y}
      stroke={props.stroke ?? "black"}
    />
  )
}

export default SvgLine