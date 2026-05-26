"use client";

import React from "react";
import MediaVideo from "@/components/MediaVideo";
import { videos, images } from "@/lib/media";

export default function Hero() {
  return (
    <section className="ai-hero">
      <div className="ai-hero-inner">
        <span className="ai-badge">AI Player</span>
        <h1>
          The #1 Shoppable video
          <br />
          solution for E-commerce
        </h1>
        <div className="ai-hero-ctas">
          <a href="#" className="btn-primary">
            Get Tolstoy for free
          </a>
          <a href="#" className="btn-secondary">
            Talk to us
          </a>
        </div>

        <p className="ai-era-tag">The next era of video commerce starts here</p>

        <div className="ai-hero-video">
          <MediaVideo
            source={videos.hero}
            poster={images.heroPlayer}
            autoPlay
            visible
          />
        </div>
      </div>
    </section>
  );
}
