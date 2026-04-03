"use client";

import { useState, useEffect } from "react";

const roles = [
  "Staff Software Engineer — AI/ML",
  "Computer Vision Engineer",
  "LLM Systems Architect",
  "Sensor Fusion Specialist",
  "Edge AI Developer",
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pause"), 2000);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("deleting"), 100);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, roleIndex]);

  return (
    <div className="flex items-center gap-3 min-h-[28px]">
      <div className="h-px w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] shrink-0" />
      <p className="text-xl text-slate-300 font-medium">
        {displayed}
        <span className="inline-block w-0.5 h-5 bg-[#818cf8] ml-0.5 align-middle animate-pulse" />
      </p>
    </div>
  );
}
