import React from 'react'
import Bezier from '../../Bezier'

const NUM = 1
// const CENTER: Bezier.Vec2 = { x: 1600, y: 1000 }
const CENTER: Bezier.Vec2 = { x: 500, y: 800 }
// const SCALE = 0.6
const SCALE = 3

const Example: React.FC = () => {
  // const mountainPath = Bezier.spline({
  //   start: { x: CENTER.x + 5, y: CENTER.y - 25 },
  //   points: [
  //     {
  //       end: { eaa: 90, eal: 800 * SCALE },
  //       controls: { cma: -80, cml: -150 * SCALE, cdr: 0.3, cda: 80 }
  //     }
  //   ]
  // })

  const mountainPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y },
    points: [
      {
        end: { eaa: 0, eal: 800 * SCALE },
        controls: { cma: 30, cml: 200 * SCALE, cdr: 0.3, cda: -20 }
      }
    ]
  })

  // const valleyPath = Bezier.spline({
  //   start: { x: CENTER.x - 5, y: CENTER.y - 25 },
  //   points: [
  //     {
  //       end: { eaa: 110, eal: 800 * SCALE },
  //       controls: { cma: -50, cml: -240 * SCALE, cdr: 0.2, cda: 30 }
  //     }
  //   ]
  // })

  const valleyPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y + 800 },
    points: [
      {
        end: { eaa: 0, eal: 800 * SCALE },
        controls: { sca: 30, scl: 200 * SCALE, eca: 45, ecl: 250 * SCALE }
      }
    ]
  })

  // const splines: Bezier.Spline[] = Array(NUM).fill(0).map((_, index) => {
  //   return [
  //     mountainPath.rotate({ center: CENTER, angle: 360 / NUM * index }),
  //     valleyPath.rotate({ center: CENTER, angle: 360 / NUM * index })
  //   ]
  // }).flat()


  const splines: Bezier.Spline[] = [
    mountainPath,
    valleyPath
  ].flat()

  return (
    <Bezier.Svg splines={splines} />
  )
}

export default Example