"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";
import { useState } from "react";

export default function WeddingGift() {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const copyToClipboard = (text: string, bank: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedBank(bank);
      setTimeout(() => setCopiedBank(null), 2000);
    });
  };

  return (
    <section id="gift" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Wedding Gift</h2>
          <div className="divider" />
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
            {WEDDING_DATA.gift.message}
          </p>
        </motion.div>

        <div className="space-y-6">
          {WEDDING_DATA.gift.banks.map((bank, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#faf7f2] rounded-xl p-6 border border-gold-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-800 text-lg">
                  BANK {bank.bank} ({bank.code})
                </span>
              </div>
              <div className="mb-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Account Number:</p>
                <p className="font-mono text-xl text-gray-800 tracking-wider">
                  {bank.accountNumber}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Account Name:</p>
                <p className="text-gray-700 font-medium">{bank.accountName}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bank.accountNumber, bank.accountNumber)}
                className="w-full py-2 bg-gold-600 text-white rounded-lg text-sm font-medium hover:bg-gold-700 transition-colors"
              >
                {copiedBank === bank.accountNumber ? "✅ Copied!" : "📋 Copy Account Number"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
