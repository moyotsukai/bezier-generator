import { Coordinate } from "../types/Coordinate.type"
import { cos, sin } from "../utils/Math"

type Props = {
  center: Coordinate
  angle: number
  point: Coordinate
}

export const rotatePoint = ({ center, angle, point }: Props): Coordinate => {
  const replacedAngle = -angle
  const x = center.x + (point.x - center.x) * cos(replacedAngle) - (point.y - center.y) * sin(replacedAngle)
  const y = center.y + (point.y - center.y) * cos(replacedAngle) + (point.x - center.x) * sin(replacedAngle)

  return { x: x, y: y }
}