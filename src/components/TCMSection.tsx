import TCMHerbsDiagram from "@/components/diagrams/TCMHerbsDiagram";

const teas = [
  {
    name: "BLOOM",
    phase: "Folikular",
    emoji: "🌱",
    ingredients: "Rose · Chrysanthemum · Goji Berry",
    benefits: "Sirkulasi, mood, detoks ringan",
    color: "bg-[#E8F5E9]",
    accent: "#4CAF82",
    border: "border-[#A5D6A7]",
  },
  {
    name: "GLOW",
    phase: "Ovulasi",
    emoji: "☀️",
    ingredients: "Hibiscus · Longan · Red Dates",
    benefits: "Energi, antioksidan, liver",
    color: "bg-[#FFF8E1]",
    accent: "#F59E0B",
    border: "border-[#FDE68A]",
  },
  {
    name: "CALM",
    phase: "Luteal",
    emoji: "🍂",
    ingredients: "Dong Quai · Ginger · Licorice Root",
    benefits: "Anti-PMS, magnesium support",
    color: "bg-[#FDE6E5]",
    accent: "#C96E6A",
    border: "border-[#F9D5D3]",
  },
  {
    name: "RESTORE",
    phase: "Menstruasi",
    emoji: "🌑",
    ingredients: "Red Dates · Longan · Brown Sugar",
    benefits: "Replenish darah, anti-kram",
    color: "bg-[#F3E5F5]",
    accent: "#9C5FB5",
    border: "border-[#CE93D8]",
  },
];

export default function TCMSection() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Satu Langkah Lebih Jauh
          </span>
        </div>

        <div className="bg-[#FDE6E5] rounded-3xl p-8 md:p-12 mb-14 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D1A1A] mb-5 leading-tight">
            Ketika Lifestyle Sudah On Track —
            <br />
            <span className="text-[#C96E6A]">Ini yang Bisa Mendukung Lebih Dalam.</span>
          </h2>
          <p className="text-[#7A3E3E] leading-relaxed mb-4">
            Selama ribuan tahun, perempuan di Asia menggunakan herbal tertentu
            untuk mendukung keseimbangan hormon secara alami — dari dalam, bukan
            sekadar menutup gejala.
          </p>
          <p className="text-[#7A3E3E] leading-relaxed">
            Saya meracik sendiri teh herbal berbasis TCM yang disesuaikan dengan
            setiap fase siklusmu.{" "}
            <strong className="text-[#3D1A1A]">
              Bahan-bahan yang dipilih dengan niat. Diseduh dengan ritual.
            </strong>
          </p>
        </div>

        <div className="mb-14">
          <TCMHerbsDiagram />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {teas.map((tea) => (
            <div key={tea.name} className={`${tea.color} ${tea.border} border rounded-3xl p-6 flex flex-col gap-3`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{tea.emoji}</span>
                <div>
                  <p className="font-bold text-base" style={{ color: tea.accent }}>{tea.name}</p>
                  <p className="text-xs text-[#5A3030]">Fase {tea.phase}</p>
                </div>
              </div>
              <p className="text-xs font-medium text-[#3D1A1A]">{tea.ingredients}</p>
              <p className="text-xs text-[#7A3E3E]">{tea.benefits}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#7A3E3E] mb-5 text-sm">
            Tersedia per sachet · per box · Bundle 4 fase
          </p>
          <a
            href="#"
            className="inline-block bg-[#C96E6A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-md"
          >
            Lihat Koleksi Teh →
          </a>
        </div>
      </div>
    </section>
  );
}
