"use client"

import React from "react"
import PromptForm from "./PromptForm"
import PromptPreview from "./PromptPreview"

export default function PromptWorkspace() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
      {/* Kiri: Form & Input Input Variabel */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/20 p-6 shadow-sm">
        <PromptForm />
      </div>

      {/* Kanan: Live Output Preview Screen */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/20 p-6 shadow-sm h-full">
        <PromptPreview />
      </div>
    </div>
  )
}