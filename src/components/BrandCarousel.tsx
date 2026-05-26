"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/media";

const SLIDES = [
  {
    category: "Fashion",
    title: "Boost AOV with UGC carousels on PDPs",
    desc: "Make cross-selling feel like part of the journey, not a detour.",
    image: images.brand[0],
  },
  {
    category: "Beauty",
    title: "Show real results with before & after demos",
    desc: "Let customers see your products in action with authentic results.",
    image: images.brand[1],
  },
  {
    category: "Accessories",
    title: "Make product discovery effortless",
    desc: "Video carousels highlight your variety. Shoppers see more, buy more.",
    image: images.brand[2],
  },
  {
    category: "Home Goods",
    title: "Bring every product to life — up close and all around",
    desc: "Feature-rich videos that let shoppers explore every detail with confidence.",
    image: images.brand[3],
  },
  {
    category: "Supplements",
    title: "Educate and inform with detailed product videos",
    desc: "Make product benefits crystal clear with expert explainers.",
    image: images.brand[4],
  },
  {
    category: "Jewelry",
    title: "Increase engagement with real customer videos",
    desc: "Styled-by-you videos that build trust and inspire clicks.",
    image: images.brand[5],
  },
];

export default function BrandCarousel() {
  const [idx, setIdx] = useState(0);
  const slide = SLIDES[idx];

  return (
    <section className="brand-carousel">
      <div className="brand-carousel-inner">
        <h2>How the smartest brands win with Tolstoy</h2>
        <div className="brand-carousel-card">
          <button
            type="button"
            className="brand-carousel-nav"
            aria-label="Previous"
            onClick={() => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
          >
            ←
          </button>
          <div className="brand-carousel-content">
            <span className="brand-carousel-cat">{slide.category}</span>
            <h3>{slide.title}</h3>
            <p>{slide.desc}</p>
            <a href="#" className="btn-secondary brand-carousel-cta">
              Try a template
            </a>
          </div>
          <div className="brand-carousel-image">
            <Image src={slide.image} alt={slide.title} fill sizes="400px" />
          </div>
          <button
            type="button"
            className="brand-carousel-nav"
            aria-label="Next"
            onClick={() => setIdx((i) => (i + 1) % SLIDES.length)}
          >
            →
          </button>
        </div>
        <div className="brand-carousel-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.category}
              type="button"
              className={i === idx ? "active" : ""}
              aria-label={s.category}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
