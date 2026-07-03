"use client";

import { WEDDING_DATA } from "@/lib/constants";

export default function Cover({
  onOpen,
  isOpen,
}: {
  onOpen: () => void;
  isOpen: boolean;
}) {
  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#faf7f2] via-[#f5eedc] to-[#faf7f2]">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gold-100/50 to-transparent" />

      <div className="text-center px-6 max-w-md mx-auto relative z-10">
        {/* Ornament */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold-400" />
          <span className="text-gold-500 text-2xl">✦</span>
          <div className="h-px w-12 bg-gold-400" />
        </div>

        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
          Wedding Invitation
        </p>

        <h1 className="font-script text-5xl md:text-6xl text-gray-800 mb-3 leading-tight">
          {WEDDING_DATA.couple.bride.nickname}
        </h1>
        <p className="font-serif text-2xl text-gold-600 mb-2">&</p>
        <h1 className="font-script text-5xl md:text-6xl text-gray-800 mb-8 leading-tight">
          {WEDDING_DATA.couple.groom.nickname}
        </h1>

        {/* Decorative bottom */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold-400" />
          <span className="text-gold-500 text-2xl">✦</span>
          <div className="h-px w-12 bg-gold-400" />
        </div>

        <p className="text-gray-500 text-sm mb-2 font-sans">Kepada Yth,</p>
        <p className="text-gray-700 font-medium mb-8 font-sans">
          Bapak/Ibu/Saudara/i
        </p>

        <button
          onClick={onOpen}
          className="btn-gold text-sm tracking-wider animate-pulse-soft"
        >
          ✉️ Open Invitation
        </button>
      </div>

      {/* Decorative bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold-100/50 to-transparent" />
    </div>
  );
}
