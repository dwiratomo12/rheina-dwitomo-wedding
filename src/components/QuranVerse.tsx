"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function QuranVerse() {
  const { quranVerse } = WEDDING_DATA;

  return (
    <section className="section-padding bg-gradient-to-b from-[#faf7f2] to-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="divider" />

          <p
            className="text-2xl md:text-3xl leading-relaxed mb-6 text-gray-700"
            style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
          >
            {quranVerse.arabic}
          </p>

          <p className="text-gray-600 leading-relaxed italic mb-4 max-w-xl mx-auto">
            {quranVerse.translation}
          </p>

          <p className="text-gold-600 text-sm font-medium tracking-wider">
            {quranVerse.reference}
          </p>

          <div className="divider" />
        </motion.div>
      </div>
    </section>
  );
}
