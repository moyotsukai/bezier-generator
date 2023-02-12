import { intersection } from './intersection'
import { distance } from './distance'
import { cos, sin } from '../../utils/Math'
import { midpoint } from './midpoint'
import { inferLine } from './inferLine'
import { BezierVec2 } from './BezierVec2'
import { BezierPoints } from './BezierPoints'

//start: start anchor point
//eaa: end anchor angle
//eal: end anchor length
//cma: control midpoint angle
//cml: control midpoint length
//cdr: ratio of control distance to end anchor length
//cda: control distance angle

export type BezierControlPointsProps = {
  start: BezierVec2,
  controls: {
    eaa: number,
    eal: number,
    cma: number,
    cml: number,
    cdr: number | "smooth",
    cda: number
  }[]
}

export const bezierControlPoints = (props: BezierControlPointsProps): BezierPoints[] => {
  const { start, controls } = props

  let pathsInfo: BezierPoints[] = []
  for (let i = 0; i < controls.length; i++) {
    const control = controls[i]
    const startAnchor: BezierVec2 = pathsInfo.length === 0 ? start : pathsInfo[pathsInfo.length - 1].endAnchor
    const [endAnchorAngle, endAnchorLength, controlMidpointAngle, controlMidpointLength, controlDistanceAngle, controlDistanceRatio] = [control.eaa, control.eal, control.cma, control.cml, control.cda, control.cdr]

    const endAnchor: BezierVec2 = {
      x: startAnchor.x + cos(endAnchorAngle) * endAnchorLength,
      y: startAnchor.y - sin(endAnchorAngle) * endAnchorLength
    }

    const anchorMidpoint: BezierVec2 = midpoint(startAnchor, endAnchor)

    const controlMidpoint: BezierVec2 = {
      x: anchorMidpoint.x + cos(endAnchorAngle + (90 - controlMidpointAngle)) * controlMidpointLength,
      y: anchorMidpoint.y - sin(endAnchorAngle + (90 - controlMidpointAngle)) * controlMidpointLength
    }

    let controlDistance = 0
    if (controlDistanceRatio !== "smooth") {
      controlDistance = endAnchorLength * controlDistanceRatio
    } else {
      const controlLineAngle = endAnchorAngle - controlMidpointAngle - controlDistanceAngle
      const inferedControlLine = inferLine({ point: controlMidpoint, angle: controlLineAngle })
      const previousPath = pathsInfo[pathsInfo.length - 1]
      const smoothStartControl = intersection([previousPath.endControl, previousPath.endAnchor], inferedControlLine) ?? { x: 0, y: 0 }
      controlDistance = distance(smoothStartControl, controlMidpoint) * 2
    }

    const startControl: BezierVec2 = {
      x: controlMidpoint.x + cos(180 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2),
      y: controlMidpoint.y - sin(180 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2)
    }

    const endControl: BezierVec2 = {
      x: controlMidpoint.x + cos(360 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2),
      y: controlMidpoint.y - sin(360 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2)
    }

    pathsInfo.push({ startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint })
  }

  return pathsInfo
}