const benefits = [
  { icon: "💆", text: "Rambut lebih tebal dan tidak rontok lagi" },
  { icon: "🌟", text: "Kulit glowing dari dalam — bukan karena skincare doang" },
  { icon: "⚖️", text: "Berat badan turun tanpa rasa tersiksa atau kelaparan" },
  { icon: "😌", text: "Cramps berkurang drastis bahkan bisa hilang sama sekali" },
  { icon: "🧘", text: "Mood lebih stabil — goodbye PMS breakdown tiap bulan" },
  { icon: "⚡", text: "Energi konsisten sepanjang hari, ga lagi lemas tiba-tiba" },
  { icon: "📅", text: "Haid lebih teratur dan bisa diprediksi" },
  { icon: "🌙", text: "Tidur lebih nyenyak dan bangun terasa segar" },
];

export default function ResultsBenefits() {
  return (
    <section className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
            Hasil Nyata
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Yang Bisa Kamu Rasakan
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-xl mx-auto">
            Ketika hormonmu seimbang, tubuhmu bisa melakukan hal-hal yang selama
            ini kamu pikir mustahil.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all border border-[#F9D5D3]"
            >
              <span className="text-2xl flex-shrink-0">{b.icon}</span>
              <p className="text-[#3D1A1A] text-sm leading-relaxed font-medium">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#3D1A1A] rounded-3xl p-10 max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-white font-bold leading-relaxed mb-4">
            Bukan janji.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Ini hasil yang terjadi ketika kamu{" "}
            <strong className="text-[#F9D5D3]">berhenti melawan tubuhmu sendiri</strong>{" "}
            dan mulai bekerja sama dengannya. Sudah dirasakan oleh 500+ perempuan
            yang memulai dari sini.
          </p>
        </div>
      </div>
    </section>
  );
}
