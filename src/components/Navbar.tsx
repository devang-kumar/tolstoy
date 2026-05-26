"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "70px",
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #e8e8e8" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "-0.02em" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#000" />
          <path d="M8 8h16M16 8v16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
        Tolstoy
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "36px", alignItems: "center", fontSize: "0.95rem", fontWeight: 500 }}
        className="desktop-nav">
        <div style={{ position: "relative", display: "inline-block" }}>
          <a href="#" style={{ color: "#000", opacity: 0.8 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}>
            Product
          </a>
        </div>
        <a href="https://grandeapp.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000", opacity: 0.8 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}>
          Grandeapp.com
        </a>
        <a href="https://fitadai.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000", opacity: 0.8 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}>
          fitADai.com
        </a>
        <a href="#" style={{ color: "#000", opacity: 0.8 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}>
          Resources
        </a>
        <a href="#" style={{ color: "#000", opacity: 0.8 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}>
          Pricing
        </a>
      </div>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <a href="#" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#000", padding: "8px 16px" }}>
          Log in
        </a>
        <a href="#" className="btn-black">
          Get started free
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
