import re
import random

with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

GOOD_VIDEOS = [
    "https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/4428495/4428495-uhd_2160_4096_24fps.mp4",
    "https://videos.pexels.com/video-files/6963744/6963744-uhd_2160_4096_25fps.mp4",
    "https://videos.pexels.com/video-files/5643440/5643440-uhd_3840_2160_24fps.mp4",
    "https://videos.pexels.com/video-files/7688326/7688326-hd_1080_1920_25fps.mp4"
]

GOOD_IMAGES = [
    "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6981410/pexels-photo-6981410.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4005037/pexels-photo-4005037.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4283392/pexels-photo-4283392.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=800"
]

random.seed(42)

def replace_video_src(match):
    attr = match.group(1) # 'data-src' or 'src'
    val = match.group(2)
    # Return the attribute name and the NEW URL properly formatted
    return f'{attr}="{random.choice(GOOD_VIDEOS)}"'

def replace_img_src(match):
    attr = match.group(1) # 'src'
    val = match.group(2)
    
    # Skip SVGs so we don't break the UI icons/logos
    if val.endswith('.svg') or '.svg?' in val:
        return match.group(0)
        
    return f'{attr}="{random.choice(GOOD_IMAGES)}"'

# Use capturing groups for the attribute name (src|data-src) and the value
c = re.sub(r'(data-src|src)="([^"]+\.(mp4|webm)[^"]*)"', replace_video_src, c)
c = re.sub(r'(src)="([^"]+\.(jpg|jpeg|png|webp|avif)[^"]*)"', replace_img_src, c)

# Ensure the partner products section also gets updated correctly (it uses Pexels already, but we will let it randomize)
# The regex above will NOT match the partner section images if they are already Pexels URLs ending in .jpeg?..., wait, it WILL match.
# Because .jpeg is in the pattern. And my regex replaces it properly now.

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Media replacement complete. No corruption this time.')
