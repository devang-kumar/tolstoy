with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Find the footer section start (escaped in the webflow HTML)
footer_start = c.find('<footer')
if footer_start == -1:
    print('ERROR: could not find footer')
    exit(1)
print('Footer found at index:', footer_start)

# Find the end of the entire raw html (or the last closing </div> of page-wrapper)
# The footer goes to end of page
footer_html = c[footer_start:]

# Build a clean, compact replacement footer
COMPACT_FOOTER = """<footer style="background:#111;color:#fff;padding:40px;border-top:1px solid #222;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-bottom:28px;">
      <!-- Logo -->
      <div style="font-size:1.4rem;font-weight:800;letter-spacing:-0.04em;">Tolstoy</div>
      <!-- Nav Links -->
      <div style="display:flex;gap:24px;flex-wrap:wrap;">
        <a href="/product/ai-player" style="color:#aaa;font-size:0.875rem;text-decoration:none;">AI Player</a>
        <a href="/product/ai-studio" style="color:#aaa;font-size:0.875rem;text-decoration:none;">AI Studio</a>
        <a href="/product/ai-shopper" style="color:#aaa;font-size:0.875rem;text-decoration:none;">AI Shopper</a>
        <a href="/pricing" style="color:#aaa;font-size:0.875rem;text-decoration:none;">Pricing</a>
        <a href="/customer-stories" style="color:#aaa;font-size:0.875rem;text-decoration:none;">Case studies</a>
        <a href="/blog" style="color:#aaa;font-size:0.875rem;text-decoration:none;">Blog</a>
      </div>
      <!-- CTA -->
      <a href="#" style="background:#fff;color:#111;padding:10px 22px;border-radius:100px;font-weight:700;font-size:0.875rem;text-decoration:none;">Get Tolstoy for free</a>
    </div>

    <!-- Partner Products row -->
    <div style="border-top:1px solid #222;padding-top:20px;margin-bottom:20px;display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
      <span style="color:#555;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Partner Products</span>
      <a href="https://grandeapp.com" target="_blank" style="color:#aaa;font-size:0.875rem;text-decoration:none;">Grandeapp.com</a>
      <a href="https://fitadai.com" target="_blank" style="color:#aaa;font-size:0.875rem;text-decoration:none;">fitADai.com</a>
    </div>

    <!-- Bottom bar -->
    <div style="border-top:1px solid #222;padding-top:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;">
      <p style="color:#555;font-size:0.8rem;margin:0;">&copy; 2026 Tolstoy Inc. All rights reserved.</p>
      <div style="display:flex;gap:20px;">
        <a href="/privacy-policy" style="color:#555;font-size:0.8rem;text-decoration:none;">Privacy Policy</a>
        <a href="/terms-of-service" style="color:#555;font-size:0.8rem;text-decoration:none;">Terms of Service</a>
        <a href="/cookie-policy" style="color:#555;font-size:0.8rem;text-decoration:none;">Cookie Policy</a>
      </div>
      <div style="display:flex;gap:16px;">
        <a href="https://x.com/gotolstoy" target="_blank" style="color:#555;font-size:0.8rem;text-decoration:none;">Twitter / X</a>
        <a href="https://www.instagram.com/gotolstoy/" target="_blank" style="color:#555;font-size:0.8rem;text-decoration:none;">Instagram</a>
        <a href="https://www.linkedin.com/company/gotolstoy" target="_blank" style="color:#555;font-size:0.8rem;text-decoration:none;">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>"""

# Replace the old footer with the new compact one
c = c[:footer_start] + COMPACT_FOOTER

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Footer replaced! New size:', len(c))
