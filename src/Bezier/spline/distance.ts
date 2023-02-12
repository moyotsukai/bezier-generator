import { pow, sqrt } from '../../utils/Math'
import { BezierVec2 } from './BezierVec2'

export const distance = (a: BezierVec2, b: BezierVec2): number => {
  return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2))
}