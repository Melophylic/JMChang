export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FDE6E5] flex items-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-[#F9D5D3] rounded-full opacity-60 blur-3xl -translate-y-1/4 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FECFCC] rounded-full opacity-40 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full mb-6">
              Hormone & Cycle Wellness
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D1A1A] leading-[1.1] mb-6">
              Tubuhmu
              <br />
              Bukan{" "}
              <span className="text-[#C96E6A] italic">Masalah</span>
              <br />
              — Hormonmu
              <br />
              Butuh Cinta
            </h1>
            <p className="text-[#7A3E3E] text-lg leading-relaxed mb-10 max-w-lg">
              Pelajari cara mendukung siklus hormonmu dengan pendekatan{" "}
              <strong>Cycle-Based Diet</strong> &{" "}
              <strong>Traditional Chinese Medicine</strong> yang telah teruji
              ribuan tahun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#edukasi"
                className="bg-[#C96E6A] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#A85450] transition-all shadow-md hover:shadow-lg text-center"
              >
                Kenali Siklus Kamu →
              </a>
              <a
                href="#produk"
                className="border-2 border-[#C96E6A] text-[#C96E6A] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#C96E6A] hover:text-white transition-all text-center"
              >
                Lihat Produk
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#E8A8A5] border-2 border-[#FDE6E5] flex items-center justify-center text-white text-xs font-bold"
                  >
                    {["A", "R", "S", "D"][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#3D1A1A] text-sm font-semibold">
                  500+ perempuan
                </p>
                <p className="text-[#7A3E3E] text-xs">
                  sudah merasakan manfaatnya
                </p>
              </div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-[420px] h-[520px]">
              <div className="absolute inset-0 bg-[#F5C6C3] rounded-[40px] rotate-3" />
              <div className="absolute inset-0 bg-[#F9D5D3] rounded-[40px] -rotate-2" />
              <div className="relative w-full h-full bg-[#EAB0AD] rounded-[40px] flex flex-col items-center justify-center gap-4">
                <div className="text-6xl">🌸</div>
                <p className="text-[#8B3E3E] font-serif text-xl font-bold text-center px-8">
                  Foto Produk / Brand
                </p>
                <p className="text-[#A85450] text-sm text-center px-10">
                  Ganti dengan foto asli
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
