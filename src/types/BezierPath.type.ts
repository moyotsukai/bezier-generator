import { Vec2 } from './Vec2'

export type BezierPath = {
  startAnchor: Vec2
  startControl: Vec2,
  endControl: Vec2,
  endAnchor: Vec2
}
