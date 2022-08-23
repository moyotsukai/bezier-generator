import React from 'react'
import { bezierPoints } from '../../bezier/bezierPoints'
import Svg from '../Svg/Svg'
import SvgPath from '../Svg/SvgPath'
import { BezierPath } from '../../types/BezierPath.type'
import { Coordinate } from '../../types/Coordinate.type'
import { cos, sin } from '../../utils/Math'

const LENGTH_WEIGHT = 100
const MAX_ANGLE = 270
const STEPS = 8

const Omugai: React.FC = () => {
  const pathGroups: BezierPath[][] = Array(STEPS).fill(0).map((_, index) => {
    const scale = 1 + LENGTH_WEIGHT * index / 400
    const startPoint: Coordinate = {
      x: 1000 - cos(300 + MAX_ANGLE / (STEPS - 1) * index) * 100,
      y: 1000 - sin(300 + MAX_ANGLE / (STEPS - 1) * index) * 100
    }
    const offset: Coordinate = {
      x: cos(MAX_ANGLE / (STEPS - 1) * index) * 20,
      y: sin(MAX_ANGLE / (STEPS - 1) * index) * 20
    }

    return [
      bezierPoints({
        start: startPoint,
        controls: [{
          da: 270 - MAX_ANGLE / (STEPS - 1) * index,
          dl: 400 * scale,
          sca: -45,
          scl: 100 * scale,
          dca: -45,
          dcl: 160 * scale
        }]
      }),
      bezierPoints({
        start: { x: startPoint.x + offset.x, y: startPoint.y + offset.y },
        controls: [{
          da: 270 - MAX_ANGLE / (STEPS - 1) * index,
          dl: 400 * scale,
          sca: -45,
          scl: 100 * scale,
          dca: -45,
          dcl: 160 * scale
        }]
      })
    ].flat()
  })

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

export default Omugai