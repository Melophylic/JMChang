export default function WhyDifferent() {
  return (
    <section className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="bg-[#F9D5D3] rounded-[40px] p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FECFCC] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">⚡</div>
                <p className="font-serif text-3xl font-bold text-[#3D1A1A] mb-4 leading-tight">
                  Perempuan bukan laki-laki yang lebih kecil.
                </p>
                <p className="text-[#7A3E3E] text-base leading-relaxed">
                  Selama dekade, riset kesehatan didominasi tubuh laki-laki.
                  Padahal tubuh perempuan bekerja{" "}
                  <strong>berbeda secara fundamental</strong> — dan itu bukan
                  kelemahan.
                </p>
              </div>
            </div>

            {/* Stat card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-lg p-5 max-w-[200px]">
              <p className="font-serif text-4xl font-bold text-[#C96E6A]">28</p>
              <p className="text-[#3D1A1A] text-sm font-semibold">hari siklus</p>
              <p className="text-[#7A3E3E] text-xs mt-1">
                4 fase berbeda, 4 kebutuhan berbeda
              </p>
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
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F9D5D3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#C96E6A] font-bold text-sm">01</span>
                </div>
                <div>
                  <p className="font-semibold text-[#3D1A1A] mb-1">
                    Hormon perempuan berfluktuasi setiap minggu
                  </p>
                  <p className="text-[#7A3E3E] text-sm leading-relaxed">
                    Bukan setiap hari seperti testosteron pria. Ini artinya
                    kebutuhan nutrisi, energi, dan istirahatmu berubah mengikuti
                    siklus.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F9D5D3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#C96E6A] font-bold text-sm">02</span>
                </div>
                <div>
                  <p className="font-semibold text-[#3D1A1A] mb-1">
                    Diet &quot;satu ukuran untuk semua&quot; tidak bekerja
                  </p>
                  <p className="text-[#7A3E3E] text-sm leading-relaxed">
                    Apa yang baik di fase ovulasi bisa berdampak berbeda di fase
                    luteal. Tubuhmu butuh pendekatan yang mengikuti ritmenya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F9D5D3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#C96E6A] font-bold text-sm">03</span>
                </div>
                <div>
                  <p className="font-semibold text-[#3D1A1A] mb-1">
                    Ketika kamu bekerja bersama siklus, bukan melawannya
                  </p>
                  <p className="text-[#7A3E3E] text-sm leading-relaxed">
                    Energimu meningkat, PMS berkurang, dan tubuhmu terasa lebih
                    seimbang — ini bukan mitos, ini sains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
