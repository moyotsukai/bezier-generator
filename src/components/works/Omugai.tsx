import React from 'react'
import { bezierPoints } from '../../bezier/bezierPoints'
import Svg from '../Svg/Svg'
import SvgPath from '../Svg/SvgPath'
import { BezierPath } from '../../types/BezierPath.type'

const Omugai: React.FC = () => {
  const paths: BezierPath[] = [
    bezierPoints({
      start: { x: 1000, y: 1000 },
      controls: [{ da: 120, dl: 800, sca: -45, scl: 500, dca: -45, dcl: 500 }]
    }),
    bezierPoints({
      start: { x: 1500, y: 1000 },
      controls: [{ da: 60, dl: 800, sca: -45, scl: 500, dca: -45, dcl: 500 }]
    }),
  ].flat()

  return (
    <Svg>
      {paths.map((path, index) => (
        <SvgPath path={path} key={index} />
      ))}
    </Svg>
  )
}

export default Omugai