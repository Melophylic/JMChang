export default function WhyDifferent() {
  return (
    <section className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: visual card */}
          <div className="bg-[#F9D5D3] rounded-[40px] p-10 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FECFCC] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />

            <div className="relative z-10">
              <div className="text-5xl mb-6">⚡</div>
              <p className="font-serif text-2xl font-bold text-[#3D1A1A] mb-4 leading-snug">
                Perempuan bukan laki-laki yang lebih kecil.
              </p>
              <p className="text-[#7A3E3E] text-sm leading-relaxed mb-8">
                Selama dekade, riset kesehatan didominasi tubuh laki-laki.
                Padahal tubuh perempuan bekerja{" "}
                <strong>berbeda secara fundamental</strong> — dan itu bukan
                kelemahan.
              </p>

              {/* Stat chips — inline, no absolute */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm flex items-center gap-3">
                  <p className="font-serif text-3xl font-bold text-[#C96E6A] leading-none">28</p>
                  <div>
                    <p className="text-[#3D1A1A] text-xs font-semibold leading-tight">hari</p>
                    <p className="text-[#3D1A1A] text-xs font-semibold leading-tight">siklus</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm flex items-center gap-3">
                  <p className="font-serif text-3xl font-bold text-[#C96E6A] leading-none">4</p>
                  <div>
                    <p className="text-[#3D1A1A] text-xs font-semibold leading-tight">fase</p>
                    <p className="text-[#3D1A1A] text-xs font-semibold leading-tight">berbeda</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm">
                  <p className="text-[#7A3E3E] text-xs leading-tight max-w-[110px]">
                    4 kebutuhan nutrisi yang berbeda tiap minggu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
              Kenapa Tubuh Perempuan Berbeda?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-6 leading-tight">
              Ini Bukan
              <br />
              Kelemahan —<br />
              <span className="text-[#C96E6A]">Ini Superpower</span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  num: "01",
                  title: "Hormon perempuan berfluktuasi setiap minggu",
                  desc: "Bukan setiap hari seperti testosteron pria. Ini artinya kebutuhan nutrisi, energi, dan istirahatmu berubah mengikuti siklus.",
                },
                {
                  num: "02",
                  title: "Diet \"satu ukuran untuk semua\" tidak bekerja",
                  desc: "Apa yang baik di fase ovulasi bisa berdampak berbeda di fase luteal. Tubuhmu butuh pendekatan yang mengikuti ritmenya.",
                },
                {
                  num: "03",
                  title: "Ketika kamu bekerja bersama siklus, bukan melawannya",
                  desc: "Energimu meningkat, PMS berkurang, dan tubuhmu terasa lebih seimbang — ini bukan mitos, ini sains.",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F9D5D3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#C96E6A] font-bold text-sm">{item.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#3D1A1A] mb-1">{item.title}</p>
                    <p className="text-[#7A3E3E] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
