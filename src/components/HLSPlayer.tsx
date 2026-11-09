"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Icon } from "@iconify/react";

interface HLSPlayerProps {
  src: string;
  poster?: string;
  title: string;
  channelName?: string;
  autoPlay?: boolean;
  onClose?: () => void;
}

export function HLSPlayer({
  src,
  poster,
  title,
  channelName,
  autoPlay = true,
  onClose,
}: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    setIsLoading(true);
    setHasError(false);

    if (Hls.isSupported() && src.endsWith(".m3u8")) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        if (autoPlay) {
          video.play().catch(() => {
            // Autoplay blocked by browser policy without user gesture
            setIsPlaying(false);
          });
        }
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          setIsLoading(false);
          setHasError(true);
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              setErrorMessage("Live stream feed temporarily unavailable or network restricted.");
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              setErrorMessage("Stream codec error. Recovering media playback...");
              hls?.recoverMediaError();
              break;
            default:
              setErrorMessage("Authorized broadcast stream offline. Please request line refresh on WhatsApp.");
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native Apple Safari HLS support
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        setIsLoading(false);
        if (autoPlay) video.play().catch(() => setIsPlaying(false));
      });
      video.addEventListener("error", () => {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage("Unable to load live video stream.");
      });
    } else {
      // Standard MP4 or direct video fallback
      video.src = src;
      video.addEventListener("loadeddata", () => {
        setIsLoading(false);
        if (autoPlay) video.play().catch(() => setIsPlaying(false));
      });
      video.addEventListener("error", () => {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage("Stream format requires dedicated IPTV player (TiviMate / IBO Player).");
      });
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      if (hls) {
        hls.destroy();
      }
    };
  }, [src, autoPlay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;
    video.volume = newVol;
    setVolume(newVol);
    video.muted = newVol === 0;
    setIsMuted(newVol === 0);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl group select-none"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Loading Overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-3 z-20 pointer-events-none">
          <div className="w-12 h-12 border-3 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
            Connecting to 4K HLS Stream...
          </span>
        </div>
      )}

      {/* Error Overlay / Stream Unavailable */}
      {hasError && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-4 z-20">
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
            <Icon icon="ph:warning-circle-fill" width={28} />
          </div>
          <div className="space-y-1 max-w-md">
            <h4 className="text-base font-bold text-white">Stream Authorization Notice</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {errorMessage || "Live broadcast requires authenticated subscriber credentials."}
            </p>
          </div>
          <a
            href="https://wa.me/212600123456?text=Hello!%20I%20am%20testing%20the%20live%20player%20and%20would%20like%20to%20request%20authorized%20HLS%20credentials."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Icon icon="ph:whatsapp-logo-fill" width={16} />
            <span>Request Active Stream on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Top Overlay Bar */}
      <div
        className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white transition-opacity duration-300 z-10 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-[10px] font-black uppercase tracking-wider animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            HLS 4K LIVE
          </span>
          <span className="text-sm font-bold truncate max-w-xs sm:max-w-md drop-shadow">
            {channelName ? `${channelName} • ${title}` : title}
          </span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          >
            <Icon icon="ph:x-bold" width={14} />
          </button>
        )}
      </div>

      {/* Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between transition-opacity duration-300 z-10 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <Icon icon={isPlaying ? "ph:pause-fill" : "ph:play-fill"} width={16} />
          </button>

          {/* Volume / Mute */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <Icon
                icon={isMuted || volume === 0 ? "ph:speaker-x-fill" : "ph:speaker-high-fill"}
                width={18}
              />
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-24 accent-orange-500 h-1 bg-white/20 rounded-full cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300">
            Anti-Freeze™ 9.9
          </span>

          <button
            onClick={toggleFullscreen}
            className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fullscreen"
          >
            <Icon
              icon={isFullscreen ? "ph:corners-in-bold" : "ph:corners-out-bold"}
              width={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

