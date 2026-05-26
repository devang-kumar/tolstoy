with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

PARTNER = """
<section style="padding:80px 40px;background:#fff;overflow:hidden;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:56px;">
      <p style="font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin:0 0 12px;">Partner Products</p>
      <h2 style="font-size:clamp(2rem,4vw,3.2rem);font-weight:800;letter-spacing:-0.04em;margin:0 0 16px;color:#111;">Products we love</h2>
      <p style="font-size:1.1rem;color:#666;max-width:520px;margin:0 auto;line-height:1.6;">Supercharge your commerce stack with our trusted partner applications.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;">
      <div onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 16px 48px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.06)'" style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #f0f0f0;transition:transform 0.25s ease,box-shadow 0.25s ease;">
        <div style="height:200px;overflow:hidden;position:relative;"><img src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="Grandeapp" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"/></div>
        <div style="padding:28px 32px;">
          <p style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;margin:0 0 6px;">Growth Platform</p>
          <h3 style="font-size:1.6rem;font-weight:800;letter-spacing:-0.03em;margin:0 0 12px;color:#111;">Grandeapp.com</h3>
          <p style="color:#666;line-height:1.6;font-size:0.95rem;margin:0 0 24px;">Scale your e-commerce revenue with our advanced growth platform. Seamlessly integrate to unlock powerful new sales channels.</p>
          <a href="https://grandeapp.com" target="_blank" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" style="display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;padding:10px 20px;border-radius:100px;font-weight:600;font-size:0.875rem;text-decoration:none;">Visit Grandeapp.com &#8594;</a>
        </div>
      </div>
      <div onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 16px 48px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.06)'" style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #f0f0f0;transition:transform 0.25s ease,box-shadow 0.25s ease;">
        <div style="height:200px;overflow:hidden;position:relative;"><img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="fitADai" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"/></div>
        <div style="padding:28px 32px;">
          <p style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#888;margin:0 0 6px;">AI Ad Technology</p>
          <h3 style="font-size:1.6rem;font-weight:800;letter-spacing:-0.03em;margin:0 0 12px;color:#111;">fitADai.com</h3>
          <p style="color:#666;line-height:1.6;font-size:0.95rem;margin:0 0 24px;">AI-driven ad optimization for modern brands. Maximize your ROAS with intelligent targeting and creative analytics.</p>
          <a href="https://fitadai.com" target="_blank" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" style="display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;padding:10px 20px;border-radius:100px;font-weight:600;font-size:0.875rem;text-decoration:none;">Visit fitADai.com &#8594;</a>
        </div>
      </div>
    </div>
  </div>
</section>
"""

# Remove old partner section (from both locations if present)
while 'Partner Products' in c:
    start = c.rfind('<section', 0, c.find('Partner Products'))
    end = c.find('</section>', c.find('Partner Products')) + len('</section>')
    if start != -1 and end > start:
        c = c[:start] + c[end:]
    else:
        break

# Find the end of logos-marquee-wrapper (the closing </div> after the last </section>)
marker = 'section__logos-marquee-wrapper'
idx = c.find(marker)
if idx == -1:
    print('ERROR: Could not find marquee wrapper')
    exit(1)

# Find the closing </div> of the outer marquee wrapper div
# Structure: <div class="section__logos-marquee-wrapper...">...<section>...</section></div>
# Walk forward from the section__logos-marquee-wrapper to find its closing tag
depth = 0
pos = idx
while pos < len(c):
    if c[pos:pos+4] == '<div':
        depth += 1
    elif c[pos:pos+6] == '</div>':
        depth -= 1
        if depth == 0:
            insert_at = pos + 6
            break
    pos += 1

print(f'Inserting partner section at index {insert_at}')
print('Context before:', repr(c[insert_at-80:insert_at]))
print('Context after:', repr(c[insert_at:insert_at+80]))

c = c[:insert_at] + PARTNER + c[insert_at:]

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done! New size:', len(c))
