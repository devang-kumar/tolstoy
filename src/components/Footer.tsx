import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div>
            <div className="site-footer-brand">
              <span className="nav-logo-mark">T</span>
              Tolstoy
            </div>
            <p className="site-footer-copy">© {new Date().getFullYear()} Tolstoy. All rights reserved.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li>
                <Link href="/">AI Player</Link>
              </li>
              <li>
                <Link href="#ai-studio">AI Studio</Link>
              </li>
              <li>
                <Link href="#ai-shopper">AI Shopper</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Other products</h4>
            <ul>
              {PRODUCTS.partners.map((p) => (
                <li key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
