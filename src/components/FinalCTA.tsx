export default function FinalCTA() {
  return (
    <section className="bg-[#FDE6E5] py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F9D5D3] rounded-full opacity-50 blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FECFCC] rounded-full opacity-40 blur-3xl translate-y-1/2 translate-x-1/3" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
          Mulai Perjalananmu
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#3D1A1A] mt-8 mb-6 leading-tight">
          Tubuhmu Layak
          <br />
          Mendapat yang
          <br />
          <span className="text-[#C96E6A]">Terbaik</span>
        </h2>
        <p className="text-[#7A3E3E] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Mulai dari langkah kecil — PDF Guide untuk pemahaman, atau teh herbal
          untuk ritual harian. Keduanya membawamu lebih dekat ke keseimbangan
          yang kamu cari.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#produk"
            className="bg-[#C96E6A] text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-[#A85450] transition-all shadow-md hover:shadow-lg"
          >
            Mulai dengan PDF Guide
          </a>
          <a
            href="#produk"
            className="border-2 border-[#C96E6A] text-[#C96E6A] px-10 py-4 rounded-full text-base font-semibold hover:bg-[#C96E6A] hover:text-white transition-all"
          >
            Coba Teh Herbal Kami
          </a>
        </div>

        <p className="text-[#7A3E3E] text-xs">
          ✓ Produk alami &nbsp;&nbsp; ✓ Berbasis riset &nbsp;&nbsp; ✓ Dipercaya
          500+ perempuan
        </p>
      </div>
    </section>
  );
}
