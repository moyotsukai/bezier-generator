import { cos, sin } from "../../utils/Math"
import { BezierVec2 } from "./BezierVec2"

type Props = {
  angle: number
  distance: number
  point: BezierVec2
}

export const translatePoint = (props: Props): BezierVec2 => {
  const { angle, distance, point } = props

  return {
    x: point.x + cos(angle) * distance,
    y: point.y - sin(angle) * distance
  }
}