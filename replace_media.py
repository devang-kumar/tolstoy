import re
import random

with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Expanded, highly curated list of E-Commerce, Fashion, Mobile App, and Creator videos
GOOD_VIDEOS = [
    "https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4", # Modern tech / hero
    "https://videos.pexels.com/video-files/4428495/4428495-uhd_2160_4096_24fps.mp4", # Woman swiping/shopping on phone
    "https://videos.pexels.com/video-files/6963744/6963744-uhd_2160_4096_25fps.mp4", # Fashion / clothing app browsing
    "https://videos.pexels.com/video-files/5643440/5643440-uhd_3840_2160_24fps.mp4", # Mobile card payment / checkout
    "https://videos.pexels.com/video-files/7688326/7688326-hd_1080_1920_25fps.mp4", # Retail / browsing clothes
    "https://videos.pexels.com/video-files/6981415/6981415-uhd_2160_4096_25fps.mp4", # Scanning fashion item
    "https://videos.pexels.com/video-files/6169002/6169002-hd_1080_1920_25fps.mp4"   # Influencer talking to camera
]

# Expanded, highly curated list of E-Commerce, Fashion, and Influencer photos
GOOD_IMAGES = [
    # Pexels
    "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800", # Fashion / clothes rack
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800", # Phone displaying e-commerce app
    "https://images.pexels.com/photos/6981410/pexels-photo-6981410.jpeg?auto=compress&cs=tinysrgb&w=800", # Checkout screen / cart
    "https://images.pexels.com/photos/4005037/pexels-photo-4005037.jpeg?auto=compress&cs=tinysrgb&w=800", # Modern retail store
    "https://images.pexels.com/photos/4283392/pexels-photo-4283392.jpeg?auto=compress&cs=tinysrgb&w=800", # Creator recording video
    "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=800", # Woman holding shopping bags looking at phone
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", # Office/collaboration
    
    # Unsplash (Highly relevant e-commerce & fashion images)
    "https://images.unsplash.com/photo-1515378904285-bba69e5d4ce0?auto=format&fit=crop&w=800&q=80", # Clothing rack fashion
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", # Woman with shopping bags
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80", # Swiping credit card on mobile phone
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",   # Retail POS system
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"    # Modern clothing store
]

random.seed(999) # Change seed to generate new placement

def replace_video_src(match):
    attr = match.group(1) 
    return f'{attr}="{random.choice(GOOD_VIDEOS)}"'

def replace_img_src(match):
    attr = match.group(1) 
    val = match.group(2)
    if val.endswith('.svg') or '.svg?' in val:
        return match.group(0)
    return f'{attr}="{random.choice(GOOD_IMAGES)}"'

# Replace all video sources (we catch both pexels URLs and anything else ending in mp4/webm that might have slipped through)
c = re.sub(r'(data-src|src)="([^"]+\.(mp4|webm)[^"]*)"', replace_video_src, c)

# Replace all image sources (including previously injected pexels and unsplash images)
c = re.sub(r'(src)="([^"]+images\.pexels\.com[^"]+)"', replace_img_src, c)
c = re.sub(r'(src)="([^"]+images\.unsplash\.com[^"]+)"', replace_img_src, c)

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated media with expanded high-quality variety.')
