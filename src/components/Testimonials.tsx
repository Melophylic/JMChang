const testimonials = [
  {
    name: "Anisa R.",
    role: "Pengguna Teh Herbal",
    avatar: "A",
    rating: 5,
    text: "Saya sudah 3 bulan pakai CALM TEA dan RESTORE TEA. PMS saya jauh berkurang — biasanya seminggu sebelum haid mood saya berantakan, sekarang bisa terkontrol. Rasanya enak juga, nggak pahit!",
  },
  {
    name: "Sari M.",
    role: "Pembeli PDF Guide",
    avatar: "S",
    rating: 5,
    text: "PDF Guide-nya sangat lengkap dan mudah dipahami. Saya akhirnya ngerti kenapa kalau lagi fase luteal saya selalu ngidam sweet foods — ternyata ada penjelasan ilmiahnya. Meal plan-nya praktis banget!",
  },
  {
    name: "Dewi K.",
    role: "Klien Konsultasi",
    avatar: "D",
    rating: 5,
    text: "Konsultasinya sangat membantu. Akhirnya ada yang benar-benar dengerin keluhan saya dan kasih solusi yang spesifik untuk kondisi saya — bukan jawaban generik. Follow-up plan tertulisnya sangat berguna.",
  },
  {
    name: "Rena P.",
    role: "Pengguna Bundle 4 Teh",
    avatar: "R",
    rating: 5,
    text: "Bundle 4 fase ini best investment ever. Sekarang saya lebih aware sama siklus saya sendiri. Teh-nya jadi ritual pagi yang saya tunggu-tunggu. Siklus saya jadi lebih teratur setelah 2 bulan!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FDE6E5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#F9D5D3] px-4 py-1.5 rounded-full">
            Testimoni
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-4">
            Mereka Sudah Merasakan
          </h2>
          <p className="text-[#7A3E3E] text-lg max-w-xl mx-auto">
            Lebih dari 500 perempuan telah memulai perjalanan menuju keseimbangan
            hormonal bersama JM Chang.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-[#F9D5D3]"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#F59E0B] text-sm">★</span>
                ))}
              </div>

              <p className="text-[#3D1A1A] text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#F9D5D3]">
                <div className="w-10 h-10 bg-[#C96E6A] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#3D1A1A] text-sm">{t.name}</p>
                  <p className="text-[#7A3E3E] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
