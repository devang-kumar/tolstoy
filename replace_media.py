import re
import random

with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

GOOD_VIDEOS = [
    "https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/4428495/4428495-uhd_2160_4096_24fps.mp4",
    "https://videos.pexels.com/video-files/6963744/6963744-uhd_2160_4096_25fps.mp4",
    "https://videos.pexels.com/video-files/5643440/5643440-uhd_3840_2160_24fps.mp4",
    "https://videos.pexels.com/video-files/7688326/7688326-hd_1080_1920_25fps.mp4",
    "https://videos.pexels.com/video-files/6981415/6981415-uhd_2160_4096_25fps.mp4",
    "https://videos.pexels.com/video-files/6169002/6169002-hd_1080_1920_25fps.mp4"
]

GOOD_IMAGES = [
    "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6981410/pexels-photo-6981410.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4005037/pexels-photo-4005037.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4283392/pexels-photo-4283392.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1515378904285-bba69e5d4ce0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
]

random.seed(999)

def replace_img_tag(match):
    tag = match.group(0)
    
    # Don't replace SVGs
    if '.svg' in tag:
        return tag
        
    # Replace src
    new_src = random.choice(GOOD_IMAGES)
    # The original regex for replacing src inside the tag
    tag = re.sub(r'src="[^"]+"', f'src="{new_src}"', tag)
    
    # CRITICAL: Webflow uses srcset which overrides src! We must delete it.
    tag = re.sub(r'srcset="[^"]+"', '', tag)
    tag = re.sub(r'sizes="[^"]+"', '', tag)
    
    return tag

# Find all full <img ...> tags
c = re.sub(r'<img[^>]+>', replace_img_tag, c)


def replace_video_src(match):
    attr = match.group(1) 
    return f'{attr}="{random.choice(GOOD_VIDEOS)}"'

# Replace all video sources
c = re.sub(r'(data-src|src)="([^"]+\.(mp4|webm)[^"]*)"', replace_video_src, c)


with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Media replacement with srcset removal complete.')
