import { Vec2 } from "../types/Vec2"
import { cos, sin } from "../utils/Math"

type Props = {
  center: Vec2
  angle: number
  point: Vec2
}

export const rotatePoint = ({ center, angle, point }: Props): Vec2 => {
  const replacedAngle = -angle
  const x = center.x + (point.x - center.x) * cos(replacedAngle) - (point.y - center.y) * sin(replacedAngle)
  const y = center.y + (point.y - center.y) * cos(replacedAngle) + (point.x - center.x) * sin(replacedAngle)

  return { x: x, y: y }
}