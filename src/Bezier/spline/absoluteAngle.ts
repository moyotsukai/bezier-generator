import { atan } from "../../utils/Math"
import { BezierVec2 } from "./BezierVec2"

type Props = {
  start: BezierVec2,
  end: BezierVec2
}

export const absoluteAngle = ({ start, end }: Props) => {
  const theta = atan((end.y - start.y) / (end.x - start.x))
  if (isNaN(theta)) { return 0 }

  if (end.x - start.x >= 0) {
    return theta
  } else {
    return 180 + theta
  }
}