"use client";

import React, { useState, useEffect, useCallback } from "react";

const PRODUCTS = [
  {
    label: "AI Player",
    sub: "Shoppable videos & UGC",
    href: "#ai-player",
    icon: "▶",
    color: "#e8f0ff",
  },
  {
    label: "AI Studio",
    sub: "AI images & video",
    href: "#ai-studio",
    icon: "✦",
    color: "#f3e8ff",
  },
  {
    label: "AI Shopper",
    sub: "AI sales chatbot",
    href: "#ai-shopper",
    icon: "◉",
    color: "#e8fff0",
  },
  {
    label: "Templates",
    sub: "Find your inspiration",
    href: "#",
    icon: "◇",
    color: "#fff8e8",
  },
];

const PARTNERS = [
  { label: "Become a partner", href: "#" },
  { label: "Become an affiliate", href: "#" },
];

const NAV_LINKS = [
  { label: "Pricing", href: "#" },
  { label: "Case studies", href: "#" },
  { label: "Developer", href: "#developer" },
  { label: "Gallery", href: "#" },
];

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"products" | "partners" | null>(
    null
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const toggleDropdown = (id: "products" | "partners") => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const dropdownPanel: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    minWidth: 280,
    background: "#fff",
    border: "1px solid #ebebeb",
    borderRadius: 16,
    padding: 12,
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)",
    zIndex: 200,
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid #eee",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.04)" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 clamp(16px, 4vw, 40px)",
            height: 64,
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: "1.2rem",
              letterSpacing: "-0.02em",
              flexShrink: 0,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
              <rect width="28" height="28" rx="8" fill="#000" />
              <path
                d="M8 8h12M14 8v12"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            Tolstoy
          </a>

          {/* Desktop navigation */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                gap: 24,
                alignItems: "center",
                fontSize: "0.875rem",
                fontWeight: 500,
                flex: 1,
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => toggleDropdown("products")}
                  onBlur={() =>
                    setTimeout(() => setOpenDropdown((d) => (d === "products" ? null : d)), 150)
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    font: "inherit",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "8px 4px",
                  }}
                >
                  Products <span style={{ fontSize: "0.6rem" }}>▾</span>
                </button>
                {openDropdown === "products" && (
                  <div style={dropdownPanel}>
                    {PRODUCTS.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        style={{
                          display: "flex",
                          gap: 12,
                          padding: 12,
                          borderRadius: 10,
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <span
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: p.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.85rem",
                            flexShrink: 0,
                          }}
                        >
                          {p.icon}
                        </span>
                        <span>
                          <span style={{ display: "block", fontWeight: 600 }}>
                            {p.label}
                          </span>
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.75rem",
                              color: "#888",
                              marginTop: 2,
                            }}
                          >
                            {p.sub}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {NAV_LINKS.map((item) => (
                <a key={item.label} href={item.href} style={{ padding: "8px 4px", color: "#000" }}>
                  {item.label}
                </a>
              ))}

              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => toggleDropdown("partners")}
                  onBlur={() =>
                    setTimeout(() => setOpenDropdown((d) => (d === "partners" ? null : d)), 150)
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    font: "inherit",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "8px 4px",
                  }}
                >
                  Partners <span style={{ fontSize: "0.6rem" }}>▾</span>
                </button>
                {openDropdown === "partners" && (
                  <div style={{ ...dropdownPanel, minWidth: 220 }}>
                    {PARTNERS.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        style={{
                          display: "block",
                          padding: "10px 12px",
                          borderRadius: 8,
                          fontWeight: 500,
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            {!isMobile && (
              <>
                <a
                  href="#"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    padding: "8px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="btn-black"
                  style={{ fontSize: "0.8rem", padding: "10px 16px" }}
                >
                  Get Tolstoy for free
                </a>
                <a
                  href="#"
                  className="btn-outline"
                  style={{ fontSize: "0.8rem", padding: "10px 16px" }}
                >
                  Talk to sales
                </a>
              </>
            )}

            {isMobile && (
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                >
                  {menuOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu — only mounted when open on mobile */}
      {isMobile && menuOpen && (
        <>
          <div
            role="presentation"
            onClick={closeMenu}
            style={{
              position: "fixed",
              inset: 0,
              top: 64,
              background: "rgba(0,0,0,0.3)",
              zIndex: 98,
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#fff",
              zIndex: 99,
              padding: "24px clamp(16px, 4vw, 40px)",
              overflowY: "auto",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#999",
                marginBottom: 12,
              }}
            >
              PRODUCTS
            </p>
            {PRODUCTS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "14px 0",
                  borderBottom: "1px solid #eee",
                  fontWeight: 600,
                }}
              >
                {p.label}
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "#888",
                    fontWeight: 400,
                    marginTop: 2,
                  }}
                >
                  {p.sub}
                </span>
              </a>
            ))}

            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={closeMenu}
                  style={{ fontWeight: 500, padding: "12px 0" }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#" onClick={closeMenu} style={{ fontWeight: 500, padding: "12px 0" }}>
                Partners
              </a>
            </div>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <a href="#" className="btn-black" style={{ textAlign: "center" }} onClick={closeMenu}>
                Get Tolstoy for free
              </a>
              <a
                href="#"
                className="btn-outline"
                style={{ textAlign: "center" }}
                onClick={closeMenu}
              >
                Talk to sales
              </a>
              <a
                href="#"
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  padding: "12px",
                  fontSize: "0.9rem",
                }}
                onClick={closeMenu}
              >
                Sign in
              </a>
            </div>
          </div>
        </>
      )}

      {/* Spacer so content isn't hidden under fixed header */}
      <div style={{ height: 64 }} aria-hidden />
    </>
  );
}
