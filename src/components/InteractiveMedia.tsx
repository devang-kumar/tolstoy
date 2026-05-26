"use client";

import React, { useState } from "react";
import Image from "next/image";
import MediaVideo from "@/components/MediaVideo";
import type { VideoSource } from "@/lib/media";

type Props = {
  image: string;
  video?: VideoSource;
  alt?: string;
  aspectRatio?: string;
  phone?: boolean;
  shoppable?: boolean;
  productThumb?: string;
  label?: string;
};

export function InteractiveMedia({
  image,
  video,
  alt = "",
  aspectRatio = "4/3",
  phone = false,
  shoppable = false,
  productThumb,
  label,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const showVideo = Boolean(video && (hovered || playing));

  const wrapperStyle: React.CSSProperties = phone
    ? { width: 260, height: 520, margin: "0 auto" }
    : { maxWidth: 520, width: "100%", aspectRatio, margin: "0 auto" };

  return (
    <div
      className={`interactive-media ${phone ? "phone-frame" : ""}`}
      style={{
        ...wrapperStyle,
        position: "relative",
        borderRadius: phone ? undefined : 20,
        overflow: "hidden",
        cursor: video ? "pointer" : "default",
        boxShadow: hovered
          ? "0 24px 56px rgba(0,0,0,0.18)"
          : "0 12px 40px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPlaying(false);
      }}
      onClick={() => video && setPlaying((p) => !p)}
      role={video ? "button" : undefined}
      tabIndex={video ? 0 : undefined}
      aria-label={video ? (playing ? "Pause video" : "Play video") : undefined}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={phone ? "260px" : "(max-width: 768px) 100vw, 520px"}
        style={{
          objectFit: "cover",
          opacity: showVideo ? 0 : 1,
          transition: "opacity 0.4s ease",
          zIndex: 1,
        }}
      />

      {video && (
        <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
          <MediaVideo
            source={video}
            poster={image}
            autoPlay={hovered || playing}
            visible={hovered || playing}
            loop
            onPlayingChange={setPlaying}
            style={{ opacity: showVideo ? 1 : 0, transition: "opacity 0.4s" }}
          />
        </div>
      )}

      {video && !showVideo && (
        <div className="play-badge-floating" aria-hidden>
          <span>▶</span>
          <span className="play-badge-text">Play video</span>
        </div>
      )}

      {label && (
        <span className="media-label">{label}</span>
      )}

      {shoppable && productThumb && (
        <div className="shoppable-bar">
          <div className="shoppable-thumb">
            <Image src={productThumb} alt="Product" fill sizes="40px" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: "0.8rem" }}>Summer Collection</div>
            <div style={{ fontSize: "0.72rem", color: "#666" }}>$89.00</div>
          </div>
          <span className="btn-black" style={{ padding: "7px 14px", fontSize: "0.72rem" }}>
            Buy
          </span>
        </div>
      )}
    </div>
  );
}
