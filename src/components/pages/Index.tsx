import React, { useRef } from 'react'
import Example from '../works/Example'

const Index: React.FC = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null)

  const downloadSvg = () => {
    if (!svgContainerRef) { return }
    const svgElement = svgContainerRef.current?.querySelector("svg")
    const svgText = new XMLSerializer().serializeToString(svgElement as Node)
    const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(svgBlob)
    const a = document.createElement('a')
    a.href = svgUrl
    a.download = "image_A4.svg"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(svgUrl)
  }

  return (
    <div>
      <button onClick={downloadSvg}>Download</button>
      <div ref={svgContainerRef}>
        <Example />
      </div>
    </div>
  )
}

export default Index