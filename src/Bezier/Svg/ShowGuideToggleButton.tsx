import React from 'react'
import { useSetShowGuide, useShowGuideValue } from '../../context/ShowGuideContext'
import styles from '../../styles/Svg/Svg.module.css'

export const ShowGuideToggleButton: React.FC = () => {
  const [showGuide, setShowGuide] = [useShowGuideValue(), useSetShowGuide()]

  const onToggleSwitch = () => {
    setShowGuide((prev) => !prev)
  }

  return (
    <span className={styles.svgShowGuideButtonContainer}>
      Show guide
      <input type="checkbox" checked={showGuide} onChange={onToggleSwitch} className={styles.svgShowGuideButton} />
    </span>
  )
}