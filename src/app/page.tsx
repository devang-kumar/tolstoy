import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import ProductSection from "@/components/ProductSection";
import CrossProduct from "@/components/CrossProduct";
import MediaShowcase from "@/components/MediaShowcase";
import Testimonials from "@/components/Testimonials";
import ProfileSection from "@/components/ProfileSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Marquee />
        <MediaShowcase />
        <ProductSection />
        <CrossProduct />
        <Testimonials />
        <ProfileSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
