export interface PromptVariable {
  id: string
  key: string        // Nama variabel, misal: "topic", "tone"
  value: string      // Isi value yang diinput user
}

export interface PromptState {
  template: string   // Teks mentah dengan format {{variable}}
  variables: PromptVariable[]
  preview: string    // Teks final setelah variabel di-inject
}