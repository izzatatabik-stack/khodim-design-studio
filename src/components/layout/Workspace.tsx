import React from "react"

interface WorkspaceProps {
  children: React.ReactNode
}

export default function Workspace({ children }: WorkspaceProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-900 p-8">
      {children}
    </main>
  )
}