export const PRODUCTS = {
  tolstoy: [
    {
      name: "AI Player",
      sub: "Shoppable videos & UGC",
      href: "/",
      gradient: "var(--purple-gradient)",
      icon: "▶",
    },
    {
      name: "AI Studio",
      sub: "AI images & video",
      href: "#ai-studio",
      gradient: "var(--blue-gradient)",
      icon: "✦",
    },
    {
      name: "AI Shopper",
      sub: "AI sales chatbot",
      href: "#ai-shopper",
      gradient: "var(--green-gradient)",
      icon: "◉",
    },
  ],
  partners: [
    {
      name: "Grandeapp.com",
      sub: "Growth & commerce platform",
      href: "https://grandeapp.com",
      gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
      icon: "G",
      external: true,
    },
    {
      name: "fitADai.com",
      sub: "AI ad optimization",
      href: "https://fitadai.com",
      gradient: "var(--mix-gradient)",
      icon: "F",
      external: true,
    },
  ],
} as const;
