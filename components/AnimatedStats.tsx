"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 8, suffix: "+", label: "Years Experience" },
  { target: 5, suffix: "", label: "Companies" },
  { target: 2, suffix: "", label: "Countries" },
  { target: 10, suffix: "+", label: "ML Projects" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(target, 1200, active);
  return (
    <div className="gradient-border p-6 text-center">
      <p className="text-4xl font-bold gradient-text mb-1">
        {count}{suffix}
      </p>
      <p className="text-slate-500 text-sm">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} active={active} />
      ))}
    </div>
  );
}
