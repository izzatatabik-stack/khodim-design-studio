import Logo from "./Logo"
import Navigation from "./Navigation"

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-950">
      <Logo />
      <Navigation />
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
        v0.1.0 — Alpha
      </div>
    </aside>
  )
}