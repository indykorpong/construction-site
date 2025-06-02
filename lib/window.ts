'use client'
import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  if (!window) {
    return { width: 1920, height: 1080 }
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    setWindowDimensions(getWindowDimensions())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
