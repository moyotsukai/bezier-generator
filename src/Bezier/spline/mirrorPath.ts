import { BezierPoints } from './BezierPoints'
import { BezierVec2 } from './BezierVec2'
import { midpoint } from './midpoint'
import { mirrorPoint } from './mirrorPoint'

type Props = {
  center: BezierVec2
  angle: number
  path: BezierPoints[]
}

export const mirrorPath = (props: Props): BezierPoints[] => {
  const { center, angle, path } = props

  const mirrored: BezierPoints[] = path.map((curve) => {
    const startAnchor: BezierVec2 = mirrorPoint({ center: center, angle: angle, point: curve.startAnchor })
    const startControl: BezierVec2 = mirrorPoint({ center: center, angle: angle, point: curve.startControl })
    const endControl: BezierVec2 = mirrorPoint({ center: center, angle: angle, point: curve.endControl })
    const endAnchor: BezierVec2 = mirrorPoint({ center: center, angle: angle, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return mirrored
}