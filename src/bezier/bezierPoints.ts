import { BezierPath } from '../types/BezierPath.type'
import { Coordinate } from '../types/Coordinate.type'

//da: destination angle
//dl: destination length
//sca: start control angle
//scl: start control length
//dca: destination control angle
//dcl: destination control length

type Props = {
  start: Coordinate
  controls: {
    da: number
    dl: number
    sca: number | "smooth"
    scl: number
    dca: number
    dcl: number
  }[]
}

export const bezierPoints = (props: Props): BezierPath[] => {
  const start = props.start
  const controls = props.controls

  let paths: BezierPath[] = []
  for (let i = 0; i < controls.length; i++) {
    const m = paths.length === 0 ? start : paths[paths.length - 1].m
    const control = controls[i]
    const da = -control.da
    const dl = control.dl
    const sca = control.sca === "smooth" ? -controls[i - 1].da - da + controls[i - 1].dca : -control.sca
    const scl = control.scl
    const dca = -control.dca
    const dcl = control.dcl

    const startControlX = m.x + cos(da + sca) * scl
    const startControlY = m.y + sin(da + sca) * scl
    const length = Math.sqrt(Math.pow(dl, 2) + Math.pow(dcl, 2) - 2 * dl * dcl * cos(dca))
    const theta = asin(sin(dca) / length * dcl)
    const destinationControlX = m.x + cos(theta + da) * length
    const destinationControlY = m.y + sin(theta + da) * length
    const destinationX = m.x + cos(da) * dl
    const destinationY = m.y + sin(da) * dl

    paths.push({
      m: m,
      c: [{ x: startControlX, y: startControlY }, { x: destinationControlX, y: destinationControlY }, { x: destinationX, y: destinationY }]
    })
  }

  return paths
}

const cos = (angle: number) => {
  return Math.cos(angle * Math.PI / 180)
}

const sin = (angle: number) => {
  return Math.sin(angle * Math.PI / 180)
}

const atan = (x: number) => {
  return Math.atan(x) * 180 / Math.PI
}

const asin = (x: number) => {
  return Math.asin(x) * 180 / Math.PI
}