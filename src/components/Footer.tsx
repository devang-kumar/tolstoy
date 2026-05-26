"use client";

import React from "react";
import { site } from "@/lib/site";

const FOOTER_LINKS = {
  Product: [
    { label: "AI Studio", href: "#ai-studio" },
    { label: "AI Player", href: "#ai-player" },
    { label: "AI Shopper", href: "#ai-shopper" },
    { label: "Gallery", href: "#" },
  ],
  Company: [
    { label: "Developer", href: "#developer" },
    { label: "Contact", href: `mailto:${site.author.email}` },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  const { author } = site;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
                <rect width="28" height="28" rx="8" fill="#fff" />
                <path d="M8 8h12M14 8v12" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              Tolstoy
            </div>
            <p>The AI Commerce platform for modern brands.</p>
            <p className="footer-built">
              Built by{" "}
              <a href="#developer" className="footer-author-link">
                {author.name}
              </a>
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="footer-col-title">{section}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="footer-col-title">My profiles</h3>
            <ul>
              {author.profiles.map((p) => (
                <li key={p.id}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tolstoy demo · {author.name}</span>
          <div className="footer-social">
            {author.profiles.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.label}
              >
                {p.label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
