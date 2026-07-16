import { usePromptStore } from "../stores/prompt.store"

export const usePromptEngine = () => {
  const template = usePromptStore((state) => state.template)
  const variables = usePromptStore((state) => state.variables)
  const preview = usePromptStore((state) => state.preview)
  
  const setTemplate = usePromptStore((state) => state.setTemplate)
  const updateVariable = usePromptStore((state) => state.updateVariable)
  const resetStore = usePromptStore((state) => state.resetStore)

  // Di sini kita bisa menambahkan logika validasi lokal atau formatting tambahan di masa depan
  const isTemplateEmpty = template.trim() === ""
  const hasVariables = variables.length > 0

  return {
    // States
    template,
    variables,
    preview,
    isTemplateEmpty,
    hasVariables,
    
    // Actions
    setTemplate,
    updateVariable,
    resetStore,
  }
}