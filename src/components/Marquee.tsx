"use client";

import React, { useState } from "react";
import Image from "next/image";
import MediaVideo from "@/components/MediaVideo";
import { images, videos } from "@/lib/media";

const BRAND_NAMES = [
  "Hampden",
  "Skin Rocks",
  "CSB",
  "Walmart",
  "TikTok Shop",
  "Shop App",
  "Tapcart",
  "Shopify",
  "Klaviyo",
  "Yotpo",
];

const BRAND_VIDEOS = [
  videos.fashion1,
  videos.beauty,
  videos.retail,
  videos.shopping,
  videos.player,
  videos.studio,
  videos.shopper,
  videos.lifestyle,
  videos.product,
  videos.fashion2,
];

function BrandTile({
  src,
  name,
  video,
}: {
  src: string;
  name: string;
  video: (typeof BRAND_VIDEOS)[number];
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="brand-tile-interactive"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={src}
        alt={name}
        fill
        sizes="200px"
        style={{
          objectFit: "cover",
          opacity: hover ? 0 : 0.85,
          transition: "opacity 0.4s",
        }}
      />
      <div className="brand-video-layer">
        <MediaVideo source={video} poster={src} autoPlay={hover} visible={hover} />
      </div>
      <div className="brand-overlay">{name}</div>
    </div>
  );
}

export default function Marquee() {
  const tiles = images.brand.map((src, i) => ({
    src,
    name: BRAND_NAMES[i % BRAND_NAMES.length],
    video: BRAND_VIDEOS[i % BRAND_VIDEOS.length],
  }));
  const doubled = [...tiles, ...tiles];

  return (
    <section className="marquee-section" aria-label="Trusted brands">
      <p className="marquee-eyebrow">Trusted by the best in e-Commerce · Hover to preview video</p>

      <div className="marquee-outer" style={{ marginBottom: 14 }}>
        <div className="marquee-left">
          {doubled.map((b, i) => (
            <BrandTile key={`l-${i}`} {...b} />
          ))}
        </div>
        <div className="marquee-fade-l" />
        <div className="marquee-fade-r" />
      </div>

      <div className="marquee-outer">
        <div className="marquee-right">
          {[...doubled].reverse().map((b, i) => (
            <BrandTile key={`r-${i}`} {...b} />
          ))}
        </div>
        <div className="marquee-fade-l" />
        <div className="marquee-fade-r" />
      </div>
    </section>
  );
}
