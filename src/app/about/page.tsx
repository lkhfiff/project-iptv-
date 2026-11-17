"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateDirectContactUrl } from "@/data/config";
import { StatisticsTimeline } from "@/components/about/StatisticsTimeline";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "tech" | "comparison">("mission");

  const cdnNodes = [
    { city: "Frankfurt, Germany (DE-CIX)", latency: "4ms", load: "28%", status: "Optimal" },
    { city: "London, UK (LINX 1/2)", latency: "6ms", load: "34%", status: "Optimal" },
    { city: "Amsterdam, Netherlands (AMS-IX)", latency: "5ms", load: "31%", status: "Optimal" },
    { city: "Paris, France (France-IX)", latency: "8ms", load: "22%", status: "Optimal" },
    { city: "New York, USA (Equinix NY4)", latency: "12ms", load: "39%", status: "Optimal" },
    { city: "Dallas, USA (Infomart)", latency: "16ms", load: "25%", status: "Optimal" },
    { city: "Dubai, UAE (SmartHub)", latency: "21ms", load: "30%", status: "Optimal" },
  ];

  const milestones = [
    {
      value: "28 500+",
      label: "Chaînes Internationales",
      sublabel: "Direct 4K UHD & 60 FPS",
      icon: "ph:television-simple",
    },
    {
      value: "135 000+",
      label: "Films & Séries VOD",
      sublabel: "Master 4K HDR & Dolby Audio",
      icon: "ph:film-strip",
    },
    {
      value: "99.99%",
      label: "Disponibilité Réseau (SLA)",
      sublabel: "Garantie Anti-Freeze™ 9.9",
      icon: "ph:shield-check",
    },
    {
      value: "18",
      label: "Data Centers Privés",
      sublabel: "Interconnexion 10 Gbps directe",
      icon: "ph:hard-drives",
    },
    {
      value: "< 15ms",
      label: "Latence Moyenne",
      sublabel: "Streaming instantané sans buffer",
      icon: "ph:lightning",
    },
    {
      value: "45 000+",
      label: "Membres VIP Actifs",
      sublabel: "France, Europe & Monde",
      icon: "ph:users-three",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Infrastructure CDN Dédiée 10 Gbps",
      desc: "Contrairement aux serveurs mutualisés saturés lors des soirs de Ligue des Champions, NOUDINE déploie un réseau CDN privé sans congestion avec bande passante garantie.",
      icon: "ph:hard-drives",
      badge: "Zéro Goulot d'Étranglement",
    },
    {
      number: "02",
      title: "Moteur Anti-Freeze™ 9.9 & HEVC H.265",
      desc: "Un algorithme d'analyse prédictive compresse intelligemment les trames 4K en temps réel. Consommez 50% de bande passante en moins tout en conservant une image cristalline.",
      icon: "ph:cpu",
      badge: "Algorithme Prédictif",
    },
    {
      number: "03",
      title: "Chiffrement SSL 256-Bit & Zéro-Log",
      desc: "Tous vos flux transitent sous un protocole HTTPS chiffré de bout en bout. Votre fournisseur d'accès (FAI) ne peut ni brider votre débit ni intercepter votre activité.",
      icon: "ph:lock-key",
      badge: "Anti-Bridage FAI",
    },
    {
      number: "04",
      title: "Conciergerie VIP Personnalisée 7j/7",
      desc: "Pas de robots de réponse automatique. Vous bénéficiez d'une assistance humaine ultra-réactive sur WhatsApp pour configurer vos Smart TV et boîtiers en moins de 2 minutes.",
      icon: "ph:headset",
      badge: "Réponse en < 2 Min",
    },
  ];

  const comparison = [
    {
      feature: "Stabilité lors des grands matchs sportifs",
      noudine: "100% fluide • Cluster Anti-Freeze™ 9.9",
      other: "Coupures, lags et gels d'écran fréquents",
      noudineHighlight: true,
    },
    {
      feature: "Qualité de diffusion vidéo",
      noudine: "Véritable 4K UHD 60 FPS • Bit-Perfect HDR",
      other: "720p/1080p fortement compressé et flou",
      noudineHighlight: true,
    },
    {
      feature: "Bande passante des serveurs",
      noudine: "Lignes 10 Gbps dédiées non mutualisées",
      other: "VPS partagés surchargés en heures de pointe",
      noudineHighlight: true,
    },
    {
      feature: "Protection contre le bridage FAI",
      noudine: "Tunnel chiffré SSL/TLS 256-bit natif",
      other: "Flux HTTP en clair facilement bridés ou bloqués",
      noudineHighlight: true,
    },
    {
      feature: "Catalogue VOD & Mises à jour",
      noudine: "135k+ titres • Ajouts automatiques en 4K",
      other: "Catalogues figés ou liens morts récurrents",
      noudineHighlight: true,
    },
    {
      feature: "Support client & Accompagnement",
      noudine: "Conciergerie VIP directe sur WhatsApp 24/7",
      other: "Tickets d'aide sans réponse ou messageries fantômes",
      noudineHighlight: true,
    },
  ];

  const devices = [
    { name: "Apple TV 4K", icon: "ph:apple-logo" },
    { name: "Smart TV Samsung (Tizen)", icon: "ph:television-simple" },
    { name: "Smart TV LG (webOS)", icon: "ph:television-simple" },
    { name: "Amazon Firestick 4K", icon: "ph:fire" },
    { name: "Android TV & Google TV", icon: "ph:android-logo" },
    { name: "Nvidia Shield TV", icon: "ph:game-controller" },
    { name: "Boîtiers MAG & Formuler", icon: "ph:device-tablet" },
    { name: "iPhone, iPad & Mac", icon: "ph:device-mobile" },
    { name: "PC Windows & Linux", icon: "ph:desktop" },
  ];

  const faqs = [
    {
      q: "Qu'est-ce qui différencie fondamentalement NOUDINE des autres IPTV ?",
      a: "La majorité des offres IPTV du marché revendent des accès sur des serveurs VPS partagés bas de gamme, incapables d'encaisser les pics d'audience. NOUDINE a investi dans une infrastructure matérielle propriétaire répartie sur 18 centres de données stratégiques (DE-CIX, LINX, Equinix), couplée à notre protocole Anti-Freeze™ 9.9 qui assure une fluidité sans faille même lors des plus grands événements planétaires.",
    },
    {
      q: "Comment fonctionne la technologie Anti-Freeze™ 9.9 ?",
      a: "Notre cluster surveille en temps réel la bande passante de votre connexion et les latences de chaque routeur. Grâce à un encodage HEVC 10-bit et un algorithme de pré-tamponnage adaptatif, votre flux vidéo garde toujours plusieurs secondes d'avance sécurisées dans la mémoire tampon, rendant toute coupure impossible.",
    },
    {
      q: "Ai-je besoin d'un VPN pour utiliser NOUDINE ?",
      a: "Non, aucun VPN n'est requis. Tous nos flux sont nativement encapsulés dans un protocole SSL/TLS chiffré de bout en bout. Pour votre FAI, votre trafic ressemble exactement à une navigation web sécurisée standard (HTTPS), ce qui contourne automatiquement les filtres de bridage tout en protégeant votre anonymat.",
    },
    {
      q: "En combien de temps mon abonnement est-il activé ?",
      a: "Dès votre commande validée avec notre Conciergerie VIP sur WhatsApp, vos identifiants personnalisés (lien M3U, Xtream Codes, identifiants EPG) vous sont transmis en moins de 2 minutes avec un guide d'installation adapté à votre appareil.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-zinc-900 dark:text-white transition-colors">
      
      {/* 1. HERO SECTION — Full 100vh Immersion */}
      <section className="w-full min-h-[calc(100vh-7rem)] min-h-[calc(100dvh-7rem)] flex flex-col items-center justify-center text-center max-w-[100rem] mx-auto space-y-8 sm:space-y-10 py-12 select-none">
        <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Master Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[92px] font-light tracking-tight text-zinc-950 dark:text-white leading-[1.08] sm:leading-[1.05]">
            Redéfinir le Streaming <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
              Haute Fidélité.
            </span>
          </h1>

          {/* Subtitle / Philosophy */}
          <p className="text-base sm:text-xl md:text-2xl text-zinc-600 dark:text-[#a0a0a0] max-w-3xl lg:max-w-4xl mx-auto font-light leading-relaxed sm:leading-[1.45]">
            Fondée par des passionnés de cinéma et d&apos;ingénierie réseau,{" "}
            <span className="text-zinc-900 dark:text-white font-medium">{SITE_CONFIG.brandName}</span> est née d&apos;une exigence absolue : en finir avec les coupures et la compression pour offrir une expérience télévisuelle sans concession.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-6 sm:pt-10 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600">
          <span className="text-[11px] font-mono uppercase tracking-widest">Découvrir</span>
          <div className="w-5 h-9 rounded-full border border-black/20 dark:border-white/20 flex items-start justify-center p-1.5">
            <span className="w-1 h-2 rounded-full bg-zinc-900 dark:bg-white animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. KEY METRIC MILESTONES — PREMIUM BLACK & GOLD TIMELINE */}
      <div className="-mx-5 sm:-mx-8 lg:-mx-10 w-[calc(100%+2.5rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+5rem)]">
        <StatisticsTimeline />
      </div>

      {/* 3. NOTRE HISTOIRE & VISION EDITORIALE */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
                Notre Histoire &amp; Genèse
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 dark:text-white tracking-tight leading-snug">
                Pourquoi avons-nous créé <br className="hidden sm:block" />
                <span className="font-semibold">{SITE_CONFIG.brandName}</span> ?
              </h2>
            </div>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                L&apos;univers de la télévision sur IP a longtemps été gangréné par des serveurs mutualisés saturés, des coupures insupportables en plein temps fort d&apos;un derby, et des flux vidéo 720p fortement dégradés vendus comme de la prétendue &laquo; 4K &raquo;.
              </p>
              <p>
                Face à ce constat, nous avons fondé <strong className="font-medium text-zinc-950 dark:text-white">{SITE_CONFIG.brandName}</strong> avec un parti-pris radical : traiter l&apos;IPTV avec la même rigueur d&apos;ingénierie et le même niveau d&apos;exigence que les leaders mondiaux de la VOD comme Netflix ou Apple TV+.
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-[#a0a0a0]">
                Nous ne louons aucun VPS bon marché. Nous interconnectons nos propres racks dédiés directement avec les nœuds d&apos;échange Internet européens et américains les plus rapides du monde, garantissant un débit instantané et un plaisir visuel sans compromis.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs sm:text-sm font-medium transition-all shadow-md"
              >
                <span>Découvrir nos Abonnements</span>
                <Icon icon="ph:arrow-right" width={14} />
              </Link>
              <a
                href={generateDirectContactUrl("Échange avec la Conciergerie VIP")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white text-xs sm:text-sm font-medium transition-all"
              >
                <Icon icon="ph:whatsapp-logo" width={16} className="text-emerald-500" />
                <span>Poser une question à la Conciergerie</span>
              </a>
            </div>
          </div>

          {/* Right Architecture Teaser Box */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-50 dark:bg-[#0c0c0c] border border-black/10 dark:border-white/10 p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
              <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 uppercase tracking-wider flex items-center gap-2">
                <Icon icon="ph:shield-star" className="text-amber-500" width={16} />
                La Garantie NOUDINE
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                SLA 99.99%
              </span>
            </div>

            <ul className="space-y-3.5 text-xs font-light text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <strong className="font-medium text-zinc-950 dark:text-white">Débit garanti 10 Gbps</strong>
                  <p className="text-zinc-500 dark:text-[#a0a0a0] text-[11px]">Surcapacité réseau de 300% pour absorber tous les pics mondiaux.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <strong className="font-medium text-zinc-950 dark:text-white">Encodage Pur H.265 / HEVC</strong>
                  <p className="text-zinc-500 dark:text-[#a0a0a0] text-[11px]">Couleurs vives 10-bit et fluidité native à 50/60 images par seconde.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <strong className="font-medium text-zinc-950 dark:text-white">Anonymat &amp; Tunneling HTTPS</strong>
                  <p className="text-zinc-500 dark:text-[#a0a0a0] text-[11px]">Insensible au filtrage DNS et au bridage par les opérateurs FAI.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <strong className="font-medium text-zinc-950 dark:text-white">Assistance WhatsApp personnalisée</strong>
                  <p className="text-zinc-500 dark:text-[#a0a0a0] text-[11px]">Un conseiller dédié disponible chaque jour pour tout réglage.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. LES 4 PILIERS FONDAMENTAUX */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Architecture &amp; Technologie
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 dark:text-white tracking-tight">
            Les 4 Piliers d&apos;Excellence {SITE_CONFIG.brandName}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light">
            Une combinaison d&apos;ingénierie matérielle et d&apos;intelligence logicielle pour une fiabilité totale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#141414] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20 transition-all shadow-sm dark:shadow-none space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white group-hover:scale-105 transition-transform">
                  <Icon icon={p.icon} width={20} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/10">
                    {p.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 font-bold">
                    {p.number}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-medium text-zinc-950 dark:text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPARATIF : NOUDINE VS IPTV ORDINAIRE */}
      <section className="rounded-3xl bg-white dark:bg-[#141414] border border-black/10 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-lg shadow-black/5 dark:shadow-none space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Comparatif Sans Concession
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
            NOUDINE face aux Fournisseurs Conventionnels
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light">
            Découvrez pourquoi les passionnés de streaming exigeants choisissent notre cluster privé.
          </p>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10 text-zinc-500 dark:text-[#a0a0a0]">
                <th className="py-3 pr-4 font-medium">Critère de Performance</th>
                <th className="py-3 px-4 font-semibold text-zinc-950 dark:text-white bg-black/[0.02] dark:bg-white/[0.03] rounded-t-xl">
                  {SITE_CONFIG.brandName} (Infrastructure Dédiée)
                </th>
                <th className="py-3 px-4 font-medium text-zinc-500 dark:text-zinc-400">
                  IPTV Standard / Low-Cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5 font-light">
              {comparison.map((row, i) => (
                <tr key={i} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 pr-4 text-zinc-900 dark:text-zinc-200 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-emerald-700 dark:text-emerald-400 bg-black/[0.02] dark:bg-white/[0.03] flex items-center gap-2">
                    <Icon icon="ph:check-circle-fill" width={16} className="text-emerald-500 shrink-0" />
                    <span>{row.noudine}</span>
                  </td>
                  <td className="py-3.5 px-4 text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-2">
                      <Icon icon="ph:x-circle" width={16} className="text-rose-400/80 shrink-0" />
                      <span>{row.other}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. LIVE CDN NODE MONITOR (18 HUBS) */}
      <section className="rounded-3xl bg-zinc-50 dark:bg-[#111111] border border-black/10 dark:border-white/10 p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Icon icon="ph:broadcast" width={20} className="text-emerald-500 animate-pulse" />
              <h3 className="text-base sm:text-lg font-medium text-zinc-950 dark:text-white tracking-tight">
                Surveillance Réseau CDN en Temps Réel
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light">
              Cluster 100% opérationnel • 18 points de présence interconnectés via DE-CIX, LINX &amp; Equinix
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              RÉSEAU ACTIF 100%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
          {cdnNodes.map((node, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white dark:bg-[#171717] border border-black/5 dark:border-white/5 flex items-center justify-between shadow-sm dark:shadow-none"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="truncate max-w-[170px]">{node.city}</span>
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-[#a0a0a0]">
                  Statut : {node.status}
                </div>
              </div>

              <div className="text-right space-y-1">
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {node.latency}
                </span>
                <div className="text-[10px] text-zinc-400">
                  Charge : <span className="text-amber-500 font-bold">{node.load}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ÉCOSYSTÈME MATÉRIEL & APPAREILS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Universalité Matérielle
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
            Compatible avec l&apos;Ensemble de Vos Écrans
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light">
            Une configuration guidée pas à pas en 2 minutes par notre conciergerie sur n&apos;importe quel support.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {devices.map((device, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#141414] border border-black/10 dark:border-white/10 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 shadow-sm dark:shadow-none hover:border-black/30 dark:hover:border-white/25 transition-all"
            >
              <Icon icon={device.icon} width={16} className="text-zinc-600 dark:text-zinc-400" />
              <span>{device.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-zinc-500 dark:text-[#a0a0a0] font-light">
            Applications certifiées recommandées : <strong className="font-normal text-zinc-800 dark:text-zinc-200">TiviMate IPTV</strong>, <strong className="font-normal text-zinc-800 dark:text-zinc-200">IBO Player</strong>, <strong className="font-normal text-zinc-800 dark:text-zinc-200">IPTV Smarters Pro</strong>, <strong className="font-normal text-zinc-800 dark:text-zinc-200">XCIPTV Player</strong> &amp; <strong className="font-normal text-zinc-800 dark:text-zinc-200">GSE Smart IPTV</strong>.
          </p>
        </div>
      </section>

      {/* 8. FAQ SPÉCIFIQUE ABOUT */}
      <section className="rounded-3xl bg-white dark:bg-[#141414] border border-black/10 dark:border-white/10 p-6 sm:p-10 space-y-8 shadow-sm dark:shadow-none">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Transparence Totale
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
            Foire Aux Questions Fréquentes
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light">
            Tout ce que vous devez savoir avant de rejoindre notre cercle d&apos;abonnés VIP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#181818] border border-black/5 dark:border-white/5 space-y-2.5"
            >
              <h4 className="text-sm sm:text-base font-medium text-zinc-950 dark:text-white tracking-tight flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ?
                </span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LUXURIOUS FINAL CALL TO ACTION */}
      <section className="rounded-3xl bg-zinc-950 dark:bg-[#0c0c0c] text-white p-8 sm:p-12 lg:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
            Passez au Niveau Supérieur
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Prêt à Vivre la Vraie Différence {SITE_CONFIG.brandName} ?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#a0a0a0] font-light leading-relaxed max-w-lg mx-auto">
            Rejoignez plus de 45 000 utilisateurs exigeants et profitez dès aujourd&apos;hui de la retransmission 4K la plus stable d&apos;Europe.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/abonnements"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-medium tracking-wide shadow-xl transition-all"
            >
              <span>Consulter les Abonnements VIP</span>
              <Icon icon="ph:arrow-right" width={14} />
            </Link>

            <a
              href={generateDirectContactUrl("Prise de Contact VIP via Page About")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-medium tracking-wide transition-all"
            >
              <Icon icon="ph:whatsapp-logo" width={16} className="text-emerald-400" />
              <span>Contacter la Conciergerie VIP</span>
            </a>
          </div>

          <div className="pt-2 text-[11px] text-zinc-400 font-light flex items-center justify-center gap-4">
            <span>✓ Activation en &lt; 2 minutes</span>
            <span>•</span>
            <span>✓ Sans engagement</span>
            <span>•</span>
            <span>✓ Assistance WhatsApp 24/7</span>
          </div>
        </div>
      </section>

    </div>
  );
}
