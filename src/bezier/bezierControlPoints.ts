import { angleAfromSineTheorem, normalizeAngle, takeAcuteAngle } from './../utils/Math';
import { distance } from './distance';
import { Vec2 } from '../types/Vec2'
import { angleAfromLawOfCosines, cos, lengthAfromSineTheorem, sin } from '../utils/Math'
import { midpoint } from './midpoint';
import { BezierPathInfo } from '../types/BezierPathInfo.type';

//start: start anchor point
//eaa: end anchor angle
//eal: end anchor length
//cma: control midpoint angle
//cml: control midpoint length
//cdr: ratio of control distance to end anchor length
//cda: control distance angle

type Props = {
  start: Vec2,
  controls: {
    eaa: number,
    eal: number,
    cma: number,
    cml: number,
    cdr: number | "smooth",
    cda: number
  }[]
}

export const bezierControlPoints = (props: Props): BezierPathInfo[] => {
  const { start, controls } = props

  let pathsInfo: BezierPathInfo[] = []
  for (let i = 0; i < controls.length; i++) {
    const control = controls[i]
    const startAnchor: Vec2 = pathsInfo.length === 0 ? start : pathsInfo[pathsInfo.length - 1].endAnchor
    const endAnchorAngle = control.eaa
    const endAnchorLength = control.eal
    const controlMidpointAngle = control.cma
    const controlMidpointLength = control.cml
    const controlDistanceAngle = control.cda
    const controlDistanceRatio = control.cdr

    const endAnchor: Vec2 = {
      x: startAnchor.x + cos(endAnchorAngle) * endAnchorLength,
      y: startAnchor.y - sin(endAnchorAngle) * endAnchorLength
    }

    const anchorMidpoint: Vec2 = midpoint(startAnchor, endAnchor)

    const controlMidpoint: Vec2 = {
      x: anchorMidpoint.x + cos(endAnchorAngle + (90 - controlMidpointAngle)) * controlMidpointLength,
      y: anchorMidpoint.y - sin(endAnchorAngle + (90 - controlMidpointAngle)) * controlMidpointLength
    }

    let controlDistance = 0
    if (controlDistanceRatio !== "smooth") {
      controlDistance = endAnchorLength * controlDistanceRatio
    } else {
      const previousPath = pathsInfo[pathsInfo.length - 1]
      const d_sa_am_1 = distance(startAnchor, previousPath.anchorMidpoint)
      const d_ec_1_am_1 = distance(previousPath.endControl, previousPath.anchorMidpoint)
      const d_sa_ec_1 = distance(startAnchor, previousPath.endControl)
      const alpha = angleAfromLawOfCosines({ a: d_ec_1_am_1, b: d_sa_ec_1, c: d_sa_am_1 })
      console.log("alpha: ", alpha)
      const previousControls = controls[i - 1]
      const beta = normalizeAngle(previousControls.eaa - alpha - endAnchorAngle)
      console.log("beta: ", beta)
      const gamma = normalizeAngle(360 - (takeAcuteAngle(beta) + 90 + takeAcuteAngle(controlMidpointAngle) + 90 + controlDistanceAngle))
      console.log("gamma: ", gamma)
      const d_sa_cm = distance(startAnchor, controlMidpoint)
      const d_sa_am = distance(startAnchor, anchorMidpoint)
      const delta = angleAfromLawOfCosines({ a: controlMidpointLength, b: d_sa_cm, c: d_sa_am })
      console.log("delta: ", delta)
      const d_sc_cm = lengthAfromSineTheorem({ angleA: takeAcuteAngle(beta) - takeAcuteAngle(delta), angleB: takeAcuteAngle(gamma), b: d_sa_cm })
      controlDistance = 2 * d_sc_cm
      // console.log("cd: ", controlDistance)

      // const previousPath = pathsInfo[pathsInfo.length - 1]
      // //"_1" means the previous one
      // const d_ec_1_am_1 = distance(previousPath.endControl, previousPath.anchorMidpoint)
      // const d_sa_ec_1 = distance(startAnchor, previousPath.endControl)
      // const previousControls = controls[i - 1]
      // const alpha = angleAfromLawOfCosines({ a: d_ec_1_am_1, b: d_sa_ec_1, c: previousControls.eal / 2 })
      // console.log("alpha: ", alpha)
      // const beta = previousControls.eaa - alpha - endAnchorAngle
      // console.log("beta: ", beta)
      // const d_sa_cm = distance(startAnchor, controlMidpoint)
      // const gamma = angleAfromLawOfCosines({ a: controlMidpointLength, b: endAnchorLength / 2, c: d_sa_cm })
      // console.log("gamma: ", gamma)
      // console.log({ a: d_sa_cm, b: controlDistance / 2, angleB: takeAcuteAngle(beta) - gamma })
      // const delta = angleAfromSineTheorem({ a: d_sa_cm, b: controlDistance / 2, angleB: takeAcuteAngle(beta) - gamma })
      // console.log("delta: ", delta)
      // const epsilon = 360 - (takeAcuteAngle(beta) + 90 + takeAcuteAngle(controlMidpointAngle) + takeAcuteAngle(delta))
      // console.log("epsilon: ", epsilon)
      // controlDistanceAngle = 90 - epsilon
      // console.log("cda: ", controlDistanceAngle)
    }

    const startControl: Vec2 = {
      x: controlMidpoint.x + cos(180 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2),
      y: controlMidpoint.y - sin(180 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2)
    }

    const endControl: Vec2 = {
      x: controlMidpoint.x + cos(360 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2),
      y: controlMidpoint.y - sin(360 - (controlMidpointAngle - endAnchorAngle + controlDistanceAngle)) * (controlDistance / 2)
    }

    pathsInfo.push({ startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint })
  }

  return pathsInfo
}