import { BezierPathInfo } from '../types/BezierPathInfo.type'
import { Vec2 } from '../types/Vec2'

export const getEndAnchor = (paths: BezierPathInfo[]): Vec2 => {
  return paths[paths.length - 1].endAnchor
}