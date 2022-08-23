import React from 'react'
import styles from '../../styles/Svg/Svg.module.css'

type Props = {
  children?: React.ReactNode
}

//The dedault size 3508px x 2480px is A4
const Svg: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="	3508px"
      height="2480px"
      viewBox="0 0 3508 2480"
      stroke="black"
      fill="transparent"
      className={styles.svg}
    >
      {props.children}
    </svg>
  )
}

export default Svg