import { BezierPoints } from './BezierPoints'
import { BezierVec2 } from './BezierVec2'
import { midpoint } from './midpoint'
import { rotatePoint } from "./rotatePoint"

type Props = {
  center: BezierVec2
  angle: number
  path: BezierPoints[]
}

export const rotatePath = ({ center, angle, path }: Props): BezierPoints[] => {
  const rotated: BezierPoints[] = path.map((curve) => {
    const startAnchor: BezierVec2 = rotatePoint({ center: center, angle: angle, point: curve.startAnchor })
    const startControl: BezierVec2 = rotatePoint({ center: center, angle: angle, point: curve.startControl })
    const endControl: BezierVec2 = rotatePoint({ center: center, angle: angle, point: curve.endControl })
    const endAnchor: BezierVec2 = rotatePoint({ center: center, angle: angle, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return rotated
}