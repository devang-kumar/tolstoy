import re

with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Pexels assets to use for replacements
PEXELS_VIDEOS = [
    "https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4", # Desk / Tech
    "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",   # Scrolling phone
    "https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"    # E-commerce shopping
]

PEXELS_IMAGES = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", # Meeting
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800", # Coding/Tech
    "https://images.pexels.com/photos/3728311/pexels-photo-3728311.jpeg?auto=compress&cs=tinysrgb&w=800", # Phone / Shopping
    "https://images.pexels.com/photos/4382485/pexels-photo-4382485.jpeg?auto=compress&cs=tinysrgb&w=800", # Delivery / Boxes
    "https://images.pexels.com/photos/5098048/pexels-photo-5098048.jpeg?auto=compress&cs=tinysrgb&w=800"  # Analytics / Graphs
]

import random
# Seed to make it consistent across runs
random.seed(42)

def replace_video_src(match):
    # match.group(0) is the entire string like data-src="..." or src="..."
    full_str = match.group(0)
    attr = match.group(1) # 'data-src' or 'src'
    val = match.group(2)
    
    # We only replace if it's not already a pexels URL
    if 'pexels.com' not in val:
        new_val = random.choice(PEXELS_VIDEOS)
        return f'{attr}="{new_val}"'
    return full_str

def replace_img_src(match):
    full_str = match.group(0)
    attr = match.group(1) # 'src'
    val = match.group(2)
    
    # Skip SVGs (they are mostly UI icons and brand logos in the marquee)
    # Replacing these with photos would break the layout completely
    if val.endswith('.svg') or '.svg?' in val:
        return full_str
        
    # Skip if already Pexels
    if 'pexels.com' not in val:
        new_val = random.choice(PEXELS_IMAGES)
        return f'{attr}="{new_val}"'
    return full_str

# Replace video sources: data-src="..." or src="..." inside source tags or video tags
# A regex to match src="<url>" or data-src="<url>" specifically ending in video formats, 
# or just blindly replacing them in any <source> tag.

# Replace <source ... data-src="X" or src="X">
c = re.sub(r'(data-src|src)="([^"]+\.(mp4|webm)[^"]*)"', replace_video_src, c)

# Replace <img ... src="X">
c = re.sub(r'(src)="([^"]+\.(jpg|jpeg|png|webp|avif)[^"]*)"', replace_img_src, c)

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Media replacement complete.')
