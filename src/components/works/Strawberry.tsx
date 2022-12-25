import React from 'react'
import { bezierControlPoints } from '../../bezier/bezierControlPoints'
import Svg from '../Svg/Svg'
import SvgCubicBezier from '../Svg/SvgCubicBezier'
import SvgCubicBezierInfo from '../Svg/SvgCubicBezierInfo'
import { BezierPathInfo } from '../../types/BezierPathInfo.type'
import { Vec2 } from '../../types/Vec2'
import { getEndAnchor } from '../../bezier/getEndAnchor'
import { mirrorPath } from '../../bezier/mirrorPath'
import { translatePath } from '../../bezier/translatePath'
import { distance } from '../../bezier/distance'

const CENTER: Vec2 = { x: 1600, y: 1000 }
const SCALE = 0.7

const Strawberry: React.FC = () => {
  const TOP_OUTLINE_PATH_LENGTH = 200 * SCALE
  const topOutlinPath = bezierControlPoints({
    start: { x: CENTER.x - TOP_OUTLINE_PATH_LENGTH / 2, y: CENTER.y - 300 },
    controls: [
      { eaa: 0, eal: TOP_OUTLINE_PATH_LENGTH, cma: 0, cml: 50 * SCALE, cdr: 0.5, cda: 0 },
    ]
  })

  const sideOutlinePath = bezierControlPoints({
    start: getEndAnchor(topOutlinPath),
    controls: [
      { eaa: -60, eal: 1200 * SCALE, cma: 0, cml: 0, cdr: 1, cda: 0 }
    ]
  })

  const sideOutlinePathMirrored = mirrorPath({ center: CENTER, angle: 90, path: sideOutlinePath })

  const strawberryMountainPath = bezierControlPoints({
    start: { x: CENTER.x + 120 * SCALE, y: getEndAnchor(sideOutlinePath).y },
    controls: [
      { eaa: 100, eal: 200 * SCALE, cma: 0, cml: -15, cdr: 0.5, cda: 0 }
    ]
  })

  const strawberryValleyPath = bezierControlPoints({
    start: { x: CENTER.x + 75 * SCALE, y: getEndAnchor(sideOutlinePath).y },
    controls: [
      { eaa: 90, eal: 170 * SCALE, cma: 0, cml: -15, cdr: 0.5, cda: 0 }
    ]
  })

  const strawberryPath = [
    strawberryMountainPath,
    mirrorPath({ center: CENTER, angle: 90, path: strawberryMountainPath }),
    strawberryValleyPath,
    mirrorPath({ center: CENTER, angle: 90, path: strawberryValleyPath })
  ].flat()

  const bottomLine = bezierControlPoints({
    start: getEndAnchor(sideOutlinePath),
    controls: [
      { eaa: 180, eal: distance(getEndAnchor(sideOutlinePath), getEndAnchor(sideOutlinePathMirrored)), cma: 0, cml: 0, cdr: 1, cda: 0 }
    ]
  })

  const CENTER_2: Vec2 = { x: 2800, y: 1000 }
  const TOP_OUTLINE_PATH_LENGTH_2 = TOP_OUTLINE_PATH_LENGTH - 20

  const topCapPath = bezierControlPoints({
    start: { x: CENTER_2.x - TOP_OUTLINE_PATH_LENGTH_2 / 2, y: CENTER_2.y - 300 },
    controls: [
      { eaa: 0, eal: TOP_OUTLINE_PATH_LENGTH_2, cma: 0, cml: 50 * SCALE, cdr: 0.5, cda: 0 },
    ]
  })

  const capPath = bezierControlPoints({
    start: getEndAnchor(topCapPath),
    controls: [
      { eaa: -78, eal: 900 * SCALE, cma: 50, cml: 250 * SCALE, cdr: 0.3, cda: -40 }
    ]
  })
  const capPathMirrored = mirrorPath({ center: CENTER_2, angle: 90, path: capPath })

  const bottomLine_2 = bezierControlPoints({
    start: getEndAnchor(capPath),
    controls: [
      { eaa: 180, eal: distance(getEndAnchor(capPath), getEndAnchor(capPathMirrored)), cma: 0, cml: 0, cdr: 1, cda: 0 }
    ]
  })

  const pathInfoGroups: BezierPathInfo[][] = [
    topOutlinPath,
    sideOutlinePath,
    sideOutlinePathMirrored,
    strawberryPath,
    translatePath({ angle: 0, distance: 380 * SCALE, path: strawberryPath }),
    translatePath({ angle: 180, distance: 380 * SCALE, path: strawberryPath }),
    bottomLine,
    topCapPath,
    capPath,
    capPathMirrored,
    bottomLine_2
  ]

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

export default Strawberry