const categories = [
  {
    icon: "🏃",
    title: "Olahraga",
    phases: [
      { name: "Folikular", color: "#4CAF82", tip: "HIIT, lari, gym — energi lagi naik, manfaatkan!" },
      { name: "Ovulasi", color: "#F59E0B", tip: "Olahraga sosial, kompetitif, atau yang butuh kekuatan" },
      { name: "Luteal", color: "#C96E6A", tip: "Pilates, yoga, jalan kaki — jangan paksa tubuh" },
      { name: "Menstruasi", color: "#9C5FB5", tip: "Rest, stretching ringan, atau jalan santai saja" },
    ],
  },
  {
    icon: "✨",
    title: "Skincare",
    phases: [
      { name: "Folikular", color: "#4CAF82", tip: "Kulit lagi fresh — fokus hidrasi & vitamin C" },
      { name: "Ovulasi", color: "#F59E0B", tip: "Kulit di titik terbaik — makeup minimal pun glowing" },
      { name: "Luteal", color: "#C96E6A", tip: "Pori-pori melebar — double cleanse & BHA/AHA" },
      { name: "Menstruasi", color: "#9C5FB5", tip: "Skin sensitif — gentle routine, barrier repair" },
    ],
  },
  {
    icon: "💼",
    title: "Kerja & Produktivitas",
    phases: [
      { name: "Folikular", color: "#4CAF82", tip: "Brainstorm, mulai proyek baru, belajar hal baru" },
      { name: "Ovulasi", color: "#F59E0B", tip: "Presentasi, interview, networking — ini waktumu!" },
      { name: "Luteal", color: "#C96E6A", tip: "Kerjaan detail, admin, review & finalisasi" },
      { name: "Menstruasi", color: "#9C5FB5", tip: "Refleksi, evaluasi, rencanakan bulan berikutnya" },
    ],
  },
  {
    icon: "😴",
    title: "Tidur & Recovery",
    phases: [
      { name: "Folikular", color: "#4CAF82", tip: "Tidur lebih mudah — manfaatkan kualitas tidur ini" },
      { name: "Ovulasi", color: "#F59E0B", tip: "Energi tinggi, tapi tetap jaga jam tidur" },
      { name: "Luteal", color: "#C96E6A", tip: "Susah tidur? Magnesium + no screen 1 jam sebelum tidur" },
      { name: "Menstruasi", color: "#9C5FB5", tip: "Butuh 1–2 jam lebih — ini bukan malas, ini kebutuhan" },
    ],
  },
  {
    icon: "💭",
    title: "Emosi & Mental",
    phases: [
      { name: "Folikular", color: "#4CAF82", tip: "Optimis, open-minded — waktu terbaik untuk goals baru" },
      { name: "Ovulasi", color: "#F59E0B", tip: "Empati tinggi, komunikasi lancar, percaya diri" },
      { name: "Luteal", color: "#C96E6A", tip: "Inner critic keras — journaling & self-compassion penting" },
      { name: "Menstruasi", color: "#9C5FB5", tip: "Butuh ketenangan — batasi stimulasi berlebihan" },
    ],
  },
];

export default function CycleLifestyle() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Cycle-Based Lifestyle
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Lebih dari Sekadar Makan
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Siklus kamu memengaruhi segalanya — olahraga, kulit, kerja, tidur,
            sampai emosimu. Ketika kamu tahu polanya, hidup terasa jauh lebih
            mudah.
          </p>
        </div>

        <div className="space-y-5">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-white border border-[#F9D5D3] rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-serif text-2xl font-bold text-[#3D1A1A]">{cat.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.phases.map((ph) => (
                  <div
                    key={ph.name}
                    className="rounded-2xl p-4"
                    style={{ backgroundColor: ph.color + "18" }}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ph.color }}>
                      {ph.name}
                    </p>
                    <p className="text-[#3D1A1A] text-sm leading-relaxed">{ph.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
