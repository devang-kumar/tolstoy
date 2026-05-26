/** Site-wide SEO & author profile */

export const site = {
  name: "Tolstoy AI Player",
  title: "AI Player: Shoppable Video for eCommerce | Tolstoy",
  description:
    "The #1 shoppable video solution for e-commerce. Auto-import from TikTok and Instagram, AI product tagging, dynamic PDP galleries, and free syndication to Walmart and Shop App.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pagecopy.vercel.app",
  locale: "en_US",
  keywords: [
    "AI commerce",
    "shoppable video",
    "e-commerce AI",
    "product discovery",
    "AI shopping assistant",
    "UGC video",
    "conversion optimization",
  ],
  author: {
    name: "Devang Kumar",
    role: "Full-Stack Developer",
    bio: "I build fast, interactive web experiences — React, Next.js, and modern UI. Available for freelance & full-time opportunities.",
    email: "devangkumar12112@gmail.com",
    profiles: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/devang-kumar",
        description: "Open source & project code",
        icon: "github",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/devang-kumar-78ab722b3",
        description: "Professional network",
        icon: "linkedin",
      },
      {
        id: "freelancer",
        label: "Freelancer",
        href: "https://www.freelancer.in/u/devangkumar12112",
        description: "Hire me for projects",
        icon: "freelancer",
      },
      {
        id: "resume",
        label: "Resume",
        href: "https://www.image2url.com/r2/default/documents/1779039616154-18ff85ca-341a-486a-b8c3-3769ccb22551.pdf",
        description: "Download PDF resume",
        icon: "resume",
        external: true,
      },
    ],
  },
} as const;
