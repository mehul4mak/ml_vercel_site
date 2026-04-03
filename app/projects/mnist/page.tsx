"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

const CANVAS_SIZE = 280;

type Tab = "upload" | "draw";

export default function MnistPage() {
  const [tab, setTab] = useState<Tab>("upload");

  // Upload state
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Draw state
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [hasDrawing, setHasDrawing] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  // Init canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, []);

  // --- Upload handlers ---
  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  // --- Canvas draw handlers ---
  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_SIZE / rect.width;
    const scaleY = CANVAS_SIZE / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setDrawing(true);
    setHasDrawing(true);
    lastPos.current = getPos(e);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!drawing) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const pos = getPos(e);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    if (lastPos.current) ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
  };

  const stopDraw = () => {
    setDrawing(false);
    lastPos.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    setHasDrawing(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-xl mx-auto">
        {/* Back */}
        <Link
          href="/projects/mnist"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-10 transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Project Details
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
          <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">Demo</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">MNIST Digit Recognition</h1>
        <p className="text-slate-500 mb-8">Upload an image or draw a digit to classify it.</p>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07] w-fit mb-8">
          {(["upload", "draw"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                tab === t
                  ? "bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t === "upload" ? "Upload Image" : "Draw Digit"}
            </button>
          ))}
        </div>

        {/* Upload tab */}
        {tab === "upload" && (
          <div className="space-y-4">
            <div
              className="gradient-border p-8 text-center cursor-pointer hover:bg-white/[0.02] transition-colors"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileRef.current?.click()}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Uploaded digit"
                  className="mx-auto max-h-52 object-contain rounded-lg"
                />
              ) : (
                <div className="py-8">
                  <svg className="w-12 h-12 mx-auto mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-slate-400 text-sm mb-1">Drag &amp; drop or click to upload</p>
                  <p className="text-slate-600 text-xs">PNG, JPG — white digit on dark background works best</p>
                </div>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
            </div>

            {preview && (
              <div className="flex gap-3">
                <button
                  onClick={() => setPreview(null)}
                  className="flex-1 py-2.5 rounded-lg border border-white/10 text-slate-400 text-sm font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  Clear
                </button>
                <button
                  disabled
                  className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white text-sm font-semibold opacity-40 cursor-not-allowed"
                  title="Backend inference coming soon"
                >
                  Classify — Backend Coming Soon
                </button>
              </div>
            )}
          </div>
        )}

        {/* Draw tab */}
        {tab === "draw" && (
          <div className="space-y-4">
            <div className="gradient-border p-3">
              <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                className="w-full rounded-lg cursor-crosshair touch-none"
                style={{ imageRendering: "pixelated", background: "#000" }}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={stopDraw}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={clearCanvas}
                className="flex-1 py-2.5 rounded-lg border border-white/10 text-slate-400 text-sm font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                Clear
              </button>
              <button
                disabled
                className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-white text-sm font-semibold opacity-40 cursor-not-allowed"
                title="Backend inference coming soon"
              >
                Classify — Backend Coming Soon
              </button>
            </div>

            <p className="text-slate-600 text-xs text-center">
              Draw clearly in the center · inference will connect to hosted backend
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
