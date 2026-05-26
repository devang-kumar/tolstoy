"use client";

import React, { useState } from "react";
import Image from "next/image";
import MediaVideo from "@/components/MediaVideo";
import { images, videos, interactiveTiles } from "@/lib/media";
import type { VideoSource } from "@/lib/media";

const PRODUCTS = [
  {
    id: "player",
    tag: "AI Player",
    tagline:
      "The industry's most trusted shoppable videos solution for seamless customer experience.",
    cta: "Shoppable videos",
    image: images.heroPlayer,
    video: videos.player,
    accent: "var(--player-blue)",
    tagBg: "var(--player-bg)",
  },
  {
    id: "studio",
    tag: "AI Studio",
    tagline:
      "Create high-performing AI product videos that are natively integrated with your website.",
    cta: "Create AI Images & Video",
    image: images.heroStudio,
    video: videos.studio,
    accent: "var(--studio-purple)",
    tagBg: "var(--studio-bg)",
  },
  {
    id: "shopper",
    tag: "AI Shopper",
    tagline:
      "Your AI agent that drives sales by personalizing the shopping journey for each customer.",
    cta: "AI sales chatbot",
    image: images.heroShopper,
    video: videos.shopper,
    accent: "var(--shopper-green)",
    tagBg: "var(--shopper-bg)",
  },
] as const;

const FILMSTRIP = interactiveTiles.slice(0, 8);

export default function Hero() {
  const [active, setActive] = useState(0);
  const [filmstripActive, setFilmstripActive] = useState<number | null>(null);
  const [cardHover, setCardHover] = useState<number | null>(null);
  const product = PRODUCTS[active];

  const mainVideo: VideoSource =
    filmstripActive !== null ? FILMSTRIP[filmstripActive].video : product.video;

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <h1 id="hero-heading" className="hero-title">
          The AI Commerce platform
        </h1>

        <p className="hero-subtitle">
          Supercharge product discovery, engagement, and conversion with
          AI-first shopping experiences.
        </p>

        <div className="hero-ctas">
          <a href="#developer" className="btn-black">
            View developer profile
          </a>
          <a href="#" className="btn-outline">
            Talk to sales
          </a>
        </div>

        <div className="hero-product-grid">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`product-card${active === i && filmstripActive === null ? " active" : ""}`}
              onClick={() => {
                setFilmstripActive(null);
                setActive(i);
              }}
              onMouseEnter={() => setCardHover(i)}
              onMouseLeave={() => setCardHover(null)}
            >
              <div className="product-card-media">
                <Image src={p.image} alt={p.tag} fill sizes="33vw" style={{ objectFit: "cover" }} />
                <div
                  className="product-card-video-wrap"
                  style={{ opacity: cardHover === i ? 1 : 0 }}
                >
                  <MediaVideo
                    source={p.video}
                    poster={p.image}
                    autoPlay={cardHover === i}
                    visible={cardHover === i}
                  />
                </div>
                <span className="product-card-tag" style={{ background: p.tagBg, color: p.accent }}>
                  {p.tag}
                </span>
              </div>
              <div className="product-card-body">
                <p>{p.tagline}</p>
                <span style={{ color: p.accent, fontWeight: 700 }}>
                  {p.cta} →
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="hero-player">
          <MediaVideo
            key={`${filmstripActive ?? active}-${mainVideo.primary}`}
            source={mainVideo}
            poster={filmstripActive !== null ? FILMSTRIP[filmstripActive].image : product.image}
            autoPlay
            visible
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="hero-player-caption">
            <span
              className="hero-player-badge"
              style={{ background: product.tagBg, color: product.accent }}
            >
              {filmstripActive !== null
                ? FILMSTRIP[filmstripActive].label
                : product.tag}
            </span>
            <p>
              {filmstripActive !== null
                ? "Select a product above or browse thumbnails below."
                : product.tagline}
            </p>
          </div>
        </div>

        <p className="filmstrip-label">Explore more — click a thumbnail</p>
        <div className="filmstrip">
          {FILMSTRIP.map((item, i) => (
            <button
              key={item.label}
              type="button"
              className={`filmstrip-thumb${filmstripActive === i ? " active" : ""}`}
              onClick={() => setFilmstripActive(i)}
              aria-label={item.label}
            >
              <Image src={item.image} alt={item.label} fill sizes="88px" style={{ objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
