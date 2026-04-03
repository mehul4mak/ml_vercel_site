import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Mehul Kumawat",
  description: "ML and AI projects by Mehul Kumawat",
};

const projects = [
  {
    title: "MNIST Digit Recognition",
    description: "CNN-based handwritten digit classification with live drawing canvas and image upload. Deployed as an interactive web demo.",
    tags: ["CNN", "Python", "ONNX", "React Native"],
    status: "live",
    demo: "/projects/mnist",
  },
  {
    title: "Multi-Camera Sensor Fusion",
    description: "Real-time perception pipeline using NVIDIA DeepStream, Kalman/EKF tracking, and cross-camera identity association for warehouse safety.",
    tags: ["DeepStream", "C++", "TensorRT", "Kalman Filter"],
    status: "coming-soon",
  },
  {
    title: "Pedestrian Detection — YOLOv4",
    description: "Real-time pedestrian and vehicle detection for AGV safety zones using YOLOv4 optimized with TensorRT on edge hardware.",
    tags: ["YOLOv4", "TensorRT", "OpenCV", "C++"],
    status: "coming-soon",
  },
  {
    title: "LLM-Powered RAG Pipeline",
    description: "Document-level Q&A over system logs, manuals, and Jira tickets using LlamaIndex, LangChain, and Qdrant vector database.",
    tags: ["LangChain", "LlamaIndex", "Qdrant", "FastAPI"],
    status: "coming-soon",
  },
  {
    title: "Barcode & License Plate Recognition",
    description: "High-resolution PTZ camera pipeline for automated pallet identification with VLM-assisted OCR and LLM validation agents.",
    tags: ["VLMs", "OCR", "TensorRT", "LLMs"],
    status: "coming-soon",
  },
  {
    title: "Gesture Recognition",
    description: "RNN+CNN and 3D CNN models to identify 5 gestures from image frames. Achieved 96% validation accuracy with Transfer Learning.",
    tags: ["RNN", "CNN", "3D CNN", "PyTorch"],
    status: "coming-soon",
  },
  {
    title: "Melanoma Detection",
    description: "CNN-based skin cancer classification model distinguishing melanoma from benign lesions using image preprocessing and augmentation.",
    tags: ["CNN", "Medical Imaging", "PyTorch"],
    status: "coming-soon",
  },
  {
    title: "LLM Fine-Tuning Pipeline",
    description: "Production pipeline for fine-tuning and distilling LLMs using LoRA, PEFT, and Axolotl with BitsAndBytes quantization.",
    tags: ["LoRA", "PEFT", "Axolotl", "DeepSpeed"],
    status: "coming-soon",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
          <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
            Projects
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Things I&apos;ve Built
        </h1>
        <p className="text-slate-500 mb-12 max-w-lg">
          Production systems, research experiments, and interactive demos — mostly in the AI/ML space.
        </p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.title} className="gradient-border p-6 flex flex-col gap-4 group">
              {/* Status */}
              <div className="flex items-center justify-between">
                {project.status === "live" ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Demo
                  </span>
                ) : (
                  <span className="text-xs text-slate-600 font-medium">Coming Soon</span>
                )}
              </div>

              {/* Title & description */}
              <div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#818cf8] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/[0.08] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {project.demo && (
                <a
                  href={project.demo}
                  className="mt-1 text-sm text-[#818cf8] hover:text-[#22d3ee] transition-colors duration-200 flex items-center gap-1 font-medium"
                >
                  View Demo
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
