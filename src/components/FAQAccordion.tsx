"use client";

import React, { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { FAQ_ITEMS } from "@/data/faqs";
import { WhatsAppButton } from "./WhatsAppButton";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Setup & Delivery", "Quality & Anti-Freeze", "Channels & Sports", "Ordering & Support"];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Icon
            icon="ph:magnifying-glass-bold"
            width={15}
            className="text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all border ${
                isOpen
                  ? "bg-white/[0.04] border-orange-500/30 shadow-lg"
                  : "bg-white/[0.02] border-white/5 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-orange-400">
                    {faq.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-orange-500/20 text-orange-400" : ""
                  }`}
                >
                  <Icon icon="ph:caret-down-bold" width={14} />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
