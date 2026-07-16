import { PromptVariable } from "../types/prompt"

/**
 * Mengekstrak variabel unik berformat {{variable_name}} dari template teks.
 */
export const extractVariables = (template: string, currentVariables: PromptVariable[]): PromptVariable[] => {
  const regex = /\{\{([^}]+)\}\}/g
  const matches: string[] = []
  let match

  while ((match = regex.exec(template)) !== null) {
    const key = match[1].trim()
    if (!matches.includes(key)) {
      matches.push(key)
    }
  }

  return matches.map((key) => {
    const existing = currentVariables.find((v) => v.key === key)
    return {
      id: existing?.id || crypto.randomUUID(),
      key,
      value: existing?.value || "",
    }
  })
}

/**
 * Merender teks preview akhir dengan menginjeksi nilai variabel secara real-time.
 */
export const generatePreview = (template: string, variables: PromptVariable[]): string => {
  let preview = template
  variables.forEach((v) => {
    const escapedKey = v.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const regex = new RegExp(`\\{\\{\\s*${escapedKey}\\s*\\}\\}`, "g")
    preview = preview.replace(regex, v.value || `[${v.key}]`)
  })
  return preview
}