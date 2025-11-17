import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-6 flex h-16 items-center justify-between rounded-2xl border-4 border-black bg-white px-4 shadow-[6px_6px_0_#000]">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border-2 border-black bg-gradient-to-br from-purple-400 via-blue-400 to-orange-300">
              <Sparkles className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">Hireshub</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#cta" className="hover:underline">Get started</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0_#000] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000]">Log in</button>
            <button className="rounded-xl border-2 border-black bg-yellow-300 px-4 py-2 font-bold shadow-[4px_4px_0_#000] transition hover:bg-yellow-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000]">Request demo</button>
          </div>

          <button className="md:hidden grid h-10 w-10 place-items-center rounded-xl border-2 border-black bg-white shadow-[4px_4px_0_#000]" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden -mt-4 mb-6 rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_#000]">
            <div className="flex flex-col gap-3 text-base font-bold">
              <a href="#features" onClick={() => setOpen(false)}>Features</a>
              <a href="#how" onClick={() => setOpen(false)}>How it works</a>
              <a href="#cta" onClick={() => setOpen(false)}>Get started</a>
              <div className="pt-2 flex gap-3">
                <button className="flex-1 rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0_#000]">Log in</button>
                <button className="flex-1 rounded-xl border-2 border-black bg-yellow-300 px-4 py-2 font-bold shadow-[4px_4px_0_#000]">Request demo</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
