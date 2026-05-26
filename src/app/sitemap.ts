import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#ai-player`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#ai-studio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#ai-shopper`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#developer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
