import CycleWheelDiagram from "@/components/diagrams/CycleWheelDiagram";
import HormoneWaveChart from "@/components/diagrams/HormoneWaveChart";

const phases = [
  {
    name: "Folikular",
    label: "Fase Mulai",
    emoji: "🌱",
    days: "Hari 6–13",
    color: "bg-[#E8F5E9]",
    accent: "#4CAF82",
    border: "border-[#A5D6A7]",
    hook: "Energimu naik. Metabolism aktif. Waktu terbaik mulai program baru.",
    teaser: "Makan apa? Gerak gimana? Fokus ke mana?",
  },
  {
    name: "Ovulasi",
    label: "Fase Puncak",
    emoji: "☀️",
    days: "Hari 14–16",
    color: "bg-[#FFF8E1]",
    accent: "#F59E0B",
    border: "border-[#FDE68A]",
    hook: "Kamu di titik terbaikmu. Glowing natural. Percaya diri tinggi.",
    teaser: "Manfaatin ini untuk apa? Apa yang jangan dilewatkan?",
  },
  {
    name: "Luteal",
    label: "Fase Transisi",
    emoji: "🍂",
    days: "Hari 17–28",
    color: "bg-[#FDE6E5]",
    accent: "#C96E6A",
    border: "border-[#F9D5D3]",
    hook: "Di sini PMS muncul — tapi sebenarnya bisa dicegah.",
    teaser: "Cramps, bloating, mood swing? Ini penyebab dan solusinya.",
  },
  {
    name: "Menstruasi",
    label: "Fase Reset",
    emoji: "🌑",
    days: "Hari 1–5",
    color: "bg-[#F3E5F5]",
    accent: "#9C5FB5",
    border: "border-[#CE93D8]",
    hook: "Bukan waktunya push keras. Ini waktu tubuhmu recovery.",
    teaser: "Apa yang boleh dan tidak? Gimana biar ga lemas seharian?",
  },
];

export default function CyclePhases() {
  return (
    <section id="edukasi" className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            4 Fase Siklus
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Kenali Siklusmu,
            <br />
            Kenali Dirimu
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Ini bukan tentang membatasi diri — ini tentang{" "}
            <strong>bekerja sama dengan tubuh yang sudah luar biasa ini.</strong>
          </p>
        </div>

        <div className="mb-16">
          <CycleWheelDiagram />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className={`${phase.color} ${phase.border} border rounded-3xl p-6 flex flex-col gap-3 hover:shadow-lg transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{phase.emoji}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-white/70"
                  style={{ color: phase.accent }}
                >
                  {phase.days}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: phase.accent }}>
                  {phase.label}
                </p>
                <h3 className="font-serif text-xl font-bold text-[#3D1A1A]">
                  Fase {phase.name}
                </h3>
              </div>
              <p className="text-[#3D1A1A] text-sm leading-relaxed font-medium">
                {phase.hook}
              </p>
              <p className="text-[#7A3E3E] text-xs italic leading-relaxed mt-auto pt-3 border-t border-white/60">
                {phase.teaser}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/70 rounded-3xl p-8 mb-10">
          <p className="text-center text-xs font-semibold text-[#C96E6A] tracking-[0.2em] uppercase mb-6">
            Fluktuasi Hormon Selama 28 Hari
          </p>
          <HormoneWaveChart />
        </div>

        <div className="text-center">
          <a
            href="#free-pdf"
            className="inline-block bg-[#C96E6A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#A85450] transition-colors shadow-md"
          >
            Mau panduan lengkap per fase? Gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
