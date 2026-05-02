const phases = [
  {
    name: "Folikular",
    emoji: "🌱",
    days: "Hari 1–13",
    color: "bg-[#E8F5E9]",
    accent: "#4CAF82",
    border: "border-[#A5D6A7]",
    energy: "Naik perlahan",
    mood: "Optimis & penasaran",
    body: "Estrogen mulai meningkat, sel telur berkembang",
    tip: "Waktu terbaik untuk mulai proyek baru & olahraga intens",
  },
  {
    name: "Ovulasi",
    emoji: "☀️",
    days: "Hari 14–16",
    color: "bg-[#FFF8E1]",
    accent: "#F59E0B",
    border: "border-[#FDE68A]",
    energy: "Puncak tertinggi",
    mood: "Percaya diri & sosial",
    body: "Estrogen & testosteron memuncak, sel telur dilepas",
    tip: "Manfaatkan untuk presentasi, pertemuan penting & bersosialisasi",
  },
  {
    name: "Luteal",
    emoji: "🍂",
    days: "Hari 17–28",
    color: "bg-[#FDE6E5]",
    accent: "#C96E6A",
    border: "border-[#F9D5D3]",
    energy: "Turun bertahap",
    mood: "Perlu ketenangan",
    body: "Progesteron naik, tubuh bersiap jika tidak hamil",
    tip: "Kurangi kafein, perbanyak magnesium & me-time",
  },
  {
    name: "Menstruasi",
    emoji: "🌑",
    days: "Hari 1–5",
    color: "bg-[#F3E5F5]",
    accent: "#9C5FB5",
    border: "border-[#CE93D8]",
    energy: "Paling rendah",
    mood: "Perlu istirahat",
    body: "Hormon menurun, lapisan rahim luruh",
    tip: "Rest & restore — ini bukan kelemahan, ini kebutuhan",
  },
];

import CycleWheelDiagram from "@/components/diagrams/CycleWheelDiagram";
import HormoneWaveChart from "@/components/diagrams/HormoneWaveChart";

export default function CyclePhases() {
  return (
    <section id="edukasi" className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
            Edukasi Siklus
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            4 Fase Siklus Kamu
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Tubuhmu berubah setiap minggu — bukan karena tidak konsisten, tapi
            karena{" "}
            <strong>hormonal adalah hal yang alami.</strong> Kenali fasenya,
            kenali kebutuhannya.
          </p>
        </div>

        {/* Cycle Wheel Diagram */}
        <div className="mb-16">
          <CycleWheelDiagram />
        </div>

        {/* Hormone Wave Chart */}
        <div className="bg-white/70 rounded-3xl p-8 mb-16">
          <p className="text-center text-xs font-semibold text-[#C96E6A] tracking-[0.2em] uppercase mb-6">
            Fluktuasi Hormon Selama 28 Hari
          </p>
          <HormoneWaveChart />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className={`${phase.color} ${phase.border} border rounded-3xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{phase.emoji}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-white/70"
                  style={{ color: phase.accent }}
                >
                  {phase.days}
                </span>
              </div>
              <h3
                className="font-serif text-xl font-bold"
                style={{ color: phase.accent }}
              >
                Fase {phase.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-[#3D1A1A]">Energi: </span>
                  <span className="text-[#5A3030]">{phase.energy}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#3D1A1A]">Mood: </span>
                  <span className="text-[#5A3030]">{phase.mood}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#3D1A1A]">Tubuh: </span>
                  <span className="text-[#5A3030]">{phase.body}</span>
                </div>
              </div>
              <div className="mt-auto pt-3 border-t border-white/60">
                <p className="text-xs text-[#5A3030] italic">{phase.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
