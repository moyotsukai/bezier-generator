import React from 'react'
import { bezierControlPoints } from '../../bezier/bezierControlPoints'
import Svg from '../Svg/Svg'
import SvgCubicBezier from '../Svg/SvgCubicBezier'
import SvgCubicBezierInfo from '../Svg/SvgCubicBezierInfo'
import { BezierPathInfo } from '../../types/BezierPathInfo.type'

const Example: React.FC = () => {
  const pathInfoGroups: BezierPathInfo[][] = [
    bezierControlPoints({
      start: { x: 1000, y: 2200 },
      controls: [
        // { eaa: 40, eal: 1600, cma: 30, cml: 1000, cdr: 0.4, cda: 15 },

        { eaa: 120, eal: 800, cma: 0, cml: 200, cdr: 0.4, cda: 20 },
        { eaa: 30, eal: 800, cma: 10, cml: 250, cdr: "smooth", cda: 10 },
        { eaa: 30, eal: 800, cma: 10, cml: -350, cdr: "smooth", cda: 10 },
        { eaa: 20, eal: 800, cma: 25, cml: 300, cdr: "smooth", cda: -10 },

        // { eaa: 40, eal: 400, cma: 20, cml: 200, cdr: 0.4, cda: 20 },
        // { eaa: 30, eal: 400, cma: -20, cml: -100, cdr: "smooth", cda: -10 },
        // { eaa: 0, eal: 400, cma: -40, cml: 200, cdr: "smooth", cda: -20 },
      ]
    })
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