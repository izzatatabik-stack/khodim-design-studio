import React from "react"
import Sidebar from "./Sidebar"
import TopHeader from "./TopHeader"
import Workspace from "./Workspace"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-900 text-slate-100 antialiased">
      {/* 1. Komponen Sidebar Kiri Permanen */}
      <Sidebar />

      {/* 2. Area Konten Utama Kanan */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <TopHeader />
        
        {/* Dynamic Workspace */}
        <Workspace>
          {children}
        </Workspace>
      </div>
    </div>
  )
}