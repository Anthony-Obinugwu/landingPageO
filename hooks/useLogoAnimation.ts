import { useState, useEffect } from "react"

export function useLogoAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false)
    }, 3000) // Hide animation after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return showAnimation
}

