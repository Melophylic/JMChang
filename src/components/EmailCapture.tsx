"use client";
import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="email-capture" className="bg-[#8B3E3E] py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#F9D5D3] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Belum Siap Beli? Tidak Apa-Apa.
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
          Masuk ke Komunitas Kami
          <br />
          dan Mulai Dari Sini
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Dapatkan tips mingguan tentang kesehatan hormon, siklus, dan
          cycle-based living — langsung ke inbox kamu. Gratis, tanpa spam.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <span className="text-4xl">🌸</span>
            <p className="font-serif text-xl font-bold text-white mt-3">
              Selamat datang!
            </p>
            <p className="text-white/70 mt-2">
              Cycle Starter Guide sudah dalam perjalanan ke inbox kamu. Cek folder
              Promotions jika tidak muncul dalam beberapa menit.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="emailkamu@gmail.com"
              required
              className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 text-sm"
            />
            <button
              type="submit"
              className="bg-[#FDE6E5] text-[#8B3E3E] px-7 py-4 rounded-full font-semibold text-sm hover:bg-white transition-colors whitespace-nowrap"
            >
              Daftar Sekarang →
            </button>
          </form>
        )}

        <p className="text-white/40 text-xs mt-4">
          Tidak pernah spam. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </section>
  );
}
