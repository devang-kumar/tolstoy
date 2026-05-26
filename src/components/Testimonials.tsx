"use client";

import React, { useState } from "react";
import Image from "next/image";
import MediaVideo from "@/components/MediaVideo";
import { images, videos } from "@/lib/media";

const TESTIMONIALS = [
  {
    quote:
      "Our goal was to intelligently incorporate AI to improve the customer experience, and Tolstoy delivered 100%. Any brand not doing this will fall behind.",
    name: "Katherine Redd",
    role: "eCommerce Lead @ Hampden",
    stats: [
      { value: "7x", label: "lift in conversion rate on PDPs with Tolstoy video content" },
      { value: "232%", label: "AOV Uplift on PDPs with Tolstoy video content" },
      { value: "11x", label: "Conversion rate for users engaged with Personal Shopper" },
    ],
    bg: "var(--player-bg)",
    accent: "var(--player-blue)",
    image: images.player1,
    video: videos.player,
  },
  {
    quote:
      "It was exciting to see the real impact the AI Personal Shopper had on conversion. The results made it clear that this tool drives measurable results.",
    name: "Soul Naylor",
    role: "eCommerce Coordinator @ CSB",
    stats: [
      { value: "6.0%", label: "lift in conversion — thousands of incremental orders." },
    ],
    bg: "var(--shopper-bg)",
    accent: "var(--shopper-green)",
    image: images.shopper2,
    video: videos.shopper,
  },
  {
    quote:
      "Tolstoy allows us to showcase UGC and video in an interactive format directly on our PDPs. Our customers appreciate authentic content in real-world use.",
    name: "Ecommerce Manager",
    role: "@ Skin Rocks",
    stats: [
      { value: "+14%", label: "Conversion Rate Lift" },
      { value: "✓", label: "Positive Customer Response" },
      { value: "✓", label: "Frictionless Experience" },
    ],
    bg: "#fff8f0",
    accent: "#c2410c",
    image: images.studio2,
    video: videos.beauty,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [videoActive, setVideoActive] = useState(false);
  const t = TESTIMONIALS[active];

  const go = (fn: (prev: number) => number) => {
    setVideoActive(false);
    setActive(fn);
  };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        <h2 id="testimonials-heading">Trusted by the best in e-Commerce</h2>

        <div className="testimonial-card" style={{ background: t.bg }}>
          <div className="testimonial-layout">
            <div className="testimonial-quote-col">
              <span className="quote-mark" style={{ color: t.accent }}>"</span>
              <blockquote>{t.quote}</blockquote>
              <footer>
                <span className="avatar" style={{ background: `${t.accent}22`, color: t.accent }}>
                  {t.name[0]}
                </span>
                <div>
                  <cite>{t.name}</cite>
                  <span>{t.role}</span>
                </div>
              </footer>
            </div>

            <div
              className="testimonial-video-col"
              onMouseEnter={() => setVideoActive(true)}
              onMouseLeave={() => setVideoActive(false)}
              onClick={() => setVideoActive((v) => !v)}
              role="button"
              tabIndex={0}
              aria-label="Play customer story video"
            >
              <Image
                src={t.image}
                alt=""
                fill
                sizes="280px"
                style={{
                  objectFit: "cover",
                  opacity: videoActive ? 0 : 1,
                  transition: "opacity 0.4s",
                }}
              />
              <MediaVideo
                key={t.video.primary}
                source={t.video}
                poster={t.image}
                autoPlay={videoActive}
                visible={videoActive}
              />
              <span className="video-hint">{videoActive ? "▶ Playing" : "Hover to watch"}</span>
            </div>

            <div className="testimonial-stats-col">
              {t.stats.map((s) => (
                <div key={s.label} className="testimonial-stat">
                  <div className="stat-value" style={{ color: t.accent }}>
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
              <a href="#" className="btn-black stat-cta">
                Read full story ↗
              </a>
            </div>
          </div>

          <div className="carousel-controls">
            <button type="button" onClick={() => go((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))} aria-label="Previous">
              ←
            </button>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={active === i ? "dot active" : "dot"}
                onClick={() => go(() => i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
            <button type="button" onClick={() => go((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
