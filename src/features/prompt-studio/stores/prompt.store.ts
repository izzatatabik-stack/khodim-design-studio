import { create } from "zustand"
import { PromptState, PromptVariable } from "../types/prompt"
import { extractVariables, generatePreview } from "../utils/engine"

interface PromptActions {
  setTemplate: (template: string) => void
  updateVariable: (id: string, value: string) => void
  resetStore: () => void
}

const initialValues: PromptState = {
  template: "",
  variables: [],
  preview: "",
}

export const usePromptStore = create<PromptState & PromptActions>((set) => ({
  ...initialValues,

  setTemplate: (template) =>
    set((state) => {
      // Store murni mendelegasikan pemikiran logika ke Engine Layer (utils)
      const nextVariables = extractVariables(template, state.variables)
      const nextPreview = generatePreview(template, nextVariables)
      return { template, variables: nextVariables, preview: nextPreview }
    }),

  updateVariable: (id, value) =>
    set((state) => {
      const nextVariables = state.variables.map((v) =>
        v.id === id ? { ...v, value } : v
      )
      const nextPreview = generatePreview(state.template, nextVariables)
      return { variables: nextVariables, preview: nextPreview }
    }),

  resetStore: () => set(initialValues),
}))