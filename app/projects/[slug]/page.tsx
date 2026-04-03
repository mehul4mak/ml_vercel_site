import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "mnist",
    title: "MNIST Digit Recognition",
    subtitle: "CNN-based handwritten digit classifier with live interactive demos",
    status: "live",
    tags: ["CNN", "Python", "ONNX", "TensorFlow.js", "Next.js"],
    overview:
      "A convolutional neural network trained on the MNIST dataset to classify handwritten digits (0–9). The model achieves >99% accuracy on the test set and is deployed as an interactive web demo with two modes: upload an image or draw directly in the browser.",
    highlights: [
      "CNN architecture with Conv2D, MaxPooling, Dropout, and Dense layers",
      "Trained in Python (TensorFlow/Keras), exported to ONNX and TF.js format",
      "Sub-50ms inference per digit in the browser via TensorFlow.js",
      "Image preprocessing: grayscale conversion, 28×28 resize, normalization",
      "Two demo modes: image upload and freehand canvas drawing",
    ],
    demos: [
      { label: "Try the Demo", href: "/projects/mnist" },
    ],
    techStack: ["Python", "TensorFlow / Keras", "ONNX", "TensorFlow.js", "Next.js", "Canvas API"],
  },
  {
    slug: "sensor-fusion",
    title: "Multi-Camera Sensor Fusion",
    subtitle: "Real-time perception pipeline for warehouse safety at Sentics",
    status: "production",
    tags: ["DeepStream", "C++", "TensorRT", "Kalman Filter", "EKF", "IMU"],
    overview:
      "A production-grade multi-camera perception system built at Sentics GmbH. Combines NVIDIA DeepStream, TensorRT-optimized models, and Kalman/EKF tracking to detect and track vehicles, AGVs, pedestrians, and safety vests across multiple cameras in real-time warehouse environments.",
    highlights: [
      "Multi-camera NVIDIA DeepStream pipeline for detection and tracking",
      "Cross-camera fusion using Kalman Filter / EKF with IMU integration",
      "Camera-IMU calibration for improved spatial alignment accuracy",
      "Point-in-Polygon braking logic for warehouse zone enforcement",
      "~10% improvement in detection precision and several-second improvement in braking response",
      "~30% throughput improvement via DeepStream optimization and multi-GPU utilization",
    ],
    demos: [],
    techStack: ["NVIDIA DeepStream", "TensorRT", "C++", "OpenCV", "Kalman Filter / EKF", "IMU", "MQTT", "Kafka"],
  },
  {
    slug: "rag-pipeline",
    title: "LLM-Powered RAG Pipeline",
    subtitle: "Document Q&A over engineering knowledge bases at Stellantis",
    status: "production",
    tags: ["LangChain", "LlamaIndex", "Qdrant", "FastAPI", "RAG"],
    overview:
      "A Retrieval-Augmented Generation (RAG) system built at Stellantis to enable interactive document-level Q&A over system logs, technical manuals, Jira tickets, and onboarding records. Reduced manual documentation effort by 60% and accelerated engineering team onboarding.",
    highlights: [
      "RAG pipelines using LlamaIndex, LangChain, Qdrant, FAISS, and OpenAI APIs",
      "LLM-based chatbot assistants with FastAPI, Milvus, and Qdrant vector databases",
      "Semantic search over Confluence pages and internal engineering APIs",
      "Automated test case generation achieving 60–70% test coverage automation",
      "ISO 26262 / ASPICE compliant test automation using few-shot prompting and spaCy",
      "LangChain agents for multi-step reasoning, log retrieval, and root-cause analysis",
    ],
    demos: [],
    techStack: ["LangChain", "LlamaIndex", "Qdrant", "FAISS", "Milvus", "FastAPI", "OpenAI API", "spaCy", "PySpark", "Databricks"],
  },
  {
    slug: "barcode-recognition",
    title: "Barcode & License Plate Recognition",
    subtitle: "VLM-assisted visual intelligence for warehouse pallet identification",
    status: "production",
    tags: ["VLMs", "OCR", "TensorRT", "LLMs", "PTZ Camera"],
    overview:
      "A high-resolution PTZ camera pipeline for automated pallet identification at Sentics. Uses edge TensorRT inference combined with Vision-Language Models (VLMs) and LLM validation agents to achieve robust barcode and license plate recognition under challenging warehouse conditions.",
    highlights: [
      "High-res PTZ camera pipeline for barcode and license plate detection",
      "Sub-5-second pallet identification in operational warehouse environments",
      "VLM and LLM-assisted post-processing for robust OCR in challenging lighting",
      "LLM validation agent cross-verifying visual outputs against backend warehouse records",
      "Edge inference (TensorRT C++) combined with cloud-hosted LLM reasoning",
      "Semantic error correction beyond traditional OCR heuristics",
    ],
    demos: [],
    techStack: ["TensorRT", "C++", "VLMs", "LLMs", "OCR", "PTZ Camera", "MQTT"],
  },
  {
    slug: "gesture-recognition",
    title: "Gesture Recognition",
    subtitle: "RNN+CNN and 3D CNN models for 5-class gesture classification",
    status: "completed",
    tags: ["RNN", "CNN", "3D CNN", "PyTorch", "Transfer Learning"],
    overview:
      "Deep learning models trained to identify 5 different gestures from video frame sequences. Experimented with RNN+CNN architectures and 3D CNN models, and applied Transfer Learning with GRU and LSTM variants. Achieved 96% validation accuracy.",
    highlights: [
      "Developed RNN+CNN model combining temporal and spatial feature extraction",
      "Built 3D CNN model to capture spatiotemporal patterns across frames",
      "Applied Transfer Learning with GRU and LSTM variants for comparison",
      "Conducted architecture search across multiple model configurations",
      "Final validation accuracy: 96%",
    ],
    demos: [],
    techStack: ["Python", "TensorFlow / Keras", "RNN", "CNN", "3D CNN", "LSTM", "GRU"],
  },
  {
    slug: "melanoma-detection",
    title: "Melanoma Detection",
    subtitle: "CNN-based skin cancer classification from dermatoscopic images",
    status: "completed",
    tags: ["CNN", "Medical Imaging", "PyTorch", "Image Augmentation"],
    overview:
      "A convolutional neural network trained to classify skin cancer images as melanoma or benign. Used image preprocessing, augmentation techniques, and hyperparameter tuning to improve model robustness on a large medical imaging dataset.",
    highlights: [
      "CNN architecture for binary melanoma vs. benign classification",
      "Image preprocessing pipeline: resizing, normalization, augmentation",
      "Hyperparameter search across learning rates, batch sizes, and architectures",
      "Achieved 60% test accuracy (baseline model, further tuning scope identified)",
      "Contributes to accessible AI-assisted early skin cancer screening",
    ],
    demos: [],
    techStack: ["Python", "TensorFlow / Keras", "OpenCV", "NumPy", "Matplotlib"],
  },
  {
    slug: "llm-finetuning",
    title: "LLM Fine-Tuning Pipeline",
    subtitle: "Production pipeline for LoRA/PEFT fine-tuning with quantization",
    status: "production",
    tags: ["LoRA", "PEFT", "Axolotl", "DeepSpeed", "BitsAndBytes"],
    overview:
      "A production fine-tuning and distillation pipeline built at Stellantis for adapting large language models (GPT-4 class, LLaMA2, Falcon) to automotive engineering domains. Uses parameter-efficient methods for resource-constrained deployment.",
    highlights: [
      "Fine-tuning with LoRA, PEFT, and Axolotl for parameter-efficient adaptation",
      "BitsAndBytes quantization (4-bit/8-bit) for reduced memory footprint",
      "DeepSpeed acceleration for multi-GPU training efficiency",
      "BentoML serving for scalable model deployment across microservices",
      "On-prem deployment via Ollama for secure edge execution",
      "Domain adaptation for automotive engineering documentation and diagnostics",
    ],
    demos: [],
    techStack: ["LoRA", "PEFT", "Axolotl", "BitsAndBytes", "DeepSpeed", "BentoML", "Ollama", "Hugging Face Transformers"],
  },
  {
    slug: "pedestrian-detection",
    title: "Pedestrian Detection — YOLOv4",
    subtitle: "Real-time pedestrian and vehicle detection for AGV safety zones",
    status: "production",
    tags: ["YOLOv4", "TensorRT", "OpenCV", "C++"],
    overview:
      "Real-time pedestrian and vehicle detection system optimized for AGV (Automated Guided Vehicle) safety zone enforcement in warehouse environments. YOLOv4 optimized with TensorRT for edge deployment on constrained hardware.",
    highlights: [
      "YOLOv4 fine-tuned for pedestrian, vehicle, and AGV detection",
      "TensorRT optimization for edge hardware deployment",
      "Real-time inference for AGV safety zone enforcement",
      "C++ integration with existing perception stack",
      "Integrated into multi-camera DeepStream pipeline at Sentics",
    ],
    demos: [],
    techStack: ["YOLOv4", "TensorRT", "OpenCV", "C++", "CUDA", "NVIDIA DeepStream"],
  },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mehul Kumawat`,
    description: project.subtitle,
  };
}

const statusConfig = {
  live: { label: "Live Demo", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", dot: true },
  production: { label: "Production", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", dot: false },
  completed: { label: "Completed", color: "text-slate-400", bg: "bg-white/5", border: "border-white/10", dot: false },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sc = statusConfig[project.status as keyof typeof statusConfig];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-10 transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${sc.bg} ${sc.border} ${sc.color}`}>
              {sc.dot && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
              {sc.label}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h1>
          <p className="text-slate-400 text-lg">{project.subtitle}</p>
        </div>

        {/* Demo buttons */}
        {project.demos.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {project.demos.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {d.label} →
              </Link>
            ))}
          </div>
        )}

        {/* Overview */}
        <div className="gradient-border p-6 mb-6">
          <h2 className="text-white font-semibold mb-3">Overview</h2>
          <p className="text-slate-400 text-sm leading-relaxed">{project.overview}</p>
        </div>

        {/* Highlights */}
        <div className="gradient-border p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                <span className="text-[#818cf8] mt-1.5 text-xs shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="gradient-border p-6">
          <h2 className="text-white font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/[0.08] text-slate-300 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded text-xs bg-white/[0.03] border border-white/[0.06] text-slate-500">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
