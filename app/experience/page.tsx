import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Mehul Kumawat",
  description: "Work experience and career history of Mehul Kumawat",
};

type FlatExperience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  sections?: never;
  tags: string[];
  current: boolean;
};

type SectionedExperience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights?: never;
  sections: { title: string; points: string[] }[];
  tags: string[];
  current: boolean;
};

type Experience = FlatExperience | SectionedExperience;

const experiences: Experience[] = [
  {
    role: "Staff Software Engineer — AI/ML",
    company: "Sentics",
    location: "Wolfsburg, Germany",
    period: "Feb 2026 — Present",
    type: "Hybrid",
    sections: [
      {
        title: "Real-Time Multi-Camera Perception & Sensor Fusion",
        points: [
          "Architected and optimized a multi-camera NVIDIA DeepStream pipeline for detection of vehicles, AGVs, pedestrians, and safety vests, improving braking response time by several seconds and increasing detection precision by ~10% through advanced state estimation and association.",
          "Designed cross-camera fusion logic using tracking IDs, proximity-based matching, and Kalman Filter / Extended Kalman Filter (EKF) integration with IMU data to maintain identity consistency and minimize ID switching under occlusion and rapid motion.",
          "Calibrated external cameras and body-mounted IMUs to improve motion tracking and spatial alignment accuracy using sensor fusion techniques.",
          "Re-engineered the multi-camera fusion layer in C++ (OpenCV, TensorRT), reducing false positives and significantly stabilizing cross-view object association.",
          "Implemented Grid Occupancy Mapping and later transitioned to a computationally efficient Point-in-Polygon braking logic, reducing latency and improving braking precision in complex warehouse layouts.",
        ],
      },
      {
        title: "Edge AI + Visual Intelligence (Barcode & License Plate Recognition)",
        points: [
          "Designed and deployed vision pipelines for high-resolution PTZ camera-based barcode detection and recognition, enabling automated pallet identification within sub-5-second operational windows.",
          "Integrated multimodal Vision-Language Models (VLMs) and LLM-assisted post-processing to enhance robustness of OCR, barcode parsing, and license plate recognition in challenging lighting and motion conditions.",
          "Built an LLM-based validation agent that cross-verified visual outputs (barcode strings, license plate numbers) against backend warehouse records, reducing misreads and enabling semantic error correction beyond traditional OCR heuristics.",
          "Combined edge inference (TensorRT-optimized C++ models) with cloud-hosted LLM services for contextual reasoning, anomaly detection, and structured data extraction from visual inputs.",
        ],
      },
      {
        title: "IoT, Messaging & Intelligent Decision Systems",
        points: [
          "Engineered deterministic braking signal orchestration over MQTT, ensuring low-latency communication between the perception stack and vehicle control systems.",
          "Designed IoT-based telemetry pipelines streaming perception metadata (tracking ID, class, bbox, ArUco ID, confidence) to Kafka for downstream fusion and analytics.",
          "Built LLM-powered monitoring tools for automated log summarization, anomaly explanation, and operator-facing diagnostics.",
        ],
      },
      {
        title: "MLOps, Optimization & Deployment",
        points: [
          "Led full MLOps lifecycle: dataset curation, model training, ONNX export, TensorRT optimization, DeepStream deployment, version control, and environment configuration management.",
          "Improved inference throughput by ~30% by resolving DeepStream bottlenecks, optimizing RTSP ingestion, enabling multi-GPU utilization, and reducing memory overhead.",
          "Established structured Git workflows, CI/CD processes, and reproducible configuration management enabling seamless customer-site deployments without recompilation.",
          "Enabled remote cloud sync and backup of model artifacts and configuration files for traceability and audit compliance.",
        ],
      },
      {
        title: "Safety-Critical System Design",
        points: [
          "Defined warehouse operational zones (Danger Zone, No-Braking Zone) for context-aware safety enforcement.",
          "Implemented multi-layer validation combining perception confidence, fusion stability, and semantic checks before triggering brake signals.",
          "Conducted on-site performance tuning and failure mode analysis under real-world constraints including occlusion, glare, motion blur, and network latency.",
        ],
      },
    ],
    tags: ["DeepStream", "TensorRT", "C++", "OpenCV", "Kalman Filter / EKF", "IMU", "MQTT", "Kafka", "VLMs", "ONNX", "ArUco", "MLOps", "Docker"],
    current: true,
  },
  {
    role: "Lead Software Engineer — AI/ML",
    company: "Stellantis",
    location: "Bengaluru, India",
    period: "Oct 2023 — Jan 2026",
    type: "Hybrid",
    highlights: [
      "Led the development of GenAI tools for automating feature onboarding, technical documentation, and system diagnostics using LLMs (GPT-4, LLaMA2, Falcon) and on-prem deployment via Ollama for secure edge execution — boosting internal engineering velocity and reducing manual documentation by 60%.",
      "Designed and deployed Retrieval-Augmented Generation (RAG) pipelines using LlamaIndex, LangChain, Qdrant, FAISS, and OpenAI APIs, enabling interactive document-level Q&A over system logs, technical manuals, Jira tickets, and onboarding records.",
      "Built and deployed internal LLM-based chatbot assistants using FastAPI, custom embeddings, and vector databases (Milvus, Qdrant) with access to internal Confluence pages and engineering APIs.",
      "Created an automated test case generation platform where LLMs parsed structured/unstructured requirements (Word, PDF, Jira) into executable test code using few-shot prompting, spaCy NLP pipelines, and transformer embeddings — achieving 60–70% test coverage automation and aligning with ISO 26262 / ASPICE compliance.",
      "Fine-tuned and distilled LLMs using LoRA, PEFT, and Axolotl, optimizing for resource efficiency with BitsAndBytes quantization and DeepSpeed acceleration; trained models hosted via BentoML for scalable serving across microservices.",
      "Integrated LangChain agents and tool-calling for multi-step reasoning workflows, enabling dynamic retrieval of logs, KPIs, and telemetry from engineering systems for rapid root-cause analysis and diagnostics.",
      "Built scalable ingestion and semantic search pipelines using Databricks, PySpark, and Transformer-based encoders to generate embeddings from large volumes of system documentation and logs.",
      "Standardized code quality and testing across teams using black, pylint, and pytest, ensuring clean, production-ready LLM pipelines and GenAI services.",
      "Developed OpenAI SDK and Hugging Face Transformers-based API wrappers packaged into modular components for integration with existing CI/CD pipelines using GitHub Actions and Docker.",
      "Mentored 2+ engineers on GenAI system architecture, vector DB design, prompt tuning, and fine-tuning workflows, fostering a strong in-house GenAI development culture.",
    ],
    tags: ["LangChain", "LlamaIndex", "RAG", "LoRA", "PEFT", "Axolotl", "BitsAndBytes", "DeepSpeed", "FastAPI", "BentoML", "Qdrant", "FAISS", "Milvus", "Databricks", "PySpark", "Docker", "GitHub Actions"],
    current: false,
  },
  {
    role: "Senior Software Engineer — AI/ML",
    company: "Stellantis",
    location: "Bengaluru, India",
    period: "Jun 2022 — Sep 2023",
    type: "Hybrid",
    highlights: [
      "Developed HVAC Predictive Personalization AI for systems like Heated Steering Wheel, focusing on in-cabin driver comfort by designing an Adaptive Threshold Algorithm tailored per user.",
      "Authored ADA policy frameworks for personalization features — structured system requirements and user behavior into machine-readable formats, later leveraged for training and grounding LLMs in embedded and automotive contexts.",
      "Developed and optimized a Python-based Trip Creation Engine to convert raw ADA signals into structured trip objects; later migrated logic to Snowflake SQL and Databricks SQL to handle scalable analytics across millions of records.",
      "Pioneered PySpark pipelines to process high-volume user behavior data for EDA, feature feasibility studies, and pattern recognition.",
      "Implemented MLOps practices using MLFlow and Hesperides, and evaluated integration opportunities with modern LLM model registries (e.g., BentoML) for future-serving LLM-based personalization.",
      "Deployed traditional ML models (Scikit-learn, XGBoost) to Qualcomm SOC 8295 using ONNX and C++ APIs, an effort that evolved into on-device LLM experimentation via Ollama and quantized transformer models.",
      "Created plugin architecture for Heated Steering Wheel control using Cloudmade AI SDK and Amazon Vera OS, enabling modular integration of AI services.",
      "Applied HDBSCAN/DBSCAN clustering to GPS data for unsupervised personalization and noise reduction.",
      "Performed geospatial data quality validation and automated curation, contributing reusable data integrity checks applied to document preprocessing and knowledge graph preparation in LLM pipelines.",
    ],
    tags: ["PySpark", "ONNX", "C++", "MLFlow", "Scikit-learn", "XGBoost", "Databricks", "Snowflake SQL", "HDBSCAN", "Qualcomm SOC 8295", "Ollama", "BentoML", "Hesperides"],
    current: false,
  },
  {
    role: "Senior Data Analyst",
    company: "The Hanover Company",
    location: "Ahmedabad, India",
    period: "Jun 2020 — Jun 2022",
    type: "On-site",
    highlights: [
      "Developed and implemented an NLP model on Azure to automate ticket classification on SharePoint using topic modelling and tree algorithms.",
      "Created a Microsoft AI solution to streamline data entry by extracting text from invoices.",
      "Initiated and created comprehensive reports from raw data using Power BI to provide insightful analysis and facilitate informed decision-making for senior leadership.",
      "Developed and implemented automated flows to optimize business processes, resulting in increased efficiency and productivity.",
      "Achieved a 200% increase in productivity through effective utilization of resources and implementation of strategic initiatives.",
    ],
    tags: ["Azure", "NLP", "Power BI", "Python", "SQL", "SharePoint"],
    current: false,
  },
  {
    role: "Business Analyst",
    company: "Upgrad Education & Byjus (Think and Learn Pvt Ltd)",
    location: "Mumbai, India",
    period: "Aug 2019 — Jun 2020",
    type: "On-site",
    highlights: [
      "Ensured end-to-end functionality of the Sales Channel.",
      "Identified obstacles in CRM software and proposed solutions to convert prospects into clients.",
      "Led progress tracking and proposed solutions to convert obstacles into potential clients.",
      "Utilized SQL queries to retrieve raw data for analysis.",
      "Performed ETL (Extract, Transform, Load) operations to enhance data quality and accessibility.",
    ],
    tags: ["SQL", "CRM", "ETL", "Data Analysis"],
    current: false,
  },
  {
    role: "Design Engineer — Trainer",
    company: "CADD Center Training and Services Pvt. Ltd",
    location: "Ahmedabad, India",
    period: "Nov 2017 — Jun 2019",
    type: "On-site",
    highlights: [
      "Conducted comprehensive training sessions for clients on industry-leading 3D and 2D CAD software including CATIA V5, Creo, and AutoCAD.",
    ],
    tags: ["CATIA V5", "Creo", "AutoCAD", "Training"],
    current: false,
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
          8+ years across AI/ML, data analytics, CAD training, and business analysis.
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

                  {/* Sectioned layout (e.g. Sentics) */}
                  {exp.sections && (
                    <div className="space-y-4 mb-4">
                      {exp.sections.map((sec, si) => (
                        <div key={si}>
                          <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                            {sec.title}
                          </p>
                          <ul className="space-y-1.5">
                            {sec.points.map((pt, pi) => (
                              <li key={pi} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                                <span className="text-[#818cf8] mt-1.5 text-xs shrink-0">▸</span>
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Flat highlights layout */}
                  {exp.highlights && (
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-[#818cf8] mt-1.5 text-xs shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

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

        {/* Education link */}
        <div className="mt-16 gradient-border p-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">Education &amp; Credentials</p>
            <p className="text-slate-500 text-sm mt-0.5">Degrees, certifications, and languages</p>
          </div>
          <a
            href="/education"
            className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white hover:opacity-90 transition-opacity"
          >
            View →
          </a>
        </div>
      </div>
    </div>
  );
}
