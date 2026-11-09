"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Search } from "lucide-react";
import { FAQ_ITEMS, FAQItem } from "@/data/faqs";
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-orange-500 text-black font-bold shadow-md shadow-orange-500/20"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
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
                  className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-orange-500/20 text-orange-400" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
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

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 space-y-3">
            <p className="text-zinc-400 text-sm">No matching questions found.</p>
            <WhatsAppButton
              variant="outline"
              size="sm"
              label="Ask Us on WhatsApp Directly"
              customMessage="Hello! I have a question regarding AETHER+ IPTV service that wasn't covered in the FAQ."
            />
          </div>
        )}
      </div>

      {/* Still have questions prompt */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-white">Have a specific device or questions?</h4>
          <p className="text-xs text-zinc-400">
            Our IPTV engineers are available 24/7 on WhatsApp to test your connection and guide setup.
          </p>
        </div>
        <WhatsAppButton
          variant="pill"
          size="md"
          label="Chat with Support"
          customMessage="Hello! I have a question regarding setup and device compatibility with AETHER+ IPTV."
        />
      </div>
    </div>
  );
}

