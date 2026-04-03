import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#818cf8] to-[#22d3ee] flex items-center justify-center text-white font-bold text-xs">
            MK
          </div>
          <span className="text-slate-500 text-sm">Mehul Kumawat</span>
        </div>

        <p className="text-slate-600 text-sm">
          Built with Next.js · Deployed on Vercel
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mehul4mak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mehulkumawat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors text-sm"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="text-slate-600 hover:text-slate-300 transition-colors text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
