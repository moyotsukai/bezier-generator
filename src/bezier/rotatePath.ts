import { BezierPath } from "../types/BezierPath.type"
import { Vec2 } from "../types/Vec2"
import { rotatePoint } from "./rotatePoint"

type Props = {
  center: Vec2
  angle: number
  path: BezierPath[]
}

export const rotatePath = (props: Props): BezierPath[] => {
  const rotated: BezierPath[] = props.path.map((curve) => {
    const startAnchor: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.startAnchor })
    const startControl: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.startControl })
    const endControl: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.endControl })
    const endAnchor: Vec2 = rotatePoint({ center: props.center, angle: props.angle, point: curve.endAnchor })
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor }
  })

  return rotated
}