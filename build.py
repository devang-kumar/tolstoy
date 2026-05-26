import os

html_path = r'C:\Users\devan\.gemini\antigravity-ide\brain\a1d32cc5-a525-42c0-b08b-a450045e2693\.system_generated\steps\93\content.md'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract from <div class="page-wrapper">
start_tag = '<div class="page-wrapper">'
start_idx = content.find(start_tag)
if start_idx == -1:
    print("Error: Could not find page-wrapper")
    exit(1)

# Find end of body
end_idx = content.find('</body>')
if end_idx == -1:
    end_idx = len(content)

raw_html = content[start_idx:end_idx]

# Inject Grandeapp.com and fitADai.com into the nav column
# Search for <div class="nav__dropdown-column">
col_tag = '<div class="nav__dropdown-column">'
col_idx = raw_html.find(col_tag)

if col_idx != -1:
    # Build custom links using the same styling classes found in their code
    custom_links = """
<a href="#" class="dropdown-menu__link w-inline-block"><div class="dropdown-menu__title-wrap"><div class="nav__icon is--ai-player"><div fa-icon="xsmall" class="fa-icon regular">🔥</div></div><div class="p-body">Grandeapp.com <span class="p-tiny text-secondary">/ Partner Product</span></div></div></a>
<a href="#" class="dropdown-menu__link w-inline-block"><div class="dropdown-menu__title-wrap"><div class="nav__icon is--ai-studio"><div fa-icon="xsmall" class="fa-icon regular">💪</div></div><div class="p-body">fitADai.com <span class="p-tiny text-secondary">/ Partner Product</span></div></div></a>
"""
    # Insert custom links right after the column tag
    insert_pos = col_idx + len(col_tag)
    raw_html = raw_html[:insert_pos] + custom_links + raw_html[insert_pos:]
else:
    print("Warning: Could not find nav__dropdown-column")

# Remove next.js specific issues if any, but since we are injecting via dangerouslySetInnerHTML it's mostly fine.
# We also need to extract all styles and scripts from <head> and put them in layout.tsx or at the top of raw.html
# Let's extract everything from <head> up to </head>
head_start = content.find('<head>')
head_end = content.find('</head>')
if head_start != -1 and head_end != -1:
    head_html = content[head_start + len('<head>'):head_end]
    # We will prepend the head styles and links to our raw_html so they load on this page
    # specifically the Webflow CSS
    css_links = []
    for line in head_html.split('<link '):
        if 'rel="stylesheet"' in line:
            css_links.append('<link ' + line.split('>')[0] + '>')
    for line in head_html.split('<style'):
        if '</style>' in line:
            css_links.append('<style' + line.split('</style>')[0] + '</style>')
    
    raw_html = "".join(css_links) + raw_html

# Write to src/app/raw.html
out_path = os.path.join('src', 'app', 'raw.html')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(raw_html)

print("Successfully built raw.html")
