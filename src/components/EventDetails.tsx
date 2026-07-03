"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";

export default function EventDetails() {
  const { akad, resepsi } = WEDDING_DATA.event;

  return (
    <section id="event" className="section-padding bg-[#faf7f2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">The Day</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[akad, resepsi].map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gold-100"
            >
              <h3 className="font-serif text-2xl text-gold-600 mb-4 text-center">
                {event.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📅</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      {new Date(event.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-gold-600 text-sm">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-gray-800">{event.venue}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {event.address}
                    </p>
                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-600 text-sm mt-2 hover:underline"
                    >
                      🗺️ View Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
