import { BezierVec2 } from "./BezierVec2"

export const midpoint = (a: BezierVec2, b: BezierVec2): BezierVec2 => {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2
  }
}