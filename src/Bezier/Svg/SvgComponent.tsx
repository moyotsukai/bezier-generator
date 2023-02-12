import React from "react"
import { useShowGuideValue } from "../../context/ShowGuideContext"
import { BezierSpline } from "../spline/BezierSpline"
import SvgCanvas from "./SvgCanvas"
import SvgCubicBezier from "./SvgCubicBezier"
import SvgCubicBezierInfo from "./SvgCubicBezierGuide"

type Props = {
  splines: BezierSpline[]
}

const SvgComponent: React.FC<Props> = ({ splines }) => {
  const showGuide = useShowGuideValue()

  return (
    <SvgCanvas>
      {splines.map((spline, index) => (
        <g key={index}>
          {spline.paths.map((path, index) => (
            <React.Fragment key={index}>
              <SvgCubicBezier path={path} />
              {showGuide &&
                <SvgCubicBezierInfo pathInfo={path} />
              }
            </React.Fragment>
          ))}
        </g>
      ))}
    </SvgCanvas>
  )
}

export default SvgComponent