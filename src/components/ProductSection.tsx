"use client";

import React from "react";

const PLAYER_FEATURES = [
  {
    title: "We set the standard for Shoppable video",
    desc: "Increase conversions by showcasing your videos and UGC across your site, app, email, and SMS.",
    videoUrl: "https://videos.pexels.com/video-files/7680438/7680438-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Media gallery insights",
    desc: "Track which assets engage and convert, and how deeply shoppers browse.",
    videoUrl: "https://videos.pexels.com/video-files/6238179/6238179-hd_1920_1080_25fps.mp4",
  },
  {
    title: "The only video syndication network",
    desc: "Syndicate your videos to Walmart, Shop app, and more.",
    videoUrl: "https://videos.pexels.com/video-files/5585952/5585952-hd_1920_1080_25fps.mp4",
  },
];

const STUDIO_FEATURES = [
  {
    title: "AI Creative agent",
    desc: "Generate high-quality images and videos with one quick chat.",
    videoUrl: "https://videos.pexels.com/video-files/7287924/7287924-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Beautiful, ready-made templates",
    desc: "Pick, click, and post gorgeous visuals in seconds.",
    videoUrl: "https://videos.pexels.com/video-files/8937985/8937985-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Generate at scale",
    desc: "Automatically generate content across your entire product catalog.",
    videoUrl: "https://videos.pexels.com/video-files/7287757/7287757-hd_1920_1080_25fps.mp4",
  },
];

const SHOPPER_FEATURES = [
  {
    title: "Virtual try-on",
    desc: "Increase your visitors' confidence to buy with lightning-fast & accurate virtual try-on.",
    videoUrl: "https://videos.pexels.com/video-files/9167976/9167976-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Your brand's ChatGPT",
    desc: "Trained on your catalog, tuned to your customers, built to sell.",
    videoUrl: "https://videos.pexels.com/video-files/5981981/5981981-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Know your shoppers",
    desc: "Collect subscribers & build rich customer profiles.",
    videoUrl: "https://videos.pexels.com/video-files/6994766/6994766-hd_1920_1080_25fps.mp4",
  },
];

function FeatureRow({ title, desc, videoUrl, reverse = false }: {
  title: string; desc: string; videoUrl: string; reverse?: boolean;
}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row",
      gap: "64px",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "64px 0",
      borderBottom: "1px solid #f0f0f0",
    }}>
      <div style={{ flex: "1 1 360px", minWidth: 0 }}>
        <h3 style={{
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "18px",
          color: "#000",
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: "1.05rem",
          color: "#555",
          lineHeight: 1.75,
          marginBottom: "28px",
        }}>
          {desc}
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#" className="btn-black">
            Get AI Player for free
          </a>
          <a href="#" style={{
            color: "#000",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "12px 0",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}>
            Learn more <span style={{ fontSize: "1.1rem" }}>→</span>
          </a>
        </div>
      </div>
      <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
        <div className="phone-frame" style={{ width: "280px", height: "560px" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

function ProductBlock({ id, label, tagBg, features }: {
  id: string; label: string; tagBg: string;
  features: { title: string; desc: string; videoUrl: string }[];
}) {
  return (
    <div id={id} style={{ padding: "80px 0 40px" }}>
      <div className="section-tag" style={{ background: tagBg, color: "#000" }}>
        {label}
      </div>
      {features.map((f, i) => (
        <FeatureRow key={i} {...f} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}

export default function ProductSection() {
  return (
    <section style={{ background: "#fff", padding: "0 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ProductBlock
          id="ai-player"
          label="AI Player · Shoppable videos"
          tagBg="#e8f4ff"
          features={PLAYER_FEATURES}
        />
        <ProductBlock
          id="ai-studio"
          label="AI Studio · Create AI images & videos"
          tagBg="#f3e8ff"
          features={STUDIO_FEATURES}
        />
        <ProductBlock
          id="ai-shopper"
          label="AI Shopper · AI sales chatbot"
          tagBg="#e8fff0"
          features={SHOPPER_FEATURES}
        />
      </div>
    </section>
  );
}
