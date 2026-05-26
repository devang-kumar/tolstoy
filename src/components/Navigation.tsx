"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-glass">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-mark">T</span>
          <span>Tolstoy</span>
        </Link>

        <nav className="nav-links">
          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button type="button" className="nav-dropdown-trigger">
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {open && (
              <div className="nav-dropdown">
                {PRODUCTS.tolstoy.map((p) => (
                  <Link key={p.name} href={p.href} className="nav-dropdown-item">
                    <span className="nav-dropdown-icon" style={{ background: p.gradient }}>
                      {p.icon}
                    </span>
                    <span>
                      <strong>{p.name}</strong>
                      <small>{p.sub}</small>
                    </span>
                  </Link>
                ))}

                <div className="nav-dropdown-divider">
                  <span>Other products</span>
                </div>

                {PRODUCTS.partners.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-dropdown-item"
                  >
                    <span className="nav-dropdown-icon" style={{ background: p.gradient }}>
                      {p.icon}
                    </span>
                    <span>
                      <strong>{p.name}</strong>
                      <small>{p.sub}</small>
                    </span>
                    <span className="nav-external">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link href="#pricing">Pricing</Link>
          <Link href="#integrations">Integrations</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className="nav-actions">
          <Link href="#" className="nav-login">
            Sign in
          </Link>
          <Link href="#" className="btn-secondary nav-btn-sm">
            Talk to sales
          </Link>
          <Link href="#" className="btn-primary nav-btn-sm">
            Get Tolstoy for free
          </Link>
        </div>
      </div>
    </header>
  );
}
