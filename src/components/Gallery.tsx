"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";
import { useState } from "react";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Portraits of Us</h2>
          <p className="section-subtitle">A collection of moments</p>
          <div className="divider" />
        </motion.div>

        <div className="masonry-grid">
          {WEDDING_DATA.gallery.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="masonry-item cursor-pointer group"
              onClick={() => setSelected(photo.url)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={photo.url}
                  alt={`Gallery ${photo.id}`}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gold-400 transition-colors z-10"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
          <img
            src={selected}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
