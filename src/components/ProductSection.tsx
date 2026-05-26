"use client";

import React from "react";
import { featureMedia, images } from "@/lib/media";
import type { VideoSource } from "@/lib/media";
import { InteractiveMedia } from "@/components/InteractiveMedia";

type Feature = {
  title: string;
  desc: string;
  cta: string;
  image: string;
  video: VideoSource;
  label?: string;
  phone?: boolean;
};

const PLAYER_FEATURES: Feature[] = [
  {
    title: "We set the standard for Shoppable video",
    desc: "Increase conversions by showcasing your videos and UGC across your site, app, email, and SMS.",
    cta: "Get AI Player for free",
    ...featureMedia.player[0],
    label: "Shoppable video",
    phone: true,
  },
  {
    title: "Media gallery insights",
    desc: "Track which assets engage and convert, and how deeply shoppers browse.",
    cta: "Get AI Player for free",
    ...featureMedia.player[1],
    label: "Analytics",
  },
  {
    title: "The only video syndication network",
    desc: "Syndicate your videos to Walmart, Shop app, and more.",
    cta: "Get AI Player for free",
    ...featureMedia.player[2],
    label: "Syndication",
  },
];

const STUDIO_FEATURES: Feature[] = [
  {
    title: "AI Creative agent",
    desc: "Generate high-quality images and videos with one quick chat.",
    cta: "Get AI Studio for free",
    ...featureMedia.studio[0],
    label: "AI Creative",
    phone: true,
  },
  {
    title: "Beautiful, ready-made templates",
    desc: "Pick, click, and post gorgeous visuals in seconds.",
    cta: "Get AI Studio for free",
    ...featureMedia.studio[1],
    label: "Templates",
  },
  {
    title: "Generate at scale",
    desc: "Automatically generate content across your entire product catalog.",
    cta: "Get AI Studio for free",
    ...featureMedia.studio[2],
    label: "At scale",
  },
];

const SHOPPER_FEATURES: Feature[] = [
  {
    title: "Virtual try-on",
    desc: "Increase your visitors' confidence to buy with lightning-fast & accurate virtual try-on.",
    cta: "Get AI Shopper for free",
    ...featureMedia.shopper[0],
    label: "Try-on",
    phone: true,
  },
  {
    title: "Your brand's ChatGPT",
    desc: "Trained on your catalog, tuned to your customers, built to sell.",
    cta: "Get AI Shopper for free",
    ...featureMedia.shopper[1],
    label: "AI Chat",
  },
  {
    title: "Know your shoppers",
    desc: "Collect subscribers & build rich customer profiles.",
    cta: "Get AI Shopper for free",
    ...featureMedia.shopper[2],
    label: "Profiles",
  },
];

function FeatureRow({
  title,
  desc,
  cta,
  image,
  video,
  label,
  phone,
  reverse = false,
}: Feature & { reverse?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        gap: 48,
        alignItems: "center",
        flexWrap: "wrap",
        padding: "48px 0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{ flex: "1 1 300px", minWidth: 0 }}>
        <h3
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 14,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
        <p style={{ fontSize: "0.8rem", color: "#999", marginBottom: 16 }}>
          Preview on hover · Click to play or pause
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#" className="btn-black">
            {cta}
          </a>
          <a
            href="#"
            style={{
              color: "#000",
              fontWeight: 600,
              fontSize: "0.875rem",
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 0",
            }}
          >
            Learn more →
          </a>
        </div>
      </div>
      <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
        <InteractiveMedia
          image={image}
          video={video}
          alt={title}
          phone={phone}
          shoppable={phone}
          productThumb={images.player1}
          label={label}
        />
      </div>
    </div>
  );
}

function ProductBlock({
  id,
  label,
  tagBg,
  tagColor,
  features,
  sectionTitle,
}: {
  id: string;
  label: string;
  tagBg: string;
  tagColor: string;
  features: Feature[];
  sectionTitle?: string;
}) {
  return (
    <div id={id} style={{ padding: "80px 0 20px" }}>
      {sectionTitle && (
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          {sectionTitle}
        </h2>
      )}
      <span
        style={{
          display: "inline-flex",
          background: tagBg,
          color: tagColor,
          padding: "6px 16px",
          borderRadius: 100,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 32,
        }}
      >
        {label}
      </span>
      {features.map((f, i) => (
        <FeatureRow key={f.title} {...f} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}

export default function ProductSection() {
  return (
    <section style={{ background: "#fff", padding: "0 clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <ProductBlock
          id="ai-player"
          label="AI Player · Shoppable videos"
          tagBg="var(--player-bg)"
          tagColor="var(--player-blue)"
          features={PLAYER_FEATURES}
        />
        <ProductBlock
          id="ai-studio"
          label="AI Studio · Create AI images & videos"
          tagBg="var(--studio-bg)"
          tagColor="var(--studio-purple)"
          features={STUDIO_FEATURES}
        />
        <ProductBlock
          id="ai-shopper"
          label="AI Shopper · AI sales chatbot"
          tagBg="var(--shopper-bg)"
          tagColor="var(--shopper-green)"
          features={SHOPPER_FEATURES}
          sectionTitle="Entirely New AI-Shopping Experiences"
        />
      </div>
    </section>
  );
}
