import { midpoint } from './midpoint'
import { BezierPathInfo } from "../types/BezierPathInfo.type"
import { Vec2 } from "../types/Vec2"
import { translatePoint } from './translatePoint'

type Props = {
  angle: number
  distance: number
  path: BezierPathInfo[]
}

export const translatePath = (props: Props): BezierPathInfo[] => {
  const { angle, distance, path } = props

  const mirrored: BezierPathInfo[] = path.map((curve) => {
    const startAnchor: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.startAnchor })
    const startControl: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.startControl })
    const endControl: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.endControl })
    const endAnchor: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return mirrored
}