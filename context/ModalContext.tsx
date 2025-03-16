"use client"

import { createContext, useState, useContext, type ReactNode } from "react"
import ScheduleCallModal from "../components/ScheduleCallModal"

interface ModalContextType {
  openScheduleCallModal: () => void
  closeScheduleCallModal: () => void
}

interface ScheduleCallModalProps {
  isOpen: boolean
  onClose: () => void
}

const LocalScheduleCallModal = ({ isOpen, onClose }: ScheduleCallModalProps) => {
  return (
    // Your component implementation here
    <div>
      {isOpen && (
        <div>
          <button onClick={onClose}>Close</button>
          {/* Add your modal content here */}
        </div>
      )}
    </div>
  )
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isScheduleCallModalOpen, setIsScheduleCallModalOpen] = useState(false)

  const openScheduleCallModal = () => setIsScheduleCallModalOpen(true)
  const closeScheduleCallModal = () => setIsScheduleCallModalOpen(false)

  return (
    <ModalContext.Provider value={{ openScheduleCallModal, closeScheduleCallModal }}>
      {children}
      <LocalScheduleCallModal isOpen={isScheduleCallModalOpen} onClose={closeScheduleCallModal} />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

