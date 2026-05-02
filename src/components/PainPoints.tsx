const painPoints = [
  { icon: "⚖️", text: "Udah makan dikit, olahraga rajin, tapi berat badan ga turun-turun" },
  { icon: "💇", text: "Rambut rontok parah padahal baru 20-an — dan makin parah" },
  { icon: "😭", text: "Tiap mau mens langsung moody, nangis, marah tanpa sebab jelas" },
  { icon: "😖", text: "Cramps tiap bulan sampai ga bisa gerak, kerja, atau sekolah" },
  { icon: "✨", text: "Kulit kusam, jerawat muncul di waktu yang sama tiap bulan" },
  { icon: "😴", text: "Badan gampang capek padahal tidur udah cukup — terus-terusan" },
  { icon: "📅", text: "Haid ga teratur tapi selalu bilang ke diri sendiri 'normal aja kali'" },
];

export default function PainPoints() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Reality Check
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Kalau Kamu Pernah Ngerasain
            <br />
            Ini — Baca Sampai Habis.
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-xl mx-auto">
            Ini bukan hal yang harus kamu normalisasi. Ini sinyal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-white border border-[#F9D5D3] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md hover:border-[#E8A8A5] transition-all"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</span>
              <p className="text-[#3D1A1A] text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FDE6E5] rounded-3xl p-10 max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-[#3D1A1A] font-bold leading-relaxed mb-4">
            Ini bukan drama. Ini bukan lebay.
          </p>
          <p className="text-[#7A3E3E] text-base leading-relaxed">
            Ini adalah{" "}
            <strong className="text-[#3D1A1A]">
              bahasa tubuh perempuan yang belum pernah diajarkan cara membacanya.
            </strong>{" "}
            Sampai sekarang.
          </p>
        </div>
      </div>
    </section>
  );
}
