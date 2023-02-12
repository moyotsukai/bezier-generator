import { cos, sin } from "../../utils/Math"
import { BezierVec2 } from "./BezierVec2"

type Props = {
  center: BezierVec2
  angle: number
  point: BezierVec2
}

export const rotatePoint = ({ center, angle, point }: Props): BezierVec2 => {
  const replacedAngle = -angle
  const x = center.x + (point.x - center.x) * cos(replacedAngle) - (point.y - center.y) * sin(replacedAngle)
  const y = center.y + (point.y - center.y) * cos(replacedAngle) + (point.x - center.x) * sin(replacedAngle)

  return { x: x, y: y }
}