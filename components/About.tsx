import AnimatedStats from "@/components/AnimatedStats";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
          <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
            About
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Building AI that works
              <br />
              <span className="gradient-text">in the real world</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Software Engineer with 8+ years of experience turning research-grade AI
                into production systems that run at the edge. My journey started in automotive
                engineering, evolved through data analytics, and landed deep in the world of
                computer vision, sensor fusion, and large language models.
              </p>
              <p>
                At <span className="text-slate-200">Sentics</span>, I architect real-time
                multi-camera perception systems for warehouse safety — combining NVIDIA DeepStream,
                TensorRT, Kalman Filtering, and LLMs into one cohesive stack that makes decisions
                in milliseconds.
              </p>
              <p>
                Previously at <span className="text-slate-200">Stellantis</span>, I led GenAI
                adoption across engineering teams — building RAG pipelines, fine-tuning LLMs with
                LoRA/PEFT, and deploying on-device AI to automotive-grade hardware.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-slate-300 text-sm">
                Based in Wolfsburg, Germany · Open to remote &amp; hybrid roles
              </span>
            </div>
          </div>

          {/* Stats — animated counters */}
          <AnimatedStats />
        </div>
      </div>
    </section>
  );
}
