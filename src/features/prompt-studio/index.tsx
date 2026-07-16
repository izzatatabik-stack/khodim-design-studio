"use client"

import React from "react"
import PromptForm from "./components/PromptForm"
import PromptPreview from "./components/PromptPreview"
import { usePromptEngine } from "./hooks/usePromptEngine"

export default function PromptStudio() {
  const { resetStore, template } = usePromptEngine()

  return (
    <div className="space-y-6">
      {/* Top Toolbar Internal Fitur */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">AI Prompt Studio</h1>
          <p className="text-sm text-slate-400">Rancang, uji, dan optimalkan dynamic prompt dengan variabel real-time.</p>
        </div>
        
        {template && (
          <button
            onClick={resetStore}
            className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
          >
            Reset Template
          </button>
        )}
      </div>

      {/* Main Feature Workspace Split Grid */}
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
    </div>
  )
}