"use client"

import React from "react"
import { usePromptEngine } from "../hooks/usePromptEngine"

export default function PromptPreview() {
  const { preview, isTemplateEmpty } = usePromptEngine()

  return (
    <div className="flex flex-col gap-2 h-full">
      <label className="text-sm font-semibold text-slate-300">Live Preview Output</label>
      <div className="flex-1 min-h-40 rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300 font-mono overflow-y-auto whitespace-pre-wrap selection:bg-amber-500/30">
        {isTemplateEmpty ? (
          <span className="text-slate-600 italic">Hasil kompilasi prompt Anda akan muncul di sini secara real-time...</span>
        ) : (
          preview
        )}
      </div>
    </div>
  )
}