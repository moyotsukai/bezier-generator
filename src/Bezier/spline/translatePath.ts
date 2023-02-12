import { BezierPoints } from './BezierPoints'
import { BezierVec2 } from './BezierVec2'
import { midpoint } from './midpoint'
import { translatePoint } from './translatePoint'

type Props = {
  angle: number
  distance: number
  path: BezierPoints[]
}

export const translatePath = (props: Props): BezierPoints[] => {
  const { angle, distance, path } = props

  const mirrored: BezierPoints[] = path.map((curve) => {
    const startAnchor: BezierVec2 = translatePoint({ angle: angle, distance: distance, point: curve.startAnchor })
    const startControl: BezierVec2 = translatePoint({ angle: angle, distance: distance, point: curve.startControl })
    const endControl: BezierVec2 = translatePoint({ angle: angle, distance: distance, point: curve.endControl })
    const endAnchor: BezierVec2 = translatePoint({ angle: angle, distance: distance, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return mirrored
}