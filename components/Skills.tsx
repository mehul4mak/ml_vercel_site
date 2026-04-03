const skillGroups = [
  {
    category: "Computer Vision & Perception",
    color: "from-violet-500/20 to-purple-500/20 border-violet-500/20",
    tagColor: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    skills: ["OpenCV", "NVIDIA DeepStream", "TensorRT", "ONNX Runtime", "YOLOv4/v8", "Siamese Networks", "FPN Networks", "ArUco Markers"],
  },
  {
    category: "Sensor Fusion & Robotics",
    color: "from-cyan-500/20 to-teal-500/20 border-cyan-500/20",
    tagColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    skills: ["Kalman Filter", "Extended Kalman Filter", "IMU Calibration", "LiDAR/Radar", "MQTT", "Kafka", "Point-in-Polygon", "Grid Occupancy Mapping"],
  },
  {
    category: "LLMs & GenAI",
    color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/20",
    tagColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    skills: ["LangChain", "LlamaIndex", "RAG Pipelines", "LoRA / PEFT", "Axolotl", "Ollama", "FAISS", "Qdrant", "BentoML", "GPT-4", "LLaMA2"],
  },
  {
    category: "MLOps & Infrastructure",
    color: "from-emerald-500/20 to-green-500/20 border-emerald-500/20",
    tagColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    skills: ["Docker", "Kubernetes", "MLFlow", "GitHub Actions", "DeepSpeed", "Databricks", "PySpark", "FastAPI", "CI/CD"],
  },
  {
    category: "Languages & Frameworks",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/20",
    tagColor: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    skills: ["Python", "C++", "TypeScript", "SQL", "Snowflake SQL", "PyTorch", "Scikit-learn", "XGBoost", "spaCy"],
  },
  {
    category: "Cloud & Data",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/20",
    tagColor: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    skills: ["Azure", "AWS", "Power BI", "Kafka Streams", "Milvus", "Vector Databases", "Hugging Face", "BitsAndBytes"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
          <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
            Skills
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Technical Expertise
        </h2>
        <p className="text-slate-500 mb-12 max-w-lg">
          A deep stack spanning edge AI, sensor fusion, and large language models.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`gradient-border p-5 bg-gradient-to-br ${group.color} border`}
            >
              <h3 className="text-sm font-semibold text-white mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border ${group.tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
