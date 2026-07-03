"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2027-10-09T09:00:00+07:00").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Save the Date</h2>
          <div className="divider" />

          <div className="grid grid-cols-4 gap-3 md:gap-6 mb-10">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#faf7f2] rounded-xl p-4 md:p-6 shadow-sm border border-gold-100"
              >
                <div className="font-serif text-3xl md:text-5xl text-gold-600 font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href={WEDDING_DATA.googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            📅 Add to Calendar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
