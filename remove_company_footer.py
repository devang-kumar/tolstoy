with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Find the start of the COMPANY column
start_marker = '<div class="footer__column"><div class="footer__overline"><div class="overline">COMPANY</div></div>'
start_idx = c.find(start_marker)

if start_idx == -1:
    print('ERROR: Could not find COMPANY section')
    exit(1)

# We need to find the closing </div> of this footer__column.
# Let's count divs starting from start_idx
depth = 0
pos = start_idx
end_idx = -1
while pos < len(c):
    if c[pos:pos+4] == '<div':
        depth += 1
    elif c[pos:pos+6] == '</div>':
        depth -= 1
        if depth == 0:
            end_idx = pos + 6
            break
    pos += 1

if end_idx == -1:
    print('ERROR: Could not find end of COMPANY section')
    exit(1)

print(f'Removing from {start_idx} to {end_idx}')
c = c[:start_idx] + c[end_idx:]

# Also remove the CSS fix that we injected earlier for the COMPANY column
css_start = c.find('/* Fix: Footer child-top must be a flex/grid row so COMPANY aligns with other columns */')
if css_start != -1:
    css_tag_start = c.rfind('<style>', 0, css_start)
    css_tag_end = c.find('</style>', css_start) + 8
    print(f'Removing CSS fix from {css_tag_start} to {css_tag_end}')
    c = c[:css_tag_start] + c[css_tag_end:]

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done!')
