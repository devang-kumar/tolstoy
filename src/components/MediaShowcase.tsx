"use client";

import React, { useState } from "react";
import Image from "next/image";
import MediaVideo from "@/components/MediaVideo";
import { interactiveTiles } from "@/lib/media";

function GalleryTile({
  image,
  video,
  label,
}: {
  image: string;
  video: (typeof interactiveTiles)[number]["video"];
  label: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="gallery-tile"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((a) => !a)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setActive((a) => !a)}
      aria-label={`Play ${label}`}
    >
      <Image src={image} alt={label} fill sizes="280px" className="gallery-img" style={{ opacity: active ? 0 : 1 }} />
      <div className="gallery-video-wrap">
        <MediaVideo
          source={video}
          poster={image}
          autoPlay={active}
          visible={active}
          style={{ opacity: active ? 1 : 0 }}
        />
      </div>
      <div className="gallery-label">{label}</div>
      {!active && <span className="gallery-play">▶</span>}
    </div>
  );
}

export default function MediaShowcase() {
  return (
    <section className="showcase-section" aria-labelledby="showcase-heading">
      <div className="showcase-inner">
        <header className="showcase-header">
          <p className="section-eyebrow section-eyebrow-light">Interactive media gallery</p>
          <h2 id="showcase-heading">Hover or tap to preview shoppable content</h2>
          <p>Videos load automatically — fashion, retail & lifestyle footage from Pexels.</p>
        </header>

        <div className="gallery-grid">
          {interactiveTiles.map((tile) => (
            <GalleryTile key={tile.label} {...tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
