"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/media";

const PLACEMENTS = [
  "PDPs",
  "Homepage",
  "PLPs",
  "Landing pages",
  "Email & SMS",
  "Mobile Apps",
];

const CAPABILITIES = [
  { title: "Dynamic PDP stories", desc: "Product specific videos that boost conversion." },
  { title: "Media gallery", desc: "Surface dynamic content and get visibility to asset performance." },
  { title: "Related products carousel", desc: "Drive product discovery by featuring videos of similar products." },
  { title: "Homepage spotlight", desc: "Build brand connection and drive product discovery." },
  { title: "Hero videos", desc: "Hero videos that load fast, look great, and drive action instantly." },
  { title: "'For you' feed", desc: "Like TikTok, but for your brand—personalized to drive engagement." },
  { title: "Collection-grid tiles", desc: "Highlight new products with branded videos across collection pages." },
  { title: "Product video tiles", desc: "Branded videos automatically distributed across your collection pages." },
  { title: "Social landing page", desc: "Bridge the gap from scroll to shop with video-based landing pages." },
  { title: "Video page", desc: "Showcase all your video content in one place—on your site." },
  { title: "Abandonment flows", desc: "Win back shoppers with personalized product videos in emails." },
  { title: "Trending videos", desc: "Put top-performing videos to work across every campaign." },
  { title: "App video stories", desc: "Mobile-optimized videos on PDPs that drive in-app conversion." },
  { title: "App 'For you' feed", desc: "Seamless integration through your app provider or our SDK." },
];

export default function CapabilitiesTabs() {
  const [placement, setPlacement] = useState(0);
  const [cap, setCap] = useState(0);

  return (
    <section className="capabilities">
      <div className="capabilities-inner">
        <h2>Videos that engage, guide, and convert — everywhere</h2>
        <div className="capabilities-placements">
          {PLACEMENTS.map((p, i) => (
            <button
              key={p}
              type="button"
              className={i === placement ? "active" : ""}
              onClick={() => setPlacement(i)}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="capabilities-panel">
          <div className="capabilities-list">
            {CAPABILITIES.map((c, i) => (
              <button
                key={c.title}
                type="button"
                className={i === cap ? "active" : ""}
                onClick={() => setCap(i)}
              >
                <strong>{c.title}</strong>
                <span>{c.desc}</span>
              </button>
            ))}
          </div>
          <div className="capabilities-preview">
            <Image
              src={images.gallery[cap % images.gallery.length]}
              alt={CAPABILITIES[cap].title}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="capabilities-preview-copy">
              <h3>{CAPABILITIES[cap].title}</h3>
              <p>{CAPABILITIES[cap].desc}</p>
              <a href="#">Explore all capabilities</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
