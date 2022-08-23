import React from 'react'
import { BezierPath } from '../../types/BezierPath.type'

type Props = {
  path: BezierPath
  stroke?: string
  fill?: string
}

const SvgPath: React.FC<Props> = (props) => {
  const path = props.path
  const d = `M ${path.m.x} ${path.m.y} C ${path.c[0].x} ${path.c[0].y}, ${path.c[1].x} ${path.c[1].y}, ${path.c[2].x} ${path.c[2].y}`

  return (
    <path
      d={d}
      stroke={props.stroke ?? "black"}
      fill={props.fill ?? "transparent"}
    />
  )
}

export default SvgPath