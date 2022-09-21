import { BezierPath } from "../types/BezierPath.type"
import { Coordinate } from "../types/Coordinate.type"
import { rotatePoint } from "./rotatePoint"

type Props = {
  center: Coordinate
  angle: number
  path: BezierPath[]
}

export const rotatePath = (props: Props): BezierPath[] => {
  const rotated: BezierPath[] = props.path.map((curve) => {
    const m: Coordinate = rotatePoint({ center: props.center, angle: props.angle, point: curve.m })
    const c = curve.c.map((controlPoint) => (
      rotatePoint({ center: props.center, angle: props.angle, point: controlPoint })
    )) as [Coordinate, Coordinate, Coordinate]
    return { m: m, c: c }
  })

  return rotated
}