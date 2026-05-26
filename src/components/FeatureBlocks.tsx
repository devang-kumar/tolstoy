"use client";

import React from "react";
import Image from "next/image";
import MediaVideo from "@/components/MediaVideo";
import { videos, images } from "@/lib/media";

const BLOCKS = [
  {
    eyebrow: "On your e-commerce website",
    title: "Shoppable Videos",
    body: "Social proof builds trust; video converts. Boost conversions and engagement by adding video feeds and stories to your e-commerce site. Auto-import clips from TikTok, Instagram, or Drive, match products and variants with AI-powered tagging, and enable seamless in-video shopping.",
    cta: "Add videos to your site",
    sub: "Try it yourself!",
    image: images.player1,
    video: videos.player,
    reverse: false,
  },
  {
    eyebrow: "Transform your PDP",
    title: "Dynamic media gallery",
    body: "Transform your most valuable real estate into a dynamic, interactive experience. Automatically tailor your PDP gallery: show different images and videos based on each visitor's behavior, location, or channel. Capture every interaction, then A/B-test creatives and automatically serve the top performers.",
    cta: "Get started for free",
    image: images.studio2,
    video: videos.studio,
    reverse: true,
  },
  {
    eyebrow: "Tolstoy's Syndication Network",
    title: "Your videos on Walmart and Shop app",
    body: "Reach millions of shoppers by featuring your videos on high-traffic spots — Walmart's homepage and the Shop app home feed — at no cost. Tolstoy syndicates shoppable videos to Walmart for free, putting your content where it delivers real results with zero extra work.",
    cta: "Syndicate videos for free",
    image: images.cross2,
    video: videos.shopping,
    reverse: false,
  },
];

export default function FeatureBlocks() {
  return (
    <div className="feature-blocks">
      {BLOCKS.map((block) => (
        <section
          key={block.title}
          className={`feature-block${block.reverse ? " feature-block-reverse" : ""}`}
        >
          <div className="feature-block-copy">
            <p className="feature-eyebrow">{block.eyebrow}</p>
            <h2>{block.title}</h2>
            <p className="feature-body">{block.body}</p>
            <div className="feature-block-actions">
              <a href="#" className="btn-primary">
                {block.cta}
              </a>
              {block.sub && (
                <a href="#" className="feature-link">
                  {block.sub}
                </a>
              )}
            </div>
          </div>
          <div className="feature-block-media">
            <div className="feature-media-frame">
              <Image src={block.image} alt={block.title} fill sizes="(max-width: 900px) 50vw" />
              <div className="feature-media-video">
                <MediaVideo source={block.video} poster={block.image} autoPlay visible />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
