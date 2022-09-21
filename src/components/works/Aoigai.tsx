import React from 'react'
import { bezierPoints } from '../../bezier/bezierPoints'
import Svg from '../Svg/Svg'
import SvgPath from '../Svg/SvgPath'
import { BezierPath } from '../../types/BezierPath.type'
import { Coordinate } from '../../types/Coordinate.type'
import { rotatePath } from '../../bezier/rotatePath'

const STEPS = 11
const EACH_ROTATE_ANGLE = -30
const OVERALL_SCALE = 0.9

const Aoigai: React.FC = () => {
  const pathGroups: BezierPath[][] = Array(STEPS).fill(0).map((_, index) => {
    const middlePoint: Coordinate = { x: 3508 / 2, y: 2480 / 2 }
    const SCALE = Math.pow(1.1, 1 + index) * OVERALL_SCALE
    const RAIL_DIFFERENCE = 14
    const ROTATE_ANGLE: number = EACH_ROTATE_ANGLE * index

    return [
      rotatePath({
        center: middlePoint,
        angle: ROTATE_ANGLE,
        path: bezierPoints({
          start: { x: middlePoint.x - RAIL_DIFFERENCE / 2, y: middlePoint.y - 50 },
          controls: [{
            da: 90,
            dl: 400 * SCALE,
            sca: 3,
            scl: 100 * SCALE,
            dca: 3,
            dcl: 100 * SCALE
          }, {
            da: 80,
            dl: 100 * SCALE,
            sca: -15,
            scl: 45 * SCALE,
            dca: -25,
            dcl: 20 * SCALE
          }, {
            da: 80,
            dl: 120 * SCALE,
            sca: 10,
            scl: 60 * SCALE,
            dca: 50,
            dcl: 20 * SCALE
          }]
        })
      }),
      rotatePath({
        center: middlePoint,
        angle: ROTATE_ANGLE,
        path: bezierPoints({
          start: { x: middlePoint.x + RAIL_DIFFERENCE / 2, y: middlePoint.y - 50 },
          controls: [{
            da: 90,
            dl: 400 * SCALE,
            sca: 3,
            scl: 100 * SCALE,
            dca: 3,
            dcl: 100 * SCALE
          }, {
            da: 80,
            dl: 100 * SCALE,
            sca: -25,
            scl: 60 * SCALE,
            dca: -40,
            dcl: 20 * SCALE
          }, {
            da: 75,
            dl: 120 * SCALE,
            sca: 10,
            scl: 60 * SCALE,
            dca: 50,
            dcl: 25 * SCALE
          }]
        })
      })

      // bezierPoints({
      //   start: rotatePoint({
      //     center: middlePoint,
      //     angle: ROTATE_ANGLE,
      //     point: { x: middlePoint.x - RAIL_DIFFERENCE / 2, y: middlePoint.y - 10 }
      //   }),
      //   controls: [{
      //     da: 90 + ROTATE_ANGLE,
      //     dl: 400 * SCALE,
      //     sca: 3,
      //     scl: 100 * SCALE,
      //     dca: 3,
      //     dcl: 100 * SCALE
      //   }, {
      //     da: 80 + ROTATE_ANGLE,
      //     dl: 100 * SCALE,
      //     sca: -15,
      //     scl: 45 * SCALE,
      //     dca: -25,
      //     dcl: 20 * SCALE
      //   }, {
      //     da: 80 + ROTATE_ANGLE,
      //     dl: 120 * SCALE,
      //     sca: 10,
      //     scl: 60 * SCALE,
      //     dca: 50,
      //     dcl: 20 * SCALE
      //   }]
      // }),
      // bezierPoints({
      //   start: rotatePoint({
      //     center: middlePoint,
      //     angle: ROTATE_ANGLE,
      //     point: { x: middlePoint.x + RAIL_DIFFERENCE / 2, y: middlePoint.y - 10 }
      //   }),
      //   controls: [{
      //     da: 90 + ROTATE_ANGLE,
      //     dl: 400 * SCALE,
      //     sca: 3,
      //     scl: 100 * SCALE,
      //     dca: 3,
      //     dcl: 100 * SCALE
      //   }, {
      //     da: 80 + ROTATE_ANGLE,
      //     dl: 100 * SCALE,
      //     sca: -25,
      //     scl: 60 * SCALE,
      //     dca: -40,
      //     dcl: 20 * SCALE
      //   }, {
      //     da: 75 + ROTATE_ANGLE,
      //     dl: 120 * SCALE,
      //     sca: 10,
      //     scl: 60 * SCALE,
      //     dca: 50,
      //     dcl: 25 * SCALE
      //   }]
      // }),
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

export default Aoigai