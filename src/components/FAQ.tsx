"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Amankah teh TCM dikonsumsi setiap hari?",
    a: "Ya, teh herbal TCM kami diformulasikan untuk konsumsi rutin harian. Semua bahan dipilih berdasarkan keamanan untuk penggunaan jangka panjang. Namun seperti suplemen apapun, kami rekomendasikan untuk konsultasi terlebih dahulu jika kamu memiliki kondisi medis tertentu atau sedang hamil.",
  },
  {
    q: "Apakah cocok untuk yang sedang menggunakan KB hormonal?",
    a: "Secara umum, teh herbal TCM kami tidak berinteraksi dengan KB hormonal. Namun karena setiap kondisi berbeda, kami sangat menyarankan untuk mendiskusikan ini dalam sesi konsultasi 1-on-1 agar kamu mendapat rekomendasi yang sesuai kondisimu.",
  },
  {
    q: "Berapa lama hasil mulai terasa?",
    a: "Banyak pelanggan mulai merasakan perbedaan pada mood dan energi dalam 2–4 minggu pertama. Untuk perubahan yang lebih signifikan seperti siklus lebih teratur dan PMS berkurang, biasanya terasa setelah 2–3 siklus penuh (sekitar 2–3 bulan). Konsistensi adalah kuncinya.",
  },
  {
    q: "Bisa beli teh saja tanpa beli PDF Guide?",
    a: "Tentu bisa! Setiap produk bisa dibeli secara terpisah. Namun kami merekomendasikan kombinasi keduanya karena PDF Guide memberikan konteks yang membuat teh lebih efektif — kamu tahu teh mana yang tepat di fase mana dan dikombinasikan dengan makanan apa.",
  },
  {
    q: "Apakah ini menggantikan dokter atau obat medis?",
    a: "Tidak. JM Chang tidak menggantikan perawatan medis profesional. Produk dan edukasi kami bersifat komplementer — untuk mendukung keseimbangan hormon secara alami sebagai bagian dari gaya hidup sehat. Jika kamu memiliki kondisi medis serius, selalu konsultasikan dengan dokter terlebih dahulu.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Pertanyaan yang Sering Ditanya
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#F9D5D3] rounded-2xl overflow-hidden"
            >
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
                  <p className="text-[#7A3E3E] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#7A3E3E] text-sm">
            Masih ada pertanyaan?{" "}
            <a
              href="#konsultasi"
              className="text-[#C96E6A] font-semibold hover:underline"
            >
              Booking konsultasi gratis →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
