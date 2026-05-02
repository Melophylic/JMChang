const painPoints = [
  { icon: "😩", text: "PMS parah yang bikin nggak bisa produktif setiap bulan" },
  { icon: "😴", text: "Lelah terus padahal sudah tidur cukup — tanpa sebab yang jelas" },
  { icon: "⚖️", text: "Berat badan naik meski sudah diet ketat dan olahraga rutin" },
  { icon: "🌪️", text: "Mood tidak stabil, gampang marah, cemas, dan tiba-tiba sedih" },
  { icon: "📅", text: "Siklus haid tidak teratur — datang terlambat atau malah terlalu sering" },
  { icon: "✨", text: "Kulit bermasalah — jerawat hormonal yang muncul tiap bulan" },
];

export default function PainPoints() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
            Apakah ini terasa familiar?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Kamu Tidak Sendirian
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-xl mx-auto">
            Jutaan perempuan merasakan hal yang sama setiap bulan — dan sering
            dianggap &quot;normal.&quot; Padahal, ada yang bisa dilakukan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-white border border-[#F9D5D3] rounded-2xl p-6 flex items-start gap-4 hover:shadow-md hover:border-[#E8A8A5] transition-all"
            >
              <span className="text-3xl flex-shrink-0">{point.icon}</span>
              <p className="text-[#3D1A1A] text-sm leading-relaxed font-medium">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="text-center bg-[#FDE6E5] rounded-3xl p-10 max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl text-[#3D1A1A] font-bold leading-relaxed">
            &ldquo;Ini bukan salahmu.
            <br />
            <span className="text-[#C96E6A]">Hormonmu butuh dukungan yang tepat.</span>&rdquo;
          </p>
          <p className="text-[#7A3E3E] mt-4 text-base">
            Dan itulah mengapa JM Chang hadir — untuk menemanimu.
          </p>
        </div>
      </div>
    </section>
  );
}
