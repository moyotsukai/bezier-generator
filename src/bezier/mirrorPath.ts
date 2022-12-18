import { midpoint } from './midpoint'
import { BezierPathInfo } from "../types/BezierPathInfo.type"
import { Vec2 } from "../types/Vec2"
import { mirrorPoint } from './mirrorPoint'

type Props = {
  center: Vec2
  angle: number
  path: BezierPathInfo[]
}

export const mirrorPath = (props: Props): BezierPathInfo[] => {
  const { center, angle, path } = props

  const mirrored: BezierPathInfo[] = path.map((curve) => {
    const startAnchor: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.startAnchor })
    const startControl: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.startControl })
    const endControl: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.endControl })
    const endAnchor: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return mirrored
}