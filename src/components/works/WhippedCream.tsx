import React from 'react'
import { bezierControlPoints } from '../../bezier/bezierControlPoints'
import Svg from '../Svg/Svg'
import SvgCubicBezier from '../Svg/SvgCubicBezier'
import SvgCubicBezierInfo from '../Svg/SvgCubicBezierInfo'
import { BezierPathInfo } from '../../types/BezierPathInfo.type'
import { rotatePath } from '../../bezier/rotatePath'
import { Vec2 } from '../../types/Vec2'

const NUM = 8
const CENTER: Vec2 = { x: 1600, y: 1000 }
const SCALE = 0.6

const WhippedCream: React.FC = () => {
  const creamMountainPath: BezierPathInfo[] = bezierControlPoints({
    start: { x: CENTER.x + 5, y: CENTER.y - 25 },
    controls: [
      { eaa: 90, eal: 800 * SCALE, cma: -80, cml: -150 * SCALE, cdr: 0.3, cda: 80 }
    ]
  })
  const creamValleyPath: BezierPathInfo[] = bezierControlPoints({
    start: { x: CENTER.x - 5, y: CENTER.y - 25 },
    controls: [
      { eaa: 110, eal: 800 * SCALE, cma: -50, cml: -240 * SCALE, cdr: 0.2, cda: 30 }
    ]
  })

  const pathInfoGroups: BezierPathInfo[][] = Array(NUM).fill(0).map((_, index) => (
    [
      rotatePath({
        center: CENTER,
        angle: 360 / NUM * index,
        path: creamMountainPath
      }),
      rotatePath({
        center: CENTER,
        angle: 360 / NUM * index,
        path: creamValleyPath
      })
    ].flat()
  ))

  return (
    <Svg>
      {pathInfoGroups.map((pathsInfo, index) => (
        <g key={index}>
          {pathsInfo.map((pathInfo, index) => (
            <React.Fragment key={index}>
              <SvgCubicBezier path={pathInfo} />
              {/* <SvgCubicBezierInfo pathInfo={pathInfo} /> */}
            </React.Fragment>
          ))}
        </g>
      ))}
    </Svg>
  )
}

export default WhippedCream