const dietPhases = [
  {
    phase: "Folikular",
    emoji: "🌱",
    color: "bg-[#E8F5E9]",
    accent: "#4CAF82",
    border: "border-[#A5D6A7]",
    why: "Estrogen naik → metabolism lebih aktif → tubuh siap menyerap nutrisi optimal",
    foods: ["Protein: telur, ayam, ikan", "Fermentasi: yogurt, kimchi, tempe", "Biji-bijian ringan: quinoa, oats", "Sayuran segar & berdaun hijau"],
  },
  {
    phase: "Ovulasi",
    emoji: "☀️",
    color: "bg-[#FFF8E1]",
    accent: "#F59E0B",
    border: "border-[#FDE68A]",
    why: "Puncak estrogen & testosteron → butuh anti-inflamasi untuk jaga keseimbangan",
    foods: ["Anti-inflamasi: beri, tomat, kunyit", "Zinc: biji labu, wijen, kacang mede", "Sayuran hijau gelap: bayam, brokoli", "Ikan salmon, sarden, atau tuna"],
  },
  {
    phase: "Luteal",
    emoji: "🍂",
    color: "bg-[#FDE6E5]",
    accent: "#C96E6A",
    border: "border-[#F9D5D3]",
    why: "Progesteron naik → butuh magnesium & B6 untuk cegah PMS & mood swing",
    foods: ["Magnesium: coklat hitam, kacang almond", "Karbohidrat kompleks: ubi, nasi merah", "Vitamin B6: pisang, alpukat, kentang", "Herbal: chamomile, ginger, kunyit"],
  },
  {
    phase: "Menstruasi",
    emoji: "🌑",
    color: "bg-[#F3E5F5]",
    accent: "#9C5FB5",
    border: "border-[#CE93D8]",
    why: "Hormon turun → fokus replenish zat besi & kurangi inflamasi",
    foods: ["Zat besi: bayam, hati ayam, kacang merah", "Omega-3: ikan, flaxseed, chia seed", "Makanan hangat & berkuah: sup, bubur", "Kurangi: gula, kafein, makanan olahan"],
  },
];

export default function CycleBasedDiet() {
  return (
    <section className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
            Cycle-Based Diet
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Diet yang Beneran Berhasil
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Bukan soal kalori melulu. Setiap fase butuh nutrisi berbeda —
            makan sesuai fase = hormon seimbang ={" "}
            <strong>body goals + glow dari dalam.</strong>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {dietPhases.map((d) => (
            <div key={d.phase} className={`${d.color} ${d.border} border rounded-3xl p-6 flex flex-col gap-4`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{d.emoji}</span>
                <h3 className="font-serif text-lg font-bold" style={{ color: d.accent }}>
                  {d.phase}
                </h3>
              </div>
              <p className="text-xs text-[#5A3030] leading-relaxed italic bg-white/50 rounded-xl p-3">
                {d.why}
              </p>
              <ul className="space-y-2">
                {d.foods.map((food, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#3D1A1A]">
                    <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: d.accent }}>✓</span>
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
