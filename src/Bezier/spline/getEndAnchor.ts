import { BezierPoints } from "./BezierPoints"
import { BezierVec2 } from "./BezierVec2"

export const getEndAnchor = (paths: BezierPoints[]): BezierVec2 => {
  return paths[paths.length - 1].endAnchor
}