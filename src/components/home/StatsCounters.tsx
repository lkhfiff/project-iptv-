"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

interface CounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, decimals = 0, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("fr-FR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function StatsCounters() {
  const stats = [
    {
      value: 28500,
      suffix: "+",
      label: "Chaînes Directes 4K/FHD",
      sublabel: "France, UK, USA, Monde Arabe, Europe",
      icon: "ph:television-bold",
      accent: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      value: 135000,
      suffix: "+",
      label: "Films & Séries VOD",
      sublabel: "Mise à jour quotidienne en 4K HDR",
      icon: "ph:film-slate-bold",
      accent: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      value: 99.9,
      decimals: 1,
      suffix: "%",
      label: "Disponibilité Uptime Serveurs",
      sublabel: "Anti-Freeze™ 9.9 avec 18 centres CDN",
      icon: "ph:shield-check-bold",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      value: 48000,
      suffix: "+",
      label: "Abonnés Actifs & Satisfaits",
      sublabel: "Note moyenne de 4.9/5 sur WhatsApp & Trust",
      icon: "ph:users-three-bold",
      accent: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/40"
            >
              <div className="flex items-center justify-between pb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.bg} ${stat.accent}`}>
                  <Icon icon={stat.icon} width={24} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  METRIC 0{idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-sky-400 transition-colors">
                  <Counter
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm font-bold text-zinc-200">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 pt-1 leading-relaxed">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
