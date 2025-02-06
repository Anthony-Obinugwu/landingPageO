import type React from "react"

interface SectionConnectorProps {
  children: React.ReactNode
}

export default function SectionConnector({ children }: SectionConnectorProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tech-green/20 transform -translate-x-1/2 pointer-events-none">
        <div className="sticky top-1/2">
          <div className="h-24 w-px bg-tech-green animate-pulse" />
        </div>
      </div>
      {children}
    </div>
  )
}

