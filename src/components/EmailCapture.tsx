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
    <section className="bg-[#8B3E3E] py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-3xl">🎁</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
          Dapatkan Cycle Cheat Sheet
          <span className="text-[#F9D5D3]"> GRATIS</span>
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Ringkasan 4 fase siklus — apa yang terjadi, bagaimana rasanya, dan apa
          yang tubuhmu butuhkan. Langsung ke inbox kamu.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <span className="text-4xl">🌸</span>
            <p className="font-serif text-xl font-bold text-white mt-3">
              Terima kasih!
            </p>
            <p className="text-white/70 mt-2">
              Cycle Cheat Sheet sudah dalam perjalanan ke inbox kamu.
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
              Kirim Gratis →
            </button>
          </form>
        )}

        <p className="text-white/40 text-xs mt-4">
          Kami tidak pernah spam. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </section>
  );
}
