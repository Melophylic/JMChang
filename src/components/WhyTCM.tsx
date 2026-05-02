const tcmPoints = [
  {
    num: "01",
    title: "Teruji 3.000+ Tahun",
    desc: "Bukan tren wellness modern — ini sistem medis lengkap yang telah menjaga kesehatan perempuan selama ribuan tahun, dengan fokus pada keseimbangan tubuh secara menyeluruh.",
    icon: "🏺",
  },
  {
    num: "02",
    title: "Memahami Tubuh Perempuan Secara Unik",
    desc: "TCM mengenal konsep Qi, Darah, Yin & Yang dalam konteks siklus haid. Fase-fase siklus dalam TCM sangat selaras dengan pendekatan hormonal modern.",
    icon: "☯️",
  },
  {
    num: "03",
    title: "Herbal yang Bekerja Sinergis",
    desc: "Dong quai untuk sirkulasi, red dates untuk darah & energi, goji berry untuk liver & antioksidan, rose untuk melancarkan Qi & mood. Bukan menggantikan — mendukung.",
    icon: "🌿",
  },
  {
    num: "04",
    title: "Aman & Nyaman untuk Konsumsi Rutin",
    desc: "Bukan obat keras. Herbal TCM bisa dikonsumsi sebagai bagian dari ritual harian — cocok dikombinasikan dengan cycle-based diet untuk hasil maksimal.",
    icon: "🍵",
  },
];

const comparisonData = [
  {
    aspect: "Pendekatan",
    conventional: "Menekan gejala",
    tcm: "Menyeimbangkan akar masalah",
    cycleBased: "Mencegah + mendukung",
  },
  {
    aspect: "Hormon",
    conventional: "Intervensi sintetis",
    tcm: "Dukung produksi alami",
    cycleBased: "Optimalkan tiap fase",
  },
  {
    aspect: "Jangka Panjang",
    conventional: "Bergantung pada obat",
    tcm: "Membangun keseimbangan",
    cycleBased: "Sustainable lifestyle",
  },
  {
    aspect: "Konsumsi",
    conventional: "Resep dokter",
    tcm: "Ritual harian alami",
    cycleBased: "Pilihan makanan harian",
  },
];

import TCMHerbsDiagram from "@/components/diagrams/TCMHerbsDiagram";

export default function WhyTCM() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Modern Medicine Bridge */}
        <div className="bg-[#FDE6E5] rounded-3xl p-10 mb-20 max-w-3xl mx-auto text-center">
          <span className="text-3xl">🤔</span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#3D1A1A] mt-4 mb-4">
            &ldquo;Lab normal, tapi badan tetap tidak enak?&rdquo;
          </h3>
          <p className="text-[#7A3E3E] leading-relaxed">
            Banyak perempuan mendapat hasil lab normal namun tetap merasa
            kelelahan, PMS parah, atau mood tidak stabil. Pendekatan konvensional
            sering hanya menekan gejala — bukan menyembuhkan akar masalahnya.{" "}
            <strong className="text-[#C96E6A]">TCM hadir untuk melengkapi.</strong>
          </p>
        </div>

        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Traditional Chinese Medicine
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Kenapa TCM?
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Bukan sekadar tren — ini pendekatan holistik yang memahami tubuh
            perempuan dari akarnya.
          </p>
        </div>

        {/* 4 Points */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {/* TCM Herbs Diagram */}
          <div className="sm:col-span-2 bg-[#FFF8F7] rounded-3xl p-6 flex items-center justify-center">
            <TCMHerbsDiagram />
          </div>

          {tcmPoints.map((point) => (
            <div
              key={point.num}
              className="bg-white border border-[#F9D5D3] rounded-3xl p-8 flex gap-5 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl">{point.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C96E6A] bg-[#FDE6E5] px-2 py-0.5 rounded-full">
                    {point.num}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#3D1A1A]">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[#7A3E3E] text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#3D1A1A] text-center mb-8">
            Perbandingan Pendekatan
          </h3>
          <div className="overflow-x-auto rounded-3xl border border-[#F9D5D3]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FDE6E5]">
                  <th className="text-left px-6 py-4 font-semibold text-[#3D1A1A]">Aspek</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#7A3E3E]">Konvensional</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#C96E6A]">TCM ✨</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#4CAF82]">Cycle-Based ✨</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FFF8F7]"}
                  >
                    <td className="px-6 py-4 font-semibold text-[#3D1A1A]">{row.aspect}</td>
                    <td className="px-6 py-4 text-[#7A3E3E]">{row.conventional}</td>
                    <td className="px-6 py-4 text-[#C96E6A] font-medium">{row.tcm}</td>
                    <td className="px-6 py-4 text-[#4CAF82] font-medium">{row.cycleBased}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
