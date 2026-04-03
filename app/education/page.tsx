"use client";

import { useState } from "react";

const tabs = ["Education", "Certifications", "Languages"] as const;
type Tab = (typeof tabs)[number];

const education = [
  {
    degree: "PG Diploma in Artificial Intelligence & Machine Learning",
    institution: "International Institute of Information Technology, Bangalore",
    location: "Bangalore, India",
    period: "Jun 2021 — Jul 2022",
    gpa: "3.7 / 4.0",
    highlights: [
      "Exploratory Data Analysis & Statistical Analysis",
      "Machine Learning I & II",
      "Natural Language Processing",
      "Deep Learning",
      "Reinforcement Learning",
      "Capstone Project",
    ],
  },
  {
    degree: "B.Tech in Automobile Engineering",
    institution: "Indus University",
    location: "Ahmedabad, India",
    period: "Jun 2013 — May 2017",
    gpa: null,
    highlights: [
      "Foundation in engineering principles and mechanical systems",
      "CAD/CAM design and manufacturing",
    ],
  },
];

const certifications = [
  {
    title: "MLOps Nanodegree",
    issuer: "Udacity",
    status: "Completed",
    icon: "▲",
  },
  {
    title: "Sensor Fusion Nanodegree",
    issuer: "Udacity",
    status: "Completed",
    icon: "▲",
  },
  {
    title: "Generative AI Nanodegree",
    issuer: "Udacity",
    status: "In Progress",
    icon: "▲",
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    status: "Completed",
    icon: "◆",
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    status: "Completed",
    icon: "◆",
  },
  {
    title: "Goethe-Zertifikat A1: Start Deutsch 1",
    issuer: "Goethe-Institut",
    status: "Completed",
    icon: "●",
  },
];

const languages = [
  {
    language: "English",
    level: "Professional / Fluent",
    proficiency: 95,
    note: "Primary working language across all roles",
  },
  {
    language: "German",
    level: "Elementary (A1)",
    proficiency: 20,
    note: "Goethe-Zertifikat A1 — actively learning in Wolfsburg",
  },
  {
    language: "Hindi",
    level: "Native",
    proficiency: 100,
    note: "Mother tongue",
  },
  {
    language: "Gujarati",
    level: "Native",
    proficiency: 100,
    note: "Mother tongue",
  },
];

export default function EducationPage() {
  const [active, setActive] = useState<Tab>("Education");

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
          <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
            Education
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Education &amp; Credentials
        </h1>
        <p className="text-slate-500 mb-10 max-w-lg">
          Academic background, certifications, and language proficiencies.
        </p>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07] w-fit mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? "bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Education tab */}
        {active === "Education" && (
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="gradient-border p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-[#818cf8] font-medium text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{edu.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-medium border bg-white/5 border-white/10 text-slate-400">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <p className="text-emerald-400 text-xs mt-1.5 font-medium">GPA {edu.gpa}</p>
                    )}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-[#818cf8] mt-1.5 text-xs shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Certifications tab */}
        {active === "Certifications" && (
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="gradient-border p-5 flex gap-4 items-start">
                <span className="text-[#818cf8] text-xl mt-0.5 shrink-0">{cert.icon}</span>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm leading-snug">{cert.title}</h3>
                  <p className="text-[#818cf8] text-xs mt-1 font-medium">{cert.issuer}</p>
                  <span
                    className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium border ${
                      cert.status === "In Progress"
                        ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                        : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Languages tab */}
        {active === "Languages" && (
          <div className="space-y-5">
            {languages.map((lang, i) => (
              <div key={i} className="gradient-border p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{lang.language}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">{lang.note}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium border bg-white/5 border-white/10 text-slate-300">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full bg-white/[0.05] rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-[#818cf8] to-[#22d3ee] transition-all duration-500"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
