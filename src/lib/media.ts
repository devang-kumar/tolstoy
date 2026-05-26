/** High-quality images (Pexels) + self-hosted HD videos (always load from /public) */

const img = (id: string, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&dpr=2`;

const vid = (file: string) => `/media/videos/${file}`;

const DEFAULT_VIDEO = vid("hero.mp4");

export const images = {
  heroPlayer: img("2983464", 1600),
  heroStudio: img("7671166", 1600),
  heroShopper: img("5632402", 1600),
  player1: img("1926769", 1200),
  player2: img("994523", 1200),
  player3: img("1464625", 1200),
  studio1: img("3183150", 1200),
  studio2: img("1036623", 1200),
  studio3: img("1126993", 1200),
  shopper1: img("1536619", 1200),
  shopper2: img("985635", 1200),
  shopper3: img("14884599", 1200),
  cross1: img("1536619", 1000),
  cross2: img("7671166", 1000),
  cross3: img("2983464", 1000),
  gallery: [
    img("994835", 900),
    img("157675", 900),
    img("606506", 900),
    img("298863", 900),
    img("2653876", 900),
    img("4210860", 900),
    img("6311652", 900),
    img("768006", 900),
    img("1927259", 900),
    img("3754650", 900),
    img("4467687", 900),
    img("5704841", 900),
  ],
  brand: [
    img("1926769", 400),
    img("994523", 400),
    img("1464625", 400),
    img("1036623", 400),
    img("1126993", 400),
    img("1536619", 400),
    img("985635", 400),
    img("5632402", 400),
    img("994835", 400),
    img("606506", 400),
  ],
} as const;

export type VideoSource = {
  primary: string;
  fallback: string;
  poster?: string;
};

function v(file: string, fallback = DEFAULT_VIDEO, poster?: string): VideoSource {
  return { primary: vid(file), fallback: vid(fallback), poster };
}

export const videos = {
  hero: v("hero.mp4", "hero.mp4", images.heroPlayer),
  player: v("player.mp4", "fashion.mp4", images.player1),
  studio: v("studio.mp4", "hero.mp4", images.studio1),
  shopper: v("shopper.mp4", "player.mp4", images.shopper1),
  phone: v("fashion.mp4", "hero.mp4", images.heroPlayer),
  fashion1: v("fashion.mp4", "player.mp4", images.gallery[0]),
  fashion2: v("lifestyle.mp4", "fashion.mp4", images.gallery[3]),
  retail: v("retail.mp4", "player.mp4", images.gallery[1]),
  product: v("product.mp4", "studio.mp4", images.gallery[2]),
  lifestyle: v("lifestyle.mp4", "fashion.mp4", images.gallery[4]),
  beauty: v("beauty.mp4", "shopper.mp4", images.gallery[5]),
  shopping: v("shopping.mp4", "shopper.mp4", images.gallery[6]),
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
