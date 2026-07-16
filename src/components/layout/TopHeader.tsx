export default function TopHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      <div className="text-sm text-slate-400 font-medium">
        Workspace / <span className="text-white">AI Prompt Studio</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
          API Connected
        </span>
      </div>
    </header>
  )
}