import React from 'react'
import { bezierControlPoints } from '../../bezier/bezierControlPoints'
import Svg from '../Svg/Svg'
import SvgCubicBezier from '../Svg/SvgCubicBezier'
import SvgCubicBezierInfo from '../Svg/SvgCubicBezierInfo'
import { BezierPathInfo } from '../../types/BezierPathInfo.type'

const Example: React.FC = () => {
  const CENTER = { x: 1200, y: 2200 }
  const path = bezierControlPoints({
    start: CENTER,
    controls: [
      { eaa: 120, eal: 800, cma: 0, cml: 200, cdr: 0.4, cda: 20 },
      { eaa: 30, eal: 800, cma: 10, cml: 250, cdr: "smooth", cda: 10 },
      { eaa: 30, eal: 800, cma: 10, cml: -350, cdr: "smooth", cda: 10 },
      { eaa: 20, eal: 800, cma: 25, cml: 300, cdr: "smooth", cda: -10 },
    ]
  })

  const pathInfoGroups: BezierPathInfo[][] = [
    path
  ]

  return (
    <Svg>
      {pathInfoGroups.map((pathsInfo, index) => (
        <g key={index}>
          {pathsInfo.map((pathInfo, index) => (
            <React.Fragment key={index}>
              <SvgCubicBezier path={pathInfo} />
              <SvgCubicBezierInfo pathInfo={pathInfo} />
            </React.Fragment>
          ))}
        </g>
      ))}
    </Svg>
  )
}

export default Example