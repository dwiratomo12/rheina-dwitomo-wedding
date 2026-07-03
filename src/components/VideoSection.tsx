"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function VideoSection() {
  return (
    <section id="videos" className="section-padding bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">In Motion</h2>
          <p className="section-subtitle">
            Capturing this chapter before the next one begins.
          </p>
          <div className="divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {WEDDING_DATA.videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-gold-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl text-center mt-4 text-gray-800">
                {video.title}
              </h3>
              <p className="text-gray-500 text-sm text-center mt-1">
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
