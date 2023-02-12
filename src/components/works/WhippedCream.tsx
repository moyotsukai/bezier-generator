import React from 'react'
import Bezier from '../../Bezier'

const NUM = 8
const CENTER: Bezier.Vec2 = { x: 1600, y: 1000 }
const SCALE = 0.6

const WhippedCream: React.FC = () => {
  const creamMountainPath = Bezier.spline({
    start: { x: CENTER.x + 5, y: CENTER.y - 25 },
    controls: [
      { eaa: 90, eal: 800 * SCALE, cma: -80, cml: -150 * SCALE, cdr: 0.3, cda: 80 }
    ]
  })

  const creamValleyPath = Bezier.spline({
    start: { x: CENTER.x - 5, y: CENTER.y - 25 },
    controls: [
      { eaa: 110, eal: 800 * SCALE, cma: -50, cml: -240 * SCALE, cdr: 0.2, cda: 30 }
    ]
  })

  const splines: Bezier.Spline[] = Array(NUM).fill(0).map((_, index) => {
    return [
      creamMountainPath.rotate({ center: CENTER, angle: 360 / NUM * index }),
      creamValleyPath.rotate({ center: CENTER, angle: 360 / NUM * index })
    ]
  }).flat()

  return (
    <Bezier.Svg splines={splines} />
  )
}

export default WhippedCream