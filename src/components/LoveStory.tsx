"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function LoveStory() {
  return (
    <section id="story" className="section-padding bg-[#faf7f2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It All Fell Into Place</h2>
          <div className="divider" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-300 hidden md:block" />

          {WEDDING_DATA.loveStory.map((story, index) => (
            <StoryCard
              key={story.title}
              story={story}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({
  story,
  index,
  isLeft,
}: {
  story: (typeof WEDDING_DATA.loveStory)[0];
  index: number;
  isLeft: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img
            src={story.imageUrl}
            alt={story.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Dot on timeline - desktop only */}
      <div className="hidden md:flex items-center justify-center w-8 z-10">
        <div className="w-4 h-4 rounded-full bg-gold-500 border-2 border-white shadow" />
      </div>

      {/* Text */}
      <div
        className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
      >
        <h3 className="font-serif text-2xl text-gray-800 mb-3 text-center md:text-left">
          {story.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-center md:text-left">
          {story.description}
        </p>
      </div>
    </motion.div>
  );
}
