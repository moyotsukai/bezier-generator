import React from 'react'
import { bezierPoints } from '../../bezier/bezierPoints'
import Svg from '../Svg/Svg'
import SvgPath from '../Svg/SvgPath'
import { BezierPath } from '../../types/BezierPath.type'
import { Coordinate } from '../../types/Coordinate.type'
import { rotatePoint } from '../../bezier/rotatePoint'

const Example: React.FC = () => {
  const pathGroups: BezierPath[][] = [
    bezierPoints({
      start: { x: 1000, y: 1000 },
      controls: [
        { da: -60, dl: 1000, sca: -45, scl: 100, dca: -45, dcl: 200 },
      ]
    }),
  ]

  return (
    <Svg>
      {pathGroups.map((paths, index) => (
        <g key={index}>
          {paths.map((path, index) => (
            <SvgPath path={path} key={index} />
          ))}
        </g>
      ))}
    </Svg>
  )
}

export default Example