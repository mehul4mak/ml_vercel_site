import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            Available for new opportunities
          </div>

          {/* Name */}
          <div>
            <p className="text-slate-400 text-lg mb-2 font-medium">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Mehul</span>
              <br />
              <span className="text-white">Kumawat</span>
            </h1>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
            <p className="text-xl text-slate-300 font-medium">
              Staff Software Engineer — AI/ML
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Wolfsburg, Germany
          </div>

          {/* Bio */}
          <p className="text-slate-400 text-base leading-relaxed max-w-lg">
            Building intelligent systems at the edge — from multi-camera perception pipelines
            and sensor fusion to GenAI tooling and LLM-powered automation. Currently at{" "}
            <span className="text-slate-200 font-medium">Sentics</span>, pushing the limits of
            real-time AI in safety-critical environments.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              View Projects
            </Link>
            <a
              href="https://mehul4mak.github.io/assets/img/mehul_circle.png"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-semibold text-sm hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-[0.98] transition-all duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://github.com/mehul4mak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mehulkumawat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:mehulkumawat@icloud.com"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Profile photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#818cf8] to-[#22d3ee] blur-2xl opacity-20 scale-110 animate-glow-pulse" />
            {/* Gradient ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-br from-[#818cf8] to-[#22d3ee] glow">
              <div className="p-1 rounded-full bg-bg">
                <Image
                  src="https://mehul4mak.github.io/assets/img/mehul_circle.png"
                  alt="Mehul Kumawat"
                  width={320}
                  height={320}
                  className="rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover"
                  priority
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-[#0d0d12] border border-white/10 backdrop-blur-sm shadow-xl">
              <p className="text-xs text-slate-400">Currently at</p>
              <p className="text-sm font-semibold text-white">Sentics GmbH</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-xs">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
