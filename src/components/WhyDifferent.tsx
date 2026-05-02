export default function WhyDifferent() {
  return (
    <section className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
            Kenapa Tubuh Perempuan Beda?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Semua yang Kamu Rasakan
            <br />
            <span className="text-[#C96E6A]">Bukan Random</span>
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-2xl mx-auto">
            Mood, energi, nafsu makan, kulit — itu hormonmu yang sedang bicara.
            Dan ada polanya.
          </p>
        </div>

        {/* 24h vs 28 days comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="bg-white/60 border border-[#F9D5D3] rounded-3xl p-8 text-center">
            <p className="text-5xl mb-4">🕐</p>
            <p className="font-serif text-lg font-bold text-[#7A3E3E] mb-2">Laki-laki</p>
            <p className="font-serif text-5xl font-bold text-[#A0A0A0] mb-2">24</p>
            <p className="text-[#7A3E3E] font-semibold text-sm mb-3">jam siklus hormon</p>
            <p className="text-[#7A3E3E] text-xs leading-relaxed">
              Reset setiap hari. Kebutuhan relatif konsisten dari hari ke hari.
            </p>
          </div>

          <div className="bg-[#C96E6A] rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-5xl mb-4 relative z-10">🌸</p>
            <p className="font-serif text-lg font-bold text-white/80 mb-2 relative z-10">Perempuan</p>
            <p className="font-serif text-5xl font-bold text-white mb-2 relative z-10">28</p>
            <p className="text-white/80 font-semibold text-sm mb-3 relative z-10">hari siklus hormon</p>
            <p className="text-white/70 text-xs leading-relaxed relative z-10">
              4 fase berbeda. 4 kebutuhan berbeda. Setiap minggu itu tidak sama.
            </p>
          </div>
        </div>

        {/* 3 key insights */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Mood kamu itu predictable",
              desc: "Kalau kamu tahu di fase mana kamu sekarang, kamu bisa prediksi kapan energi naik, kapan butuh istirahat, kapan harus hati-hati sama emosi.",
            },
            {
              num: "02",
              title: "Diet sama tiap hari itu kontraproduktif",
              desc: "Tubuhmu butuh nutrisi berbeda setiap fase. Makanan yang bagus di fase ovulasi bisa bikin bloating di fase luteal.",
            },
            {
              num: "03",
              title: "Bukan kamu yang tidak konsisten",
              desc: "Kamu selalu dibilang kurang disiplin. Padahal tubuhmu memang butuh pendekatan yang berubah — bukan kamu yang salah.",
            },
          ].map((item) => (
            <div key={item.num} className="bg-[#F9D5D3] rounded-3xl p-7">
              <span className="inline-block text-xs font-bold text-[#C96E6A] bg-white/60 px-3 py-1 rounded-full mb-4">
                {item.num}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#3D1A1A] mb-3">{item.title}</h3>
              <p className="text-[#7A3E3E] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
