"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface Wish {
  id: string;
  name: string;
  message: string;
  attendance: string;
  createdAt: string;
}

export default function WeddingWish() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fetchWishes = useCallback(async () => {
    try {
      const res = await fetch("/api/wishes");
      const data = await res.json();
      if (data.wishes) setWishes(data.wishes.reverse());
    } catch {}
  }, []);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), attendance }),
      });
      if (!res.ok) throw new Error("Failed");
      await fetchWishes();
      setName("");
      setMessage("");
      setAttendance("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError("Gagal mengirim. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const displayedWishes = showAll ? wishes : wishes.slice(0, 5);

  return (
    <section id="wishes" className="section-padding bg-[#faf7f2]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Wedding Wish</h2>
          <div className="divider" />
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gold-100 mb-10"
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all"
              maxLength={100}
              required
            />
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all bg-white"
            >
              <option value="">Konfirmasi Kehadiran</option>
              <option value="Hadir">✅ Hadir</option>
              <option value="Tidak Hadir">❌ Tidak Hadir</option>
              <option value="Masih Ragu">🤔 Masih Ragu</option>
            </select>
            <textarea
              placeholder="Tulis ucapan & doa untuk kedua mempelai..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all resize-none"
              maxLength={1000}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "💌 Kirim Ucapan"}
            </button>
            {submitted && (
              <p className="text-green-600 text-center text-sm">
                ✅ Ucapan berhasil dikirim!
              </p>
            )}
            {error && (
              <p className="text-red-500 text-center text-sm">{error}</p>
            )}
          </div>
        </motion.form>

        {/* Wishes List */}
        <div className="space-y-4">
          {displayedWishes.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-800">{wish.name}</p>
                {wish.attendance && (
                  <span className="text-xs px-2 py-1 bg-gold-50 text-gold-700 rounded-full">
                    {wish.attendance}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{wish.message}</p>
            </motion.div>
          ))}
        </div>

        {wishes.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-gold-600 hover:underline text-sm font-medium"
            >
              {showAll ? "Show less" : `Show more comments (${wishes.length - 5})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
