import { sin } from '../../utils/Math'
import { cos } from '../../utils/Math'
import { BezierVec2 } from './BezierVec2'

type Props = {
  point: BezierVec2,
  angle: number
}

export const inferLine = (props: Props): [BezierVec2, BezierVec2] => {
  const { point, angle } = props
  const lineLength = 1000
  const endPoint: BezierVec2 = {
    x: point.x + cos(angle) * lineLength,
    y: point.y - sin(angle) * lineLength
  }

  return [point, endPoint]
}