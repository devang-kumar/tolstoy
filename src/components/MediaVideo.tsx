"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import type { VideoSource } from "@/lib/media";
import { FALLBACK_VIDEO } from "@/lib/media";

type Props = {
  source: VideoSource | string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  onPlayingChange?: (playing: boolean) => void;
};

function resolveSource(source: VideoSource | string): VideoSource {
  if (typeof source === "string") {
    return { primary: source, fallback: FALLBACK_VIDEO };
  }
  return source;
}

export default function MediaVideo({
  source,
  poster,
  autoPlay = false,
  loop = true,
  muted = true,
  playsInline = true,
  className = "",
  style,
  visible = true,
  onPlayingChange,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [srcIndex, setSrcIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const resolved = resolveSource(source);
  const posterUrl = poster ?? resolved.poster;
  const urls = [resolved.primary, resolved.fallback, FALLBACK_VIDEO];
  const currentSrc = urls[Math.min(srcIndex, urls.length - 1)];

  const tryPlay = useCallback(async () => {
    const el = ref.current;
    if (!el || !visible) return;
    try {
      await el.play();
      onPlayingChange?.(true);
    } catch {
      onPlayingChange?.(false);
    }
  }, [visible, onPlayingChange]);

  const loadSrc = useCallback(
    (index: number) => {
      const el = ref.current;
      if (!el) return;
      setReady(false);
      setFailed(false);
      el.src = urls[Math.min(index, urls.length - 1)];
      el.load();
    },
    [urls]
  );

  useEffect(() => {
    loadSrc(srcIndex);
  }, [srcIndex, loadSrc]);

  useEffect(() => {
    if (autoPlay && visible) tryPlay();
    else if (!visible && ref.current) {
      ref.current.pause();
      onPlayingChange?.(false);
    }
  }, [autoPlay, visible, currentSrc, tryPlay, onPlayingChange]);

  const handleError = () => {
    if (srcIndex < urls.length - 1) {
      setSrcIndex((i) => i + 1);
    } else {
      setFailed(true);
      setReady(true);
    }
  };

  const showPoster = !ready || failed;

  return (
    <div className={`media-video-wrap ${className}`} style={{ position: "absolute", inset: 0, ...style }}>
      {posterUrl && showPoster && (
        <div
          className="media-video-poster"
          style={{ backgroundImage: `url(${posterUrl})` }}
          aria-hidden
        />
      )}
      <video
        ref={ref}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        autoPlay={autoPlay && visible}
        preload="auto"
        crossOrigin="anonymous"
        onLoadedData={() => setReady(true)}
        onCanPlay={() => {
          setReady(true);
          if (autoPlay && visible) tryPlay();
        }}
        onPlaying={() => onPlayingChange?.(true)}
        onPause={() => onPlayingChange?.(false)}
        onError={handleError}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: ready && !failed ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
    </div>
  );
}
