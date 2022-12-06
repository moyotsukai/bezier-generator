import { Vec2 } from './Vec2'

export type BezierPathInfo = {
  startAnchor: Vec2
  startControl: Vec2,
  endControl: Vec2,
  endAnchor: Vec2,
  anchorMidpoint: Vec2,
  controlMidpoint: Vec2
}
