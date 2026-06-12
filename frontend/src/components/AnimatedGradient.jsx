import React, { useEffect, useState } from 'react'
import '../App.css'

const AnimatedGradient = ({
  topLeft = "50%",
  topRight = "50%",
  bottomLeft = "50%",
  bottomRight = "50%",
  duration = 5000,
  color = "purple",
  height = "40dvw",
  width = "40dvw"
}) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      // pick random coordinates within 70% of viewport
      const x = Math.random() * window.innerWidth * 0.7
      const y = Math.random() * window.innerHeight * 0.7
      const rotation = Math.random() * 360

      setStyle({
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
        transition: `transform ${duration}ms ease-in-out`,
        background: color,
        borderTopLeftRadius: topLeft,
        borderTopRightRadius: topRight,
        borderBottomLeftRadius: bottomLeft,
        borderBottomRightRadius: bottomRight,
        width: width,
        height: height,
      })
    }, duration)

    return () => clearInterval(interval)
  }, [duration, color, topLeft, topRight, bottomLeft, bottomRight])

  return <div className="animatedGradient" style={style}></div>
}

export default AnimatedGradient
