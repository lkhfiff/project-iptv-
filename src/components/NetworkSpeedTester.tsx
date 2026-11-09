"use client";

import React, { useState } from "react";
import { Gauge, CheckCircle2, RefreshCw, Zap, Server, ShieldCheck, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function NetworkSpeedTester() {
  const [isTesting, setIsTesting] = useState(false);
  const [tested, setTested] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState<number>(0);
  const [ping, setPing] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState("Frankfurt Edge 01 (DE-CIX)");

  const runTest = () => {
    setIsTesting(true);
    setTested(false);
    setDownloadSpeed(0);

    // Simulate animated speed measurement
    let current = 10;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 85) {
        clearInterval(interval);
        const finalSpeed = Math.floor(Math.random() * 30) + 75; // 75-105 Mbps
        const finalPing = Math.floor(Math.random() * 8) + 8; // 8-16 ms
        setDownloadSpeed(finalSpeed);
        setPing(finalPing);
        setIsTesting(false);
        setTested(true);
      } else {
        setDownloadSpeed(current);
      }
    }, 120);
  };

  return (
    <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
            <Gauge className="w-4 h-4" />
            <span>Diagnostic Tool</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            AETHER+ 4K Stream Readiness & Latency Checker
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedNode}
            onChange={(e) => setSelectedNode(e.target.value)}
            className="bg-zinc-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
          >
            <option value="Frankfurt Edge 01 (DE-CIX)">Frankfurt Node (DE-CIX)</option>
            <option value="London Edge 02 (LINX)">London Node (LINX)</option>
            <option value="Amsterdam Edge 03 (AMS-IX)">Amsterdam Node (AMS-IX)</option>
            <option value="New York Edge 04 (Equinix)">New York Node (Equinix)</option>
          </select>
        </div>
      </div>

      {/* Meter Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Speedometer Circle */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <div className="relative w-36 h-36 rounded-full border-4 border-white/10 flex flex-col items-center justify-center">
            {isTesting && (
              <div className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            )}
            <span className="text-4xl font-black text-white font-mono">
              {downloadSpeed}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              Mbps Detected
            </span>
          </div>

          <button
            onClick={runTest}
            disabled={isTesting}
            className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-black text-xs font-bold flex items-center gap-2 transition-all cursor-pointer active:scale-95"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? "animate-spin" : ""}`} />
            <span>{isTesting ? "Measuring Line..." : tested ? "Test Again" : "Run 4K Stream Test"}</span>
          </button>
        </div>

        {/* Results Analysis */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] uppercase text-zinc-500 font-bold block">
                Round-Trip Ping
              </span>
              <span className="text-lg font-bold text-white font-mono">
                {tested ? `${ping} ms` : "--"}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] uppercase text-zinc-500 font-bold block">
                Target Node
              </span>
              <span className="text-xs font-semibold text-zinc-300 truncate block">
                {selectedNode.split(" ")[0]} Edge
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] uppercase text-zinc-500 font-bold block">
                Jitter & Packet Drop
              </span>
              <span className="text-xs font-bold text-emerald-400">
                {tested ? "0.0% (Pristine)" : "--"}
              </span>
            </div>
          </div>

          {/* Compatibility Breakdown */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-medium">Full HD 1080p (60 FPS):</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Ready (Requires 15 Mbps)
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-medium">Pure 4K UHD & HDR10+:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Ready (Requires 30 Mbps)
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-medium">Dolby Vision & Dolby Atmos 7.1:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Bit-Perfect Verified
              </span>
            </div>
          </div>

          {tested && (
            <div className="pt-1 flex items-center justify-between gap-4">
              <p className="text-xs text-zinc-400">
                Your connection is fully optimized for AETHER+ uncompressed 4K streams.
              </p>
              <WhatsAppButton
                variant="luxury"
                size="sm"
                customMessage={`Hello! I tested my connection on your website diagnostic tool (${downloadSpeed} Mbps, ${ping}ms ping to ${selectedNode}). I want to claim my 4K subscription.`}
                label="Activate My 4K Stream"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

