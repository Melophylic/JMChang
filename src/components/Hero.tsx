export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FDE6E5] flex items-center relative overflow-hidden">
      <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-[#F9D5D3] rounded-full opacity-60 blur-3xl -translate-y-1/4 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FECFCC] rounded-full opacity-40 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full mb-6">
              Untuk Perempuan Gen Z yang Tidak Pernah Diajarkan Ini
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D1A1A] leading-[1.1] mb-5">
              Diet Kamu Gagal
              <br />
              Bukan Karena
              <br />
              Kamu{" "}
              <span className="text-[#C96E6A] italic">Kurang Disiplin.</span>
            </h1>

            <p className="text-[#5A2A2A] text-base font-semibold mb-3 leading-relaxed">
              Rambut rontok. Kulit pucat. Badan lemas.
              <br />
              Ini bukan efek samping diet yang normal —
              <br />
              ini tanda tubuhmu sedang berteriak minta tolong.
            </p>

            <p className="text-[#7A3E3E] text-base leading-relaxed mb-10">
              Selama ini tidak ada yang mengajarkan bahwa tubuh perempuan
              bekerja dalam{" "}
              <strong className="text-[#3D1A1A]">siklus 28 hari</strong>.
              Setiap minggunya berbeda. Kebutuhannya berbeda. Diet yang sama
              setiap hari? Itu yang bikin semuanya kacau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#edukasi"
                className="bg-[#C96E6A] text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#A85450] transition-all shadow-md hover:shadow-lg text-center"
              >
                Pelajari Cara Kerja Tubuhku →
              </a>
              <a
                href="#free-pdf"
                className="border-2 border-[#C96E6A] text-[#C96E6A] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#C96E6A] hover:text-white transition-all text-center"
              >
                Download Panduan Gratis →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {["A", "R", "S", "D"].map((l) => (
                  <div
                    key={l}
                    className="w-9 h-9 rounded-full bg-[#E8A8A5] border-2 border-[#FDE6E5] flex items-center justify-center text-white text-xs font-bold"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#3D1A1A] text-sm font-semibold">500+ perempuan</p>
                <p className="text-[#7A3E3E] text-xs">sudah belajar dari sini</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-[400px] h-[500px]">
              <div className="absolute inset-0 bg-[#F5C6C3] rounded-[40px] rotate-3" />
              <div className="absolute inset-0 bg-[#F9D5D3] rounded-[40px] -rotate-2" />
              <div className="relative w-full h-full bg-[#EAB0AD] rounded-[40px] flex flex-col items-center justify-center gap-4">
                <div className="text-6xl">🌸</div>
                <p className="text-[#8B3E3E] font-serif text-xl font-bold text-center px-8">
                  Foto Brand / Hero
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
