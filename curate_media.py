import re
import random

with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Highly curated, e-commerce, fashion, and mobile video specific assets
GOOD_VIDEOS = [
    "https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4", # Modern tech / hero
    "https://videos.pexels.com/video-files/4428495/4428495-uhd_2160_4096_24fps.mp4", # Woman swiping/shopping on phone
    "https://videos.pexels.com/video-files/6963744/6963744-uhd_2160_4096_25fps.mp4", # Fashion / clothing app browsing
    "https://videos.pexels.com/video-files/5643440/5643440-uhd_3840_2160_24fps.mp4", # Mobile card payment / checkout
    "https://videos.pexels.com/video-files/7688326/7688326-hd_1080_1920_25fps.mp4"    # Retail / browsing clothes
]

GOOD_IMAGES = [
    "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800", # Fashion / clothes rack
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800", # Phone displaying e-commerce app
    "https://images.pexels.com/photos/6981410/pexels-photo-6981410.jpeg?auto=compress&cs=tinysrgb&w=800", # Checkout screen / cart
    "https://images.pexels.com/photos/4005037/pexels-photo-4005037.jpeg?auto=compress&cs=tinysrgb&w=800", # Modern retail store
    "https://images.pexels.com/photos/4283392/pexels-photo-4283392.jpeg?auto=compress&cs=tinysrgb&w=800", # Creator recording video
    "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=800"  # Woman holding shopping bags looking at phone
]

random.seed(123)

def replace_video(match):
    # Match group 1 is the full URL
    return match.group(0).replace(match.group(1), random.choice(GOOD_VIDEOS))

def replace_image(match):
    # Match group 1 is the full URL
    return match.group(0).replace(match.group(1), random.choice(GOOD_IMAGES))

# Replace existing pexels videos
c = re.sub(r'(data-src|src)="([^"]+videos\.pexels\.com[^"]+)"', replace_video, c)

# Replace existing pexels images
c = re.sub(r'(src)="([^"]+images\.pexels\.com[^"]+)"', replace_image, c)

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated to highly relevant e-commerce media.')
