"use client";

import React from "react";
import MediaVideo from "@/components/MediaVideo";
import { videos } from "@/lib/media";

export default function CTABanner() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-video-bg">
        <MediaVideo source={videos.fashion1} autoPlay visible loop />
      </div>
      <div className="cta-overlay" />
      <div className="cta-content">
        <h2 id="cta-heading">Ready to accelerate your brand?</h2>
        <p>Join 2,000+ brands using AI-powered shoppable video experiences.</p>
        <div className="cta-buttons">
          <a href="#" className="btn-black">
            Get Tolstoy for free
          </a>
          <a href="#developer" className="btn-outline">
            Hire the developer
          </a>
        </div>
      </div>
    </section>
  );
}
