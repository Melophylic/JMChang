const teas = [
  {
    name: "BLOOM TEA",
    phase: "Fase Folikular",
    emoji: "🌱",
    ingredients: "Rose · Chrysanthemum · Goji Berry",
    benefits: "Sirkulasi, mood, detoks ringan",
    color: "bg-[#E8F5E9]",
    accent: "#4CAF82",
    border: "border-[#A5D6A7]",
  },
  {
    name: "GLOW TEA",
    phase: "Fase Ovulasi",
    emoji: "☀️",
    ingredients: "Hibiscus · Longan · Red Dates",
    benefits: "Energi, antioksidan, liver",
    color: "bg-[#FFF8E1]",
    accent: "#F59E0B",
    border: "border-[#FDE68A]",
  },
  {
    name: "CALM TEA",
    phase: "Fase Luteal",
    emoji: "🍂",
    ingredients: "Dong Quai · Ginger · Licorice Root",
    benefits: "Anti-PMS, magnesium support",
    color: "bg-[#FDE6E5]",
    accent: "#C96E6A",
    border: "border-[#F9D5D3]",
  },
  {
    name: "RESTORE TEA",
    phase: "Fase Menstruasi",
    emoji: "🌑",
    ingredients: "Red Dates · Longan · Brown Sugar",
    benefits: "Replenish darah, anti-kram",
    color: "bg-[#F3E5F5]",
    accent: "#9C5FB5",
    border: "border-[#CE93D8]",
  },
];

const pdfFeatures = [
  "Panduan lengkap 4 fase siklus",
  "Meal plan 28 hari penuh",
  "Daftar makanan per fase",
  "Panduan olahraga per fase",
  "Panduan suplemen alami",
  "Bonus: Cycle tracker template",
];

export default function Products() {
  return (
    <section id="produk" className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
            Produk & Layanan
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Tiga Cara Kami Mendukung
            <br />
            <span className="text-[#C96E6A]">Perjalanan Hormonmu</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Product 1: PDF Guide */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#F9D5D3]">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <span className="text-xs font-semibold text-[#C96E6A] bg-[#FDE6E5] px-3 py-1 rounded-full">
                  Digital Download
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#3D1A1A] mt-4 mb-2">
                  Cycle-Based Diet &
                  <br />
                  Lifestyle Guide
                </h3>
                <p className="text-[#7A3E3E] mb-6">
                  Panduan lengkap dalam format PDF — langsung download setelah
                  pembayaran.
                </p>
                <ul className="space-y-2 mb-8">
                  {pdfFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#3D1A1A]">
                      <span className="text-[#C96E6A]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-[#7A3E3E]">Harga</p>
                    <p className="font-serif text-2xl font-bold text-[#3D1A1A]">Rp XX.XXX</p>
                  </div>
                  <a
                    href="#"
                    className="bg-[#C96E6A] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-sm"
                  >
                    Download Sekarang →
                  </a>
                </div>
              </div>
              <div className="bg-[#FDE6E5] flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="w-48 h-64 bg-[#F5C6C3] rounded-2xl mx-auto mb-4 flex flex-col items-center justify-center gap-2 shadow-md">
                    <span className="text-5xl">📄</span>
                    <p className="text-[#8B3E3E] font-bold text-sm">PDF Guide</p>
                    <p className="text-[#A85450] text-xs">Cover placeholder</p>
                  </div>
                  <p className="text-[#7A3E3E] text-xs">Ganti dengan cover PDF asli</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2: Teh Herbal */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#F9D5D3]">
            <div className="p-10">
              <span className="text-xs font-semibold text-[#C96E6A] bg-[#FDE6E5] px-3 py-1 rounded-full">
                Produk Fisik
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#3D1A1A] mt-4 mb-2">
                Teh Herbal TCM
              </h3>
              <p className="text-[#7A3E3E] mb-8">
                Lini teh herbal TCM yang diformulasikan khusus untuk setiap fase
                siklus. Tersedia per sachet, per box, atau bundle 4 fase.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {teas.map((tea) => (
                  <div
                    key={tea.name}
                    className={`${tea.color} ${tea.border} border rounded-2xl p-5`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{tea.emoji}</span>
                      <div>
                        <p className="font-bold text-sm" style={{ color: tea.accent }}>
                          {tea.name}
                        </p>
                        <p className="text-xs text-[#5A3030]">{tea.phase}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#3D1A1A] font-medium mb-1">
                      {tea.ingredients}
                    </p>
                    <p className="text-xs text-[#7A3E3E]">{tea.benefits}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-[#7A3E3E]">Mulai dari</p>
                  <p className="font-serif text-2xl font-bold text-[#3D1A1A]">Rp XX.XXX</p>
                </div>
                <a
                  href="#"
                  className="bg-[#C96E6A] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-sm"
                >
                  Shop Sekarang →
                </a>
              </div>
            </div>
          </div>

          {/* Product 3: Konsultasi */}
          <div id="konsultasi" className="bg-gradient-to-br from-[#8B3E3E] to-[#C96E6A] rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-10 text-white">
                <span className="text-xs font-semibold text-[#C96E6A] bg-white px-3 py-1 rounded-full">
                  Premium
                </span>
                <h3 className="font-serif text-3xl font-bold mt-4 mb-2">
                  Konsultasi 1-on-1
                </h3>
                <p className="text-white/80 mb-6">
                  Hormone & Cycle Consultation — sesi personal untuk kondisi
                  hormonmu secara spesifik.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Sesi 60 menit via Zoom/Google Meet",
                    "Review siklus & gejala personal",
                    "Rekomendasi diet + teh yang sesuai",
                    "Follow-up plan tertulis",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="text-white">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-white/60">Per sesi</p>
                    <p className="font-serif text-2xl font-bold text-white">
                      Rp XX.XXX
                    </p>
                  </div>
                  <a
                    href="#"
                    className="bg-white text-[#C96E6A] px-8 py-3.5 rounded-full font-semibold hover:bg-[#FDE6E5] transition-colors shadow-sm"
                  >
                    Booking Konsultasi →
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center p-10">
                <div className="w-56 h-56 bg-white/20 rounded-full flex flex-col items-center justify-center gap-3">
                  <span className="text-6xl">💬</span>
                  <p className="text-white font-bold text-center text-sm px-6">
                    Foto Konsultan / Brand
                  </p>
                  <p className="text-white/60 text-xs text-center">Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
