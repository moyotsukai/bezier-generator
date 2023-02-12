import React from 'react'
import { bezierControlPoints } from '../../Bezier/spline/bezierControlPoints'
import SvgCanvas from '../../Bezier/Svg/SvgCanvas'
import SvgCubicBezier from '../../Bezier/Svg/SvgCubicBezier'
import SvgCubicBezierInfo from '../../Bezier/Svg/SvgCubicBezierGuide'
import { BezierSpline } from '../../Bezier/spline/BezierSpline'

const Example: React.FC = () => {
  const CENTER = { x: 1200, y: 1200 }

  const spline = new BezierSpline(bezierControlPoints({
    start: CENTER,
    controls: [
      { eaa: 120, eal: 800, cma: 0, cml: 200, cdr: 0.4, cda: 20 },
      { eaa: 30, eal: 800, cma: 10, cml: 250, cdr: "smooth", cda: 10 },
    ]
  }))

  const splineGroups: BezierSpline[] = [
    spline.rotate({ center: CENTER, angle: -30 }),
    spline.rotate({ center: CENTER, angle: -60 }).rotate({ center: CENTER, angle: 180 })
  ]

  return (
    <SvgCanvas>
      {splineGroups.map((spline, index) => (
        <g key={index}>
          {spline.paths.map((path, index) => (
            <React.Fragment key={index}>
              <SvgCubicBezier path={path} />
              <SvgCubicBezierInfo pathInfo={path} />
            </React.Fragment>
          ))}
        </g>
      ))}
    </SvgCanvas>
  )
}

export default Example