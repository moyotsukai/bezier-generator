import { bezierControlPoints, BezierControlPointsProps } from "./spline/bezierControlPoints"
import { BezierPoints } from "./spline/BezierPoints"
import { BezierSpline } from "./spline/BezierSpline"
import { BezierVec2 } from "./spline/BezierVec2"
import SvgComponent from "./Svg/SvgComponent"
import SvgRoot from "./Svg/SvgRoot"

namespace Bezier {

  export type Vec2 = BezierVec2

  export type Points = BezierPoints

  export type Spline = BezierSpline

  export function spline(props: BezierControlPointsProps) {
    return new BezierSpline(bezierControlPoints(props))
  }

  export const Root = SvgRoot

  export const Svg = SvgComponent

}

export default Bezier