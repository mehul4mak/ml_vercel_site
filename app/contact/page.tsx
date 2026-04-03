import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mehul Kumawat",
  description: "Get in touch with Mehul Kumawat",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
          <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
            Contact
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Get in Touch</h1>
        <p className="text-slate-500 mb-12">
          Open to new opportunities, collaborations, or just a conversation about AI/ML.
        </p>

        {/* Contact info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              label: "Email",
              value: "mehulkumawat@icloud.com",
              href: "mailto:mehulkumawat@icloud.com",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/mehulkumawat",
              href: "https://linkedin.com/in/mehulkumawat",
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
            },
            {
              label: "GitHub",
              value: "github.com/mehul4mak",
              href: "https://github.com/mehul4mak",
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              ),
            },
            {
              label: "Phone",
              value: "+49 155 1068 1128",
              href: "tel:+4915510681128",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="gradient-border p-5 flex items-center gap-4 group"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/[0.08] text-[#818cf8] group-hover:bg-[#818cf8]/10 group-hover:border-[#818cf8]/30 transition-all duration-200">
                {item.icon}
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact form note */}
        <div className="gradient-border p-6 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Prefer email? Reach me directly at{" "}
            <a href="mailto:mehulkumawat@icloud.com" className="text-[#818cf8] hover:text-[#22d3ee] transition-colors">
              mehulkumawat@icloud.com
            </a>{" "}
            — I usually respond within 24 hours.
          </p>
          <p className="text-slate-600 text-xs">
            Based in Wolfsburg, Germany · Open to remote opportunities worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
