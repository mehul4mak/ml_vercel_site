import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Mehul Kumawat",
  description: "Work experience and career history of Mehul Kumawat",
};

const experiences = [
  {
    role: "Staff Software Engineer — AI/ML",
    company: "Sentics",
    location: "Wolfsburg, Germany",
    period: "Feb 2026 — Present",
    type: "Hybrid",
    highlights: [
      "Architected multi-camera NVIDIA DeepStream pipeline improving braking response and detection precision by ~10%",
      "Designed cross-camera fusion with Kalman/EKF + IMU integration for identity consistency under occlusion",
      "Built VLM/LLM-assisted barcode and license plate recognition for sub-5s pallet identification",
      "Engineered deterministic braking signal orchestration over MQTT with Kafka telemetry pipelines",
      "Improved inference throughput by ~30% via DeepStream optimization and multi-GPU utilization",
    ],
    tags: ["DeepStream", "TensorRT", "C++", "Kalman Filter", "MQTT", "Kafka", "VLMs"],
    current: true,
  },
  {
    role: "Lead Software Engineer — AI/ML",
    company: "Stellantis",
    location: "Bengaluru, India",
    period: "Oct 2023 — Jan 2026",
    type: "Hybrid",
    highlights: [
      "Led GenAI tooling for feature onboarding and documentation, reducing manual effort by 60%",
      "Designed RAG pipelines using LlamaIndex, LangChain, Qdrant, FAISS, and OpenAI APIs",
      "Built automated test case generation platform achieving 60–70% test coverage automation",
      "Fine-tuned LLMs with LoRA, PEFT, Axolotl, and BitsAndBytes quantization",
      "Mentored 2+ engineers on GenAI architecture, vector DBs, and fine-tuning workflows",
    ],
    tags: ["LangChain", "LlamaIndex", "RAG", "LoRA", "PEFT", "FastAPI", "BentoML"],
    current: false,
  },
  {
    role: "Senior Software Engineer — AI/ML",
    company: "Stellantis",
    location: "Bengaluru, India",
    period: "Jun 2022 — Sep 2023",
    type: "Hybrid",
    highlights: [
      "Developed HVAC Predictive Personalization AI with adaptive threshold algorithms per user",
      "Built PySpark pipelines for high-volume user behavior data, EDA, and feature feasibility",
      "Deployed ML models (XGBoost, Scikit-learn) to Qualcomm SOC 8295 via ONNX and C++ APIs",
      "Implemented MLOps practices using MLFlow and Hesperides for model lifecycle management",
    ],
    tags: ["PySpark", "ONNX", "C++", "MLFlow", "Scikit-learn", "XGBoost", "Databricks"],
    current: false,
  },
  {
    role: "Senior Data Analyst",
    company: "The Hanover Company",
    location: "Ahmedabad, India",
    period: "Jun 2020 — Jun 2022",
    type: "On-site",
    highlights: [
      "Developed NLP model on Azure to automate ticket classification using topic modelling",
      "Created Microsoft AI solution for invoice data extraction",
      "Built Power BI dashboards from raw data for executive decision-making",
      "Achieved 200% productivity increase through automation and process optimization",
    ],
    tags: ["Azure", "NLP", "Power BI", "Python", "SQL"],
    current: false,
  },
];

const education = [
  {
    degree: "PG Diploma in Artificial Intelligence & Machine Learning",
    institution: "International Institute of Information Technology, Bangalore",
    period: "Jun 2021 — Jul 2022",
    gpa: "3.7/4.0",
    details: "EDA, Statistical Analysis, Machine Learning I & II, NLP, Deep Learning, Reinforcement Learning",
  },
  {
    degree: "B.Tech in Automobile Engineering",
    institution: "Indus University",
    period: "Jun 2013 — May 2017",
    gpa: null,
    details: "Foundation in engineering principles, CAD/CAM, and mechanical systems",
  },
];

export default function ExperiencePage() {
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
            Experience
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Career Timeline</h1>
        <p className="text-slate-500 mb-16 max-w-lg">
          6+ years building AI systems across automotive, logistics, and data analytics.
        </p>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#818cf8] via-[#22d3ee]/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${
                  exp.current
                    ? "bg-[#818cf8] border-[#818cf8] shadow-[0_0_12px_rgba(129,140,248,0.6)]"
                    : "bg-[#0d0d12] border-white/20"
                }`} />

                <div className="gradient-border p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-[#818cf8] font-medium">{exp.company}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{exp.location} · {exp.type}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        exp.current
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-[#818cf8] mt-1.5 text-xs">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/[0.08] text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
            <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
              Education
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="gradient-border p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{edu.degree}</h3>
                    <p className="text-[#818cf8] text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 rounded-full text-xs font-medium border bg-white/5 border-white/10 text-slate-400">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <p className="text-emerald-400 text-xs mt-1 font-medium">GPA {edu.gpa}</p>
                    )}
                  </div>
                </div>
                <p className="text-slate-500 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
