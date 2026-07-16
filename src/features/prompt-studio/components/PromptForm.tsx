"use client"

import React from "react"
import { usePromptEngine } from "../hooks/usePromptEngine"

export default function PromptForm() {
  const { template, variables, setTemplate, updateVariable } = usePromptEngine()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-300">Prompt Template</label>
        <textarea
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="Tulis prompt di sini. Gunakan {{variable_name}} untuk membuat variabel dinamis..."
          className="h-40 w-full rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 resize-none transition-all"
        />
      </div>

      {variables.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">Dynamic Variables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {variables.map((variable) => (
              <div key={variable.id} className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400">
                  {variable.key.replace(/_/g, " ")}
                </label>
                <input
                  type="text"
                  value={variable.value}
                  onChange={(e) => updateVariable(variable.id, e.target.value)}
                  placeholder={`Isi nilai untuk [${variable.key}]`}
                  className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}