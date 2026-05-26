"use client";

import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import type { VideoSource } from "@/lib/media";

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
    return { primary: source, fallback: source };
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const [srcIndex, setSrcIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const resolved = useMemo(() => resolveSource(source), [source]);
  const posterUrl = poster ?? resolved.poster;
  const urls = useMemo(
    () => [resolved.primary, resolved.fallback].filter((u, i, a) => a.indexOf(u) === i),
    [resolved.primary, resolved.fallback]
  );
  const activeUrl = urls[Math.min(srcIndex, urls.length - 1)];

  const tryPlay = useCallback(async () => {
    const el = ref.current;
    if (!el || !visible || !inView) return;
    try {
      await el.play();
      onPlayingChange?.(true);
    } catch {
      onPlayingChange?.(false);
    }
  }, [visible, inView, onPlayingChange]);

  const attachSource = useCallback(
    (url: string) => {
      const el = ref.current;
      if (!el) return;
      setReady(false);
      setLoadError(false);
      el.pause();
      el.removeAttribute("src");
      el.load();
      el.src = url;
      el.load();
    },
    []
  );

  useEffect(() => {
    setSrcIndex(0);
    setReady(false);
    setLoadError(false);
  }, [resolved.primary]);

  useEffect(() => {
    if (!inView) return;
    attachSource(activeUrl);
  }, [activeUrl, attachSource, inView]);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: "120px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoPlay && visible && inView && ready) {
      tryPlay();
    }
    if (!visible && ref.current) {
      ref.current.pause();
      onPlayingChange?.(false);
    }
  }, [autoPlay, visible, inView, ready, tryPlay, onPlayingChange]);

  const handleCanPlay = () => {
    setReady(true);
    setLoadError(false);
    if (autoPlay && visible && inView) tryPlay();
  };

  const handleError = () => {
    if (srcIndex < urls.length - 1) {
      setSrcIndex((i) => i + 1);
    } else {
      setLoadError(true);
      setReady(false);
      onPlayingChange?.(false);
    }
  };

  const showPoster = !ready || loadError;

  return (
    <div
      ref={wrapRef}
      className={`media-video-wrap ${className}`}
      style={{ position: "absolute", inset: 0, ...style }}
    >
      {posterUrl && showPoster && (
        <div
          className="media-video-poster"
          style={{ backgroundImage: `url("${posterUrl}")` }}
          aria-hidden
        />
      )}

      {!loadError && (
        <video
          ref={ref}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={inView ? "auto" : "none"}
          poster={posterUrl}
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
          onPlaying={() => onPlayingChange?.(true)}
          onPause={() => onPlayingChange?.(false)}
          onError={handleError}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: ready ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}

      {inView && !ready && !loadError && (
        <div className="media-video-loading" aria-hidden>
          <span className="media-video-spinner" />
        </div>
      )}
    </div>
  );
}
