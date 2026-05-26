"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "What is Tolstoy AI Player?",
    a: "AI Player is Tolstoy's shoppable video player for eCommerce websites. It displays your videos in feeds, stories, and carousels across your site, and lets customers add products to cart directly from the video.",
  },
  {
    q: "What can I do with AI Player?",
    a: "Shoppable video feeds on PDPs and homepage, auto-import from TikTok and Instagram, AI-powered product tagging, dynamic media gallery, A/B testing, syndication to Walmart and Shop App, and email/SMS integration through Klaviyo.",
  },
  {
    q: "What results can I expect from AI Player?",
    a: "Brands typically see up to 307% conversion uplift, up to 4x increase in time on site, and up to 3x AOV uplift through improved product discovery.",
  },
  {
    q: "What is the Tolstoy Syndication Network?",
    a: "Tolstoy syndicates shoppable videos to Walmart and Shop App for free. Your videos appear on high-traffic spots like the Walmart homepage carousel and Shop App home feed.",
  },
  {
    q: "What platforms does AI Player integrate with?",
    a: "Shopify, WooCommerce, Magento, BigCommerce, VTEX, Wix, Tapcart, Shop App, Klaviyo, Yotpo, and Gorgias — with one-click installation on Shopify.",
  },
  {
    q: "Will AI Player slow down my site?",
    a: "No. AI Player uses lazy loading, deferred video delivery, and a sub-50KB JavaScript payload. Videos only load when customers scroll to them.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={item.q} className={`faq-item${open === i ? " open" : ""}`}>
              <button type="button" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
