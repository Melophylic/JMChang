const fullGuideFeatures = [
  "Penjelasan mendalam 4 fase + hormon di baliknya",
  "Meal plan 28 hari lengkap per fase",
  "50+ resep mudah dengan bahan lokal Indonesia",
  "Panduan olahraga per fase (dengan contoh gerakan)",
  "Skincare routine per fase",
  "Sleep & recovery guide",
  "Emotional wellness per fase",
  "Panduan suplemen alami",
  "Cycle tracker 3 bulan printable",
  "Bonus: Grocery list mingguan",
];

export default function Products() {
  return (
    <section id="produk" className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Mulai dari Sini
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Mulai dari Mana yang
            <br />
            <span className="text-[#C96E6A]">Paling Masuk Akal Buatmu</span>
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-xl mx-auto">
            Tidak perlu langsung all-in. Ada jalur untuk setiap orang — dari
            yang baru penasaran sampai yang mau serius berubah.
          </p>
        </div>

        <div className="space-y-6">
          {/* FREE PDF */}
          <div id="free-pdf" className="bg-[#FDE6E5] border-2 border-[#C96E6A] rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#C96E6A] text-white text-xs font-bold px-3 py-1 rounded-full">GRATIS</span>
                  <span className="text-[#C96E6A] text-xs font-semibold">Entry Point</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#3D1A1A] mb-3">
                  Cycle Starter Guide
                </h3>
                <p className="text-[#7A3E3E] mb-5 leading-relaxed">
                  Belum yakin mau mulai dari mana? Download panduan gratis ini
                  dulu. Tidak perlu kartu kredit. Cukup email kamu.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Ringkasan 4 fase siklus lengkap", "Cheat sheet makanan per fase", "Cycle tracker template"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#3D1A1A]">
                      <span className="text-[#C96E6A] font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#email-capture"
                  className="inline-block bg-[#C96E6A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-md text-center w-full sm:w-auto"
                >
                  Kirim ke Email Saya — Gratis →
                </a>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-64 bg-[#F5C6C3] rounded-2xl flex flex-col items-center justify-center gap-3 shadow-md">
                  <span className="text-5xl">📄</span>
                  <p className="text-[#8B3E3E] font-bold text-sm text-center px-4">Cycle Starter Guide</p>
                  <p className="text-[#A85450] text-xs">Cover placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* FULL PDF */}
          <div className="bg-white border border-[#F9D5D3] rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <span className="text-xs font-semibold text-[#C96E6A] bg-[#FDE6E5] px-3 py-1 rounded-full">
                  Core Product
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3D1A1A] mt-4 mb-2">
                  The Complete Cycle-Based Living Guide
                </h3>
                <p className="text-[#7A3E3E] text-sm mb-5 leading-relaxed">
                  Untuk kamu yang mau serius — ini panduan selengkap-lengkapnya.{" "}
                  <strong className="text-[#3D1A1A]">Satu kali beli, seumur hidup punya.</strong>
                </p>
                <ul className="space-y-2 mb-7">
                  {fullGuideFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#3D1A1A]">
                      <span className="text-[#C96E6A] flex-shrink-0 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-[#7A3E3E]">Harga</p>
                    <p className="font-serif text-2xl font-bold text-[#3D1A1A]">Rp XX.XXX</p>
                  </div>
                  <a href="#" className="bg-[#C96E6A] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-sm">
                    Dapatkan Panduan Lengkap →
                  </a>
                </div>
              </div>
              <div className="bg-[#FDE6E5] flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="w-44 h-60 bg-[#F5C6C3] rounded-2xl mx-auto mb-4 flex flex-col items-center justify-center gap-2 shadow-md">
                    <span className="text-5xl">📚</span>
                    <p className="text-[#8B3E3E] font-bold text-sm text-center px-4">Full PDF Guide</p>
                    <p className="text-[#A85450] text-xs">Cover placeholder</p>
                  </div>
                  <p className="text-[#7A3E3E] text-xs">Ganti dengan cover asli</p>
                </div>
              </div>
            </div>
          </div>

          {/* KONSULTASI */}
          <div id="konsultasi" className="bg-gradient-to-br from-[#8B3E3E] to-[#C96E6A] rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 text-white">
                <span className="text-xs font-semibold text-[#C96E6A] bg-white px-3 py-1 rounded-full">
                  Personal Deep Dive
                </span>
                <h3 className="font-serif text-2xl font-bold mt-4 mb-2">
                  &ldquo;Your Hormone, Your Rules&rdquo;
                </h3>
                <p className="text-white/80 text-sm mb-1">Sesi Konsultasi Privat 1-on-1</p>
                <p className="text-white/70 text-sm italic mb-5">
                  Karena setiap tubuh perempuan itu unik.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    '"Mens aku ga teratur, kenapa ya?"',
                    '"Aku cramps parah tiap bulan — ini normal?"',
                    '"Rambutku rontok banget, hubungannya sama hormon?"',
                    '"Aku bloated terus, ini soal makan atau siklus?"',
                  ].map((q) => (
                    <p key={q} className="text-white/70 text-sm italic">
                      {q}
                    </p>
                  ))}
                </div>

                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Di sini kita duduk bareng — 60 menit, khusus buat kamu.
                  Kita review siklus, kebiasaan, dan keluhan, lalu susun
                  perubahan lifestyle yang realistis.
                </p>

                <ul className="space-y-2 mb-7">
                  {[
                    "Sesi 60 menit via Google Meet / Zoom",
                    "Review siklus & keluhan personal",
                    "Rekomendasi diet & lifestyle spesifik",
                    "Written action plan setelah sesi",
                    "1x follow-up via chat (7 hari setelah sesi)",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-white/60">Per sesi</p>
                    <p className="font-serif text-2xl font-bold text-white">Rp XX.XXX</p>
                  </div>
                  <a href="#" className="bg-white text-[#C96E6A] px-7 py-3.5 rounded-full font-semibold hover:bg-[#FDE6E5] transition-colors shadow-sm">
                    Booking Sesi Saya →
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center p-10">
                <div className="w-52 h-52 bg-white/20 rounded-full flex flex-col items-center justify-center gap-3">
                  <span className="text-5xl">💬</span>
                  <p className="text-white font-bold text-center text-sm px-6">Foto Konsultan</p>
                  <p className="text-white/60 text-xs text-center">Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* SPEAKING */}
          <div className="bg-[#FFF8F7] border border-[#F9D5D3] rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-semibold text-[#C96E6A] bg-[#FDE6E5] px-3 py-1 rounded-full">
                  Speaking & Workshop
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3D1A1A] mt-4 mb-3">
                  Undang Saya ke Acara Kamu
                </h3>
                <p className="text-[#7A3E3E] mb-3 leading-relaxed">
                  Ingin perempuan di sekitarmu juga tahu hal ini?
                </p>
                <p className="text-[#7A3E3E] text-sm leading-relaxed mb-6">
                  Terbuka untuk hadir di komunitas, kampus, dan acara yang peduli
                  dengan kesehatan perempuan muda. Mari mulai percakapan yang
                  seharusnya sudah ada dari dulu.
                </p>
                <a href="#" className="inline-block border-2 border-[#C96E6A] text-[#C96E6A] px-7 py-3.5 rounded-full font-semibold hover:bg-[#C96E6A] hover:text-white transition-colors">
                  Hubungi Saya untuk Kolaborasi →
                </a>
              </div>
              <div className="flex justify-center">
                <div className="w-56 h-40 bg-[#FDE6E5] rounded-3xl flex flex-col items-center justify-center gap-3">
                  <span className="text-5xl">🎤</span>
                  <p className="text-[#7A3E3E] text-sm text-center px-6 font-medium">
                    Komunitas · Kampus · Event Perempuan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
