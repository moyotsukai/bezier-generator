import React from 'react'
import { bezierPoints } from '../../bezier/bezierPoints'
import Svg from '../Svg/Svg'
import SvgPath from '../Svg/SvgPath'
import { BezierPath } from '../../types/BezierPath.type'

const Example: React.FC = () => {
  const pathGroups: BezierPath[][] = [
    bezierPoints({
      start: { x: 1000, y: 1000 },
      controls: [
        { da: 120, dl: 400, sca: -45, scl: 100, dca: -45, dcl: 200 },
        { da: 180, dl: 400, sca: "smooth", scl: 100, dca: -45, dcl: 100 },
        { da: -90, dl: 400, sca: "smooth", scl: 100, dca: -45, dcl: 100 }
      ]
    }),
    bezierPoints({
      start: { x: 1500, y: 1000 },
      controls: [{ da: 60, dl: 800, sca: -45, scl: 500, dca: -45, dcl: 500 }]
    })
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