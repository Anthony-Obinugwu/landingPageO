"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import ScheduleCallForm from "./ScheduleCallForm"

export default function ScheduleCallModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show the modal after a short delay when the page loads
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000) // 1 second delay for better user experience

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close form"
        >
          <X className="w-5 h-5 text-deep-blue" />
        </button>
        <ScheduleCallForm isModal={true} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  )
}

