import React from 'react'
import styles from '../../styles/Svg/Svg.module.css'

type Props = {
  width?: number
  height?: number
  children?: React.ReactNode
}

//The dedault size 3508px x 2480px is A4
const Svg: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.width ?? 3508}px`}
      height={`${props.height ?? 2480}px`}
      viewBox={`0 0 ${props.width ?? 3508} ${props.height ?? 2480}`}
      stroke="black"
      fill="transparent"
      className={styles.svg}
    >
      {props.children}
    </svg>
  )
}

export default Svg