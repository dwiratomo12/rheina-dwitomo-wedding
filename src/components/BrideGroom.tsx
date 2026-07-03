"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function BrideGroom() {
  const { bride, groom } = WEDDING_DATA.couple;

  return (
    <section
      id="couple"
      className="section-padding bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Assalamualaikum Wr. Wb.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan pernikahan putra-putri kami:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Bride */}
          <BrideGroomCard
            person={bride}
            side="bride"
            delay={0.2}
          />

          {/* And symbol */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
            <div className="w-12 h-12 rounded-full bg-gold-500 text-white font-script text-2xl flex items-center justify-center shadow-lg">
              &
            </div>
          </div>

          {/* Groom */}
          <BrideGroomCard
            person={groom}
            side="groom"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function BrideGroomCard({
  person,
  side,
  delay,
}: {
  person: typeof WEDDING_DATA.couple.bride;
  side: "bride" | "groom";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "bride" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="text-center relative"
    >
      {/* Photo */}
      <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-200 shadow-xl">
        <img
          src={person.photoUrl}
          alt={person.fullName}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-script text-3xl md:text-4xl text-gray-800 mb-2">
        {person.fullName}
      </h3>
      <p className="text-gold-600 text-sm tracking-wider mb-2">
        {person.nickname}
      </p>
      <p className="text-gray-500 text-sm mb-3">{person.parents}</p>
      <a
        href={`https://instagram.com/${person.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-gray-400 hover:text-gold-600 transition-colors text-sm"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        @{person.instagram}
      </a>
    </motion.div>
  );
}
