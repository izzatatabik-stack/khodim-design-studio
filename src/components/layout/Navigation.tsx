export default function Navigation() {
  return (
    <nav className="flex-1 space-y-1 p-4">
      <div className="rounded-lg bg-slate-800/50 px-4 py-2 text-sm font-medium text-white">
        🎛️ AI Prompt Studio
      </div>
      <div className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white cursor-not-allowed opacity-50">
        🖼️ AI Image Studio
      </div>
      <div className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white cursor-not-allowed opacity-50">
        📦 Gallery
      </div>
      <div className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white cursor-not-allowed opacity-50">
        ⚙️ Settings
      </div>
    </nav>
  )
}