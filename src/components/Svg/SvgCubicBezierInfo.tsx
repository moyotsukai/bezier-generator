import React from 'react'
import { BezierPathInfo } from '../../types/BezierPathInfo.type'
import SvgCircle from './SvgCircle'
import SvgLine from './SvgLine'

type Props = {
  pathInfo: BezierPathInfo
}

const SvgCubicBezierInfo: React.FC<Props> = (props) => {
  const info = props.pathInfo

  return (
    <React.Fragment>
      <SvgCircle center={info.startAnchor} radius={10} fill={"black"} />
      <SvgCircle center={info.endAnchor} radius={10} fill={"gray"} />
      <SvgCircle center={info.startControl} radius={10} fill={"red"} />
      <SvgCircle center={info.endControl} radius={10} fill={"blue"} />
      <SvgCircle center={info.anchorMidpoint} radius={10} fill={"pink"} />
      <SvgCircle center={info.controlMidpoint} radius={10} fill={"green"} />

      <SvgLine start={info.startAnchor} end={info.endAnchor} stroke="gray" />
      <SvgLine start={info.anchorMidpoint} end={info.controlMidpoint} stroke="gray" />
      <SvgLine start={info.startControl} end={info.endControl} stroke="gray" />
      <SvgLine start={info.startAnchor} end={info.startControl} stroke="gray" />
      <SvgLine start={info.endAnchor} end={info.endControl} stroke="gray" />
    </React.Fragment>
  )
}

export default SvgCubicBezierInfo