"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const commands = [
  { id: "home", label: "Home", description: "Back to the start", icon: "⌂", href: "/" },
  { id: "projects", label: "Projects", description: "ML and AI projects", icon: "◈", href: "/projects" },
  { id: "experience", label: "Experience", description: "Career timeline", icon: "◎", href: "/experience" },
  { id: "education", label: "Education", description: "Degrees, certifications, languages", icon: "◆", href: "/education" },
  { id: "contact", label: "Contact", description: "Get in touch", icon: "✉", href: "/contact" },
  { id: "mnist", label: "MNIST Demo", description: "Live digit recognition demo", icon: "▶", href: "/projects/mnist" },
  { id: "resume", label: "Download Resume", description: "Get my latest CV", icon: "↓", href: "/resume.pdf", download: true },
  { id: "github", label: "GitHub", description: "github.com/mehul4mak", icon: "◉", href: "https://github.com/mehul4mak", external: true },
  { id: "linkedin", label: "LinkedIn", description: "linkedin.com/in/mehulkumawat", icon: "in", href: "https://linkedin.com/in/mehulkumawat", external: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  const execute = useCallback(
    (cmd: (typeof commands)[0]) => {
      close();
      if (cmd.external) {
        window.open(cmd.href, "_blank", "noopener noreferrer");
      } else if (cmd.download) {
        const a = document.createElement("a");
        a.href = cmd.href;
        a.download = "Mehul_Kumawat_Resume.pdf";
        a.click();
      } else {
        router.push(cmd.href);
      }
    },
    [close, router]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => { setSelected(0); }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter" && filtered[selected]) execute(filtered[selected]);
  };

  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-500 text-xs hover:text-slate-300 hover:border-white/20 transition-all"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      Search
      <span className="ml-1 flex items-center gap-0.5">
        <kbd className="px-1 rounded bg-white/10 text-[10px] font-mono">⌘</kbd>
        <kbd className="px-1 rounded bg-white/10 text-[10px] font-mono">K</kbd>
      </span>
    </button>
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Palette */}
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg px-4">
        <div className="rounded-2xl border border-white/10 bg-[#0d0d12]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07]">
            <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, projects, links…"
              className="flex-1 bg-transparent text-white text-sm placeholder-slate-600 outline-none"
            />
            <kbd
              className="px-1.5 py-0.5 rounded border border-white/10 text-slate-600 text-[10px] font-mono cursor-pointer hover:text-slate-400 transition-colors"
              onClick={close}
            >
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto py-2">
            {filtered.length === 0 ? (
              <p className="text-slate-600 text-sm text-center py-8">No results</p>
            ) : (
              filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => execute(cmd)}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    i === selected ? "bg-white/[0.06]" : ""
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 font-mono ${
                    i === selected ? "bg-[#818cf8]/20 text-[#818cf8]" : "bg-white/5 text-slate-500"
                  }`}>
                    {cmd.icon}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-sm font-medium ${i === selected ? "text-white" : "text-slate-300"}`}>
                      {cmd.label}
                    </p>
                    <p className="text-xs text-slate-600 truncate">{cmd.description}</p>
                  </div>
                  {i === selected && (
                    <svg className="w-4 h-4 text-slate-600 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-white/[0.07] flex items-center gap-4 text-[10px] text-slate-600 font-mono">
            <span><kbd className="border border-white/10 px-1 rounded">↑</kbd><kbd className="border border-white/10 px-1 rounded ml-0.5">↓</kbd> navigate</span>
            <span><kbd className="border border-white/10 px-1 rounded">↵</kbd> open</span>
            <span><kbd className="border border-white/10 px-1 rounded">esc</kbd> close</span>
          </div>
        </div>
      </div>
    </>
  );
}
