"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitElementWords(el: HTMLElement): () => void {
  if (el.dataset.splitDone === "true") {
    return () => {};
  }

  const originalHtml = el.innerHTML;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (node.nodeValue && node.nodeValue.trim().length > 0) {
      textNodes.push(node as Text);
    }
  }

  textNodes.forEach((textNode) => {
    const value = textNode.nodeValue || "";
    const fragment = document.createDocumentFragment();
    const parts = value.split(/(\s+)/);

    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
      } else {
        const mask = document.createElement("span");
        mask.className = "split-mask";
        const word = document.createElement("span");
        word.className = "split-word";
        word.textContent = part;
        mask.appendChild(word);
        fragment.appendChild(mask);
      }
    });

    textNode.parentNode?.replaceChild(fragment, textNode);
  });

  el.dataset.splitDone = "true";

  return () => {
    el.innerHTML = originalHtml;
    delete el.dataset.splitDone;
  };
}

function parseCounterFormat(el: HTMLElement) {
  const target = parseFloat(el.dataset.target || "0");
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const decimalSep = el.dataset.decimalSep || ".";
  const thousandSep = el.dataset.thousandSep ?? " ";
  return { target, decimals, decimalSep, thousandSep };
}

function formatCounterValue(
  value: number,
  decimals: number,
  decimalSep: string,
  thousandSep: string
): string {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const groupedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSep);
  return decimals > 0 ? `${groupedInt}${decimalSep}${decPart}` : groupedInt;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const titleRestoreCallbacks: Array<() => void> = [];
    const mm = gsap.matchMedia();

    const setupSiteAnimations = (isDesktop: boolean) => {
      // 1. Top 2px Scroll Progress Bar
      const progressBar = document.querySelector<HTMLElement>("[data-scroll-progress]");
      if (progressBar) {
        gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center", willChange: "transform" });
        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: () => ScrollTrigger.maxScroll(window) || 1,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }


      // 3. Bento Cards Reveal + Icon Pop + Text Stagger
      const bentoCards = gsap.utils.toArray<HTMLElement>('[data-animate="bento-card"]');
      if (bentoCards.length > 0) {
        gsap.set(bentoCards, { opacity: 0, y: 40, scale: 0.96, willChange: "transform, opacity" });
        bentoCards.forEach((card) => {
          const icon = card.querySelector<HTMLElement>('[data-animate="bento-icon"]');
          const texts = card.querySelectorAll<HTMLElement>('[data-animate="bento-text"]');
          if (icon) gsap.set(icon, { scale: 0.6, opacity: 0, willChange: "transform, opacity" });
          if (texts.length) gsap.set(texts, { y: 16, opacity: 0, willChange: "transform, opacity" });
        });

        ScrollTrigger.batch(bentoCards, {
          start: "top 85%",
          once: true,
          onEnter: (batch) => {
            batch.forEach((el, idx) => {
              const card = el as HTMLElement;
              const delay = idx * 0.1;
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay,
                ease: "power3.out",
                clearProps: "transform,willChange",
              });

              const icon = card.querySelector<HTMLElement>('[data-animate="bento-icon"]');
              if (icon) {
                gsap.to(icon, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.4,
                  delay: delay + 0.15,
                  ease: "back.out(1.7)",
                  clearProps: "transform,willChange",
                });
              }

              const texts = card.querySelectorAll<HTMLElement>('[data-animate="bento-text"]');
              if (texts.length) {
                gsap.to(texts, {
                  y: 0,
                  opacity: 1,
                  duration: 0.45,
                  stagger: 0.06,
                  delay: delay + 0.18,
                  ease: "power2.out",
                  clearProps: "transform,willChange",
                });
              }
            });
          },
        });
      }

      // 4. Portrait Photo Parallax + Slow Zoom (desktop only)
      if (isDesktop) {
        document.querySelectorAll<HTMLElement>('[data-animate="parallax-photo"]').forEach((imgEl) => {
          gsap.fromTo(
            imgEl,
            { y: -20, scale: 1.05, willChange: "transform" },
            {
              y: 20,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: imgEl.closest('[data-animate="bento-card"]') || imgEl,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }

      // 5. Section Titles Masked Word Reveal (700ms, 60ms stagger)
      document.querySelectorAll<HTMLElement>('[data-animate="title"]').forEach((titleEl) => {
        const restore = splitElementWords(titleEl);
        titleRestoreCallbacks.push(restore);

        const words = titleEl.querySelectorAll<HTMLElement>(".split-word");
        if (words.length === 0) return;

        gsap.set(words, { yPercent: 110, opacity: 0, willChange: "transform, opacity" });
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "transform,willChange",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 88%",
            once: true,
          },
        });
      });

      // 6. Sections Below Hero Fade + Slide Up (40px, once, top 85%)
      document.querySelectorAll<HTMLElement>('[data-animate="section"]').forEach((secEl) => {
        gsap.fromTo(
          secEl,
          { opacity: 0, y: 40, willChange: "transform, opacity" },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,willChange",
            scrollTrigger: {
              trigger: secEl,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // 7. Stats / Numbers Count-Up
      document.querySelectorAll<HTMLElement>('[data-animate="counter"]').forEach((counterEl) => {
        const { target, decimals, decimalSep, thousandSep } = parseCounterFormat(counterEl);
        const state = { value: 0 };

        ScrollTrigger.create({
          trigger: counterEl,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(state, {
              value: target,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                counterEl.textContent = formatCounterValue(
                  state.value,
                  decimals,
                  decimalSep,
                  thousandSep
                );
              },
              onComplete: () => {
                counterEl.textContent = formatCounterValue(
                  target,
                  decimals,
                  decimalSep,
                  thousandSep
                );
              },
            });
          },
        });
      });

      // 8. Pricing Cards Stagger + Recommended Card Scale Pop (1.03)
      document.querySelectorAll<HTMLElement>('[data-animate="pricing-grid"]').forEach((gridEl) => {
        const cards = gridEl.querySelectorAll<HTMLElement>('[data-animate="pricing-card"]');
        const recommended = gridEl.querySelector<HTMLElement>('[data-pricing-recommended="true"]');
        if (cards.length === 0) return;

        gsap.set(cards, { opacity: 0, y: 40, willChange: "transform, opacity" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: gridEl,
            start: "top 85%",
            once: true,
          },
        });

        tl.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          onComplete: () => {
            cards.forEach((c) => {
              if (c.dataset.pricingRecommended !== "true") {
                gsap.set(c, { clearProps: "transform,willChange" });
              }
            });
          },
        });

        if (recommended) {
          tl.to(
            recommended,
            {
              scale: 1.03,
              duration: 0.4,
              ease: "back.out(1.6)",
              clearProps: "willChange",
            },
            "+=0.05"
          );
        }
      });

      // 9. Footer Fade-In Reveal
      document.querySelectorAll<HTMLElement>('[data-animate="footer"]').forEach((footerEl) => {
        gsap.fromTo(
          footerEl,
          { opacity: 0, y: 24, willChange: "transform, opacity" },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,willChange",
            scrollTrigger: {
              trigger: footerEl,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    };

    mm.add("(prefers-reduced-motion: reduce)", () => {
      return () => {};
    });

    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      setupSiteAnimations(true);
      return () => {
        titleRestoreCallbacks.splice(0).forEach((fn) => fn());
      };
    });

    mm.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      setupSiteAnimations(false);
      return () => {
        titleRestoreCallbacks.splice(0).forEach((fn) => fn());
      };
    });

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const handleRefresh = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleRefresh);
    const images = Array.from(document.querySelectorAll("img"));
    const pendingImages = images.filter((img) => !img.complete);
    pendingImages.forEach((img) => {
      img.addEventListener("load", handleRefresh, { once: true });
      img.addEventListener("error", handleRefresh, { once: true });
    });

    const initialRefreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(initialRefreshId);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleRefresh);
      pendingImages.forEach((img) => {
        img.removeEventListener("load", handleRefresh);
        img.removeEventListener("error", handleRefresh);
      });
      titleRestoreCallbacks.splice(0).forEach((fn) => fn());
      mm.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
