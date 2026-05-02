"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Apakah ini berlaku kalau haidku tidak teratur?",
    a: "Ya, justru cycle-based living ini sangat membantu untuk yang siklusnya tidak teratur. Kita mulai dari tracking gejala dan sensasi tubuh — bahkan tanpa siklus yang perfect pun, kamu bisa mulai belajar membaca sinyal tubuhmu. Sesi konsultasi 1-on-1 sangat direkomendasikan untuk kondisi ini.",
  },
  {
    q: "Aku masih SMA atau kuliah, apakah ini relevan?",
    a: "Sangat relevan. Bahkan semakin muda kamu mulai, semakin besar manfaatnya jangka panjang. Banyak masalah hormonal yang dibawa sampai dewasa sebenarnya bisa dicegah sejak dini. Cycle Starter Guide gratis adalah titik mulai yang sempurna.",
  },
  {
    q: "Apakah ini menggantikan dokter atau obat medis?",
    a: "Tidak. JM Chang tidak menggantikan perawatan medis. Ini adalah pendekatan lifestyle komplementer untuk mendukung keseimbangan hormon secara alami. Kalau ada kondisi medis serius (PCOS, endometriosis, dll), tetap konsultasi dengan dokter spesialis. Pendekatan ini bisa berjalan beriringan.",
  },
  {
    q: "Berapa lama sebelum merasakan perubahan?",
    a: "Banyak yang merasakan perubahan di energi dan mood dalam 2–4 minggu pertama. Untuk perubahan yang lebih nyata seperti cramps berkurang, siklus lebih teratur, dan rambut tidak rontok, biasanya 2–3 siklus penuh (2–3 bulan). Konsistensi adalah kuncinya.",
  },
  {
    q: "Bisa beli Full Guide tanpa konsultasi?",
    a: "Tentu bisa. Setiap produk berdiri sendiri. Tapi kalau kamu punya kondisi spesifik atau keluhan yang tidak kunjung membaik, konsultasi 1-on-1 akan memberi rekomendasi yang jauh lebih personal dan akurat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#FFF8F7] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Pertanyaan yang Sering Ditanya
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-[#F9D5D3] rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FFF8F7] transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-[#3D1A1A] text-sm md:text-base">
                  {faq.q}
                </span>
                <span
                  className={`text-[#C96E6A] text-xl flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#7A3E3E] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#7A3E3E] text-sm">
            Masih ada pertanyaan spesifik?{" "}
            <a href="#konsultasi" className="text-[#C96E6A] font-semibold hover:underline">
              Booking sesi konsultasi →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
