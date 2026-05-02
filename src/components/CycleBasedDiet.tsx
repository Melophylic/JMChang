const dietPhases = [
  {
    phase: "Folikular",
    emoji: "🌱",
    color: "bg-[#E8F5E9]",
    accent: "#4CAF82",
    border: "border-[#A5D6A7]",
    foods: ["Makanan ringan & fermentasi", "Protein hewani/nabati", "Sayuran berdaun hijau", "Biji-bijian utuh", "Yogurt & probiotik"],
  },
  {
    phase: "Ovulasi",
    emoji: "☀️",
    color: "bg-[#FFF8E1]",
    accent: "#F59E0B",
    border: "border-[#FDE68A]",
    foods: ["Anti-inflamasi (beri, sayuran)", "Makanan kaya zinc", "Sayuran hijau gelap", "Ikan salmon & tuna", "Biji labu & wijen"],
  },
  {
    phase: "Luteal",
    emoji: "🍂",
    color: "bg-[#FDE6E5]",
    accent: "#C96E6A",
    border: "border-[#F9D5D3]",
    foods: ["Magnesium (coklat hitam, kacang)", "Karbohidrat kompleks", "Makanan kaya B6", "Pisang & alpukat", "Teh chamomile & ginger"],
  },
  {
    phase: "Menstruasi",
    emoji: "🌑",
    color: "bg-[#F3E5F5]",
    accent: "#9C5FB5",
    border: "border-[#CE93D8]",
    foods: ["Zat besi (bayam, hati ayam)", "Omega-3 (ikan, flaxseed)", "Makanan hangat & berkuah", "Red dates & goji berry", "Kurangi gula & kafein"],
  },
];

export default function CycleBasedDiet() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Cycle-Based Diet
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Makan Sesuai Fasenya
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Kebutuhan nutrisimu berubah setiap minggu mengikuti hormon. Dengan
            makan sesuai fase, kamu memberi tubuh tepat apa yang dibutuhkannya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dietPhases.map((d) => (
            <div
              key={d.phase}
              className={`${d.color} ${d.border} border rounded-3xl p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{d.emoji}</span>
                <h3 className="font-serif text-lg font-bold" style={{ color: d.accent }}>
                  {d.phase}
                </h3>
              </div>
              <ul className="space-y-2">
                {d.foods.map((food, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#3D1A1A]">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: d.accent }}>✓</span>
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#FDE6E5] rounded-3xl p-10">
          <h3 className="font-serif text-2xl font-bold text-[#3D1A1A] mb-3">
            Mau panduan lengkapnya?
          </h3>
          <p className="text-[#7A3E3E] mb-6 max-w-md mx-auto">
            Dapatkan meal plan 28 hari lengkap dengan daftar makanan per fase,
            panduan olahraga, dan cycle tracker template.
          </p>
          <a
            href="#produk"
            className="inline-block bg-[#C96E6A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-md"
          >
            Download PDF Guide →
          </a>
        </div>
      </div>
    </section>
  );
}
