"use client";

import { useState } from "react";
import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import QuranVerse from "@/components/QuranVerse";
import BrideGroom from "@/components/BrideGroom";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import WeddingGift from "@/components/WeddingGift";
import WeddingWish from "@/components/WeddingWish";
import ThankYou from "@/components/ThankYou";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <Cover onOpen={() => setIsOpen(true)} isOpen={isOpen} />;
  }

  return (
    <main>
      <Hero />
      <QuranVerse />
      <BrideGroom />
      <LoveStory />
      <Gallery />
      <VideoSection />
      <Countdown />
      <EventDetails />
      <WeddingGift />
      <WeddingWish />
      <ThankYou />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
