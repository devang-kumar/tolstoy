const img = (id: string, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const FALLBACK_VIDEO =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const FALLBACK_VIDEO_2 =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

const FALLBACK_VIDEO_3 =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";

const px = (id: number) =>
  `https://videos.pexels.com/video-files/${id}/${id}-sd_640_360_30fps.mp4`;

const pxHd = (id: number) =>
  `https://videos.pexels.com/video-files/${id}/${id}-hd_1280_720_30fps.mp4`;

export const images = {
  heroPlayer: img("2983464"),
  heroStudio: img("7671166"),
  heroShopper: img("5632402"),
  player1: img("1926769", 600),
  player2: img("994523", 600),
  player3: img("1464625", 600),
  studio1: img("3183150", 600),
  studio2: img("1036623", 600),
  studio3: img("1126993", 600),
  shopper1: img("1536619", 600),
  shopper2: img("985635", 600),
  shopper3: img("14884599", 600),
  cross1: img("1536619", 500),
  cross2: img("7671166", 500),
  cross3: img("2983464", 500),
  gallery: [
    img("994835", 500),
    img("157675", 500),
    img("606506", 500),
    img("298863", 500),
    img("2653876", 500),
    img("4210860", 500),
    img("6311652", 500),
    img("768006", 500),
    img("1927259", 500),
    img("3754650", 500),
    img("4467687", 500),
    img("5704841", 500),
  ],
  brand: [
    img("1926769", 200),
    img("994523", 200),
    img("1464625", 200),
    img("1036623", 200),
    img("1126993", 200),
    img("1536619", 200),
    img("985635", 200),
    img("5632402", 200),
    img("994835", 200),
    img("606506", 200),
  ],
} as const;

export type VideoSource = {
  primary: string;
  fallback: string;
  poster?: string;
};

function v(primary: string, fallback: string, poster?: string): VideoSource {
  return { primary, fallback, poster };
}

export const videos = {
  hero: v(pxHd(6774107), FALLBACK_VIDEO, images.heroPlayer),
  player: v(px(4364943), FALLBACK_VIDEO, images.player1),
  studio: v(px(5653459), FALLBACK_VIDEO_2, images.studio1),
  shopper: v(px(3205917), FALLBACK_VIDEO_3, images.shopper1),
  phone: v(px(6774107), FALLBACK_VIDEO, images.heroPlayer),
  fashion1: v(pxHd(5499745), FALLBACK_VIDEO, images.gallery[0]),
  fashion2: v(px(7616786), FALLBACK_VIDEO_2, images.gallery[3]),
  retail: v(px(5080877), FALLBACK_VIDEO_3, images.gallery[1]),
  product: v(px(3945138), FALLBACK_VIDEO, images.gallery[2]),
  lifestyle: v(px(3254023), FALLBACK_VIDEO_2, images.gallery[4]),
  beauty: v(px(6164754), FALLBACK_VIDEO_3, images.gallery[5]),
  shopping: v(px(4434242), FALLBACK_VIDEO, images.gallery[6]),
} as const;

export const interactiveTiles = [
  { image: images.heroPlayer, video: videos.player, label: "Shoppable UGC" },
  { image: images.heroStudio, video: videos.studio, label: "AI Studio" },
  { image: images.heroShopper, video: videos.shopper, label: "AI Shopper" },
  { image: images.player1, video: videos.fashion1, label: "Fashion reels" },
  { image: images.studio2, video: videos.retail, label: "Retail stories" },
  { image: images.shopper2, video: videos.beauty, label: "Beauty try-on" },
  { image: images.gallery[0], video: videos.product, label: "Product focus" },
  { image: images.gallery[1], video: videos.lifestyle, label: "Lifestyle" },
  { image: images.gallery[2], video: videos.shopping, label: "Live shopping" },
  { image: images.gallery[3], video: videos.fashion2, label: "Runway" },
  { image: images.gallery[4], video: videos.player, label: "PDP video" },
  { image: images.gallery[5], video: videos.studio, label: "Catalog AI" },
] as const;

export const featureMedia = {
  player: [
    { image: images.player1, video: videos.player },
    { image: images.player2, video: videos.fashion1 },
    { image: images.player3, video: videos.retail },
  ],
  studio: [
    { image: images.studio1, video: videos.studio },
    { image: images.studio2, video: videos.product },
    { image: images.studio3, video: videos.lifestyle },
  ],
  shopper: [
    { image: images.shopper1, video: videos.shopper },
    { image: images.shopper2, video: videos.beauty },
    { image: images.shopper3, video: videos.shopping },
  ],
  cross: [
    { image: images.cross1, video: videos.fashion1 },
    { image: images.cross2, video: videos.beauty },
    { image: images.cross3, video: videos.product },
  ],
} as const;
