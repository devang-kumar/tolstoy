import fs from 'fs';
import path from 'path';

const srcFile = path.join(process.cwd(), 'src', 'data', 'source.html');
const outFile = path.join(process.cwd(), 'src', 'app', 'raw.html');

const content = fs.readFileSync(srcFile, 'utf8');

// ---- Extract HEAD styles ----
const headStart = content.indexOf('<head>');
const headEnd   = content.indexOf('</head>');
const headContent = headStart !== -1 && headEnd !== -1
  ? content.slice(headStart + 6, headEnd)
  : '';

// Grab all <link rel="stylesheet"> tags
const cssLinks = (headContent.match(/<link[^>]+rel="stylesheet"[^>]*\/?>/g) || []).join('\n');

// Grab all <style>...</style> blocks from head
const headStyleBlocks: string[] = [];
let tmp = headContent;
while (true) {
  const s = tmp.indexOf('<style');
  if (s === -1) break;
  const e = tmp.indexOf('</style>', s);
  if (e === -1) break;
  headStyleBlocks.push(tmp.slice(s, e + 8));
  tmp = tmp.slice(e + 8);
}

// ---- Extract BODY ----
const pageStart = content.indexOf('<div class="page-wrapper">');
const bodyEnd   = content.lastIndexOf('</body>');
let body = pageStart !== -1 ? content.slice(pageStart, bodyEnd !== -1 ? bodyEnd : undefined) : '';

// ---- Partner Products Section ----
const partner = `
<section style="padding:100px 40px;background:#f9f9f9;overflow:hidden;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:64px;">
      <p style="font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin:0 0 12px;">Partner Products</p>
      <h2 style="font-size:clamp(2.5rem,5vw,4rem);font-weight:800;letter-spacing:-0.04em;margin:0 0 20px;color:#111;">Products we love</h2>
      <p style="font-size:1.2rem;color:#555;max-width:580px;margin:0 auto;line-height:1.6;">Supercharge your commerce stack with our trusted partner applications.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:32px;">
      <div onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 20px 50px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 24px rgba(0,0,0,0.06)'" style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);transition:transform 0.3s ease,box-shadow 0.3s ease;">
        <div style="background:radial-gradient(50% 50% at 50% 50%,#B2E7FF 9%,rgba(178,231,255,0) 90%),#E6F7FF;height:200px;display:flex;align-items:center;justify-content:center;font-size:4rem;">🏪</div>
        <div style="padding:36px;">
          <p style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;margin:0 0 8px;">Growth Platform</p>
          <h3 style="font-size:2rem;font-weight:800;letter-spacing:-0.03em;margin:0 0 16px;color:#111;">Grandeapp.com</h3>
          <p style="color:#555;line-height:1.6;font-size:1.05rem;margin:0 0 28px;">Scale your e-commerce revenue with our advanced growth platform. Seamlessly integrate and unlock powerful new sales channels.</p>
          <a href="https://grandeapp.com" target="_blank" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" style="display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;padding:12px 24px;border-radius:100px;font-weight:600;font-size:0.95rem;text-decoration:none;">Visit Grandeapp.com &rarr;</a>
        </div>
      </div>
      <div onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 20px 50px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 24px rgba(0,0,0,0.06)'" style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);transition:transform 0.3s ease,box-shadow 0.3s ease;">
        <div style="background:radial-gradient(50% 50% at 50% 50%,#DFB4FD 9%,rgba(223,180,253,0) 90%),#F4E6FE;height:200px;display:flex;align-items:center;justify-content:center;font-size:4rem;">💪</div>
        <div style="padding:36px;">
          <p style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;margin:0 0 8px;">AI Ad Technology</p>
          <h3 style="font-size:2rem;font-weight:800;letter-spacing:-0.03em;margin:0 0 16px;color:#111;">fitADai.com</h3>
          <p style="color:#555;line-height:1.6;font-size:1.05rem;margin:0 0 28px;">AI-driven ad optimization for modern brands. Maximize your ROAS with intelligent targeting and creative performance analytics.</p>
          <a href="https://fitadai.com" target="_blank" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" style="display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;padding:12px 24px;border-radius:100px;font-weight:600;font-size:0.95rem;text-decoration:none;">Visit fitADai.com &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Inject partner section before the footer section
const footerMarker = '<div class="section__footer';
const fi = body.indexOf(footerMarker);
if (fi !== -1) {
  body = body.slice(0, fi) + partner + body.slice(fi);
} else {
  body = body + partner;
}

// Inject custom links into the Products dropdown
// Find the nav dropdown column and add Grandeapp / fitADai after AI Shopper
const customNavLinks = `
<a href="https://grandeapp.com" target="_blank" class="dropdown-menu__link w-inline-block" style="opacity:1!important">
  <div class="dropdown-menu__title-wrap">
    <div class="p-body">Grandeapp.com <span class="p-tiny text-secondary">/ Partner product</span></div>
  </div>
</a>
<a href="https://fitadai.com" target="_blank" class="dropdown-menu__link w-inline-block" style="opacity:1!important">
  <div class="dropdown-menu__title-wrap">
    <div class="p-body">fitADai.com <span class="p-tiny text-secondary">/ Partner product</span></div>
  </div>
</a>
`;

// After the ai-shopper nav link
const aiShopperNavEnd = body.indexOf('/product/ai-shopper');
if (aiShopperNavEnd !== -1) {
  const closingAnchorAfter = body.indexOf('</a>', aiShopperNavEnd);
  if (closingAnchorAfter !== -1) {
    body = body.slice(0, closingAnchorAfter + 4) + customNavLinks + body.slice(closingAnchorAfter + 4);
  }
}

const finalHtml = `${cssLinks}\n${headStyleBlocks.join('\n')}\n${body}`;
fs.writeFileSync(outFile, finalHtml, 'utf8');
console.log('Done. Output:', outFile, '| Size:', finalHtml.length);
