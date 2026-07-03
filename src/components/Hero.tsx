"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gold-300 text-sm tracking-[0.3em] uppercase mb-6 font-sans">
            Wedding Invitation
          </p>

          <h1 className="font-script text-6xl md:text-7xl lg:text-8xl text-white mb-2 leading-tight">
            {WEDDING_DATA.couple.bride.nickname}
          </h1>
          <p className="font-serif text-3xl md:text-4xl text-gold-300 mb-2">&</p>
          <h1 className="font-script text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            {WEDDING_DATA.couple.groom.nickname}
          </h1>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16 bg-gold-400/50" />
            <span className="text-gold-400 text-xl">✦</span>
            <div className="h-px w-16 bg-gold-400/50" />
          </div>

          <p className="text-white/70 text-lg font-light italic mb-2">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan hidup&rdquo;
          </p>
          <p className="text-gold-400 text-sm tracking-wider">
            QS. Ar-Rum: 21
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
