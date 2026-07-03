"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function ThankYou() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl md:text-6xl text-gold-600 mb-4">
            Thank You
          </h2>
          <div className="divider" />
          <p className="text-gray-600 leading-relaxed mb-8">
            With love and gratitude, thank you for celebrating with us
          </p>
          <p className="font-serif text-2xl text-gray-800">
            {WEDDING_DATA.couple.bride.nickname} & {WEDDING_DATA.couple.groom.nickname}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
