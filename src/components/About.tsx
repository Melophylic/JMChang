export default function About() {
  return (
    <section id="tentang" className="bg-[#FFF8F7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F9D5D3] rounded-[40px] rotate-3" />
              <div className="relative w-80 h-96 bg-[#EAB0AD] rounded-[40px] flex flex-col items-center justify-center gap-4">
                <div className="text-6xl">👩</div>
                <p className="text-[#8B3E3E] font-serif text-lg font-bold">
                  Foto Profil
                </p>
                <p className="text-[#A85450] text-sm text-center px-8">
                  Ganti dengan foto asli
                </p>
              </div>
              {/* Credential badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#C96E6A] text-white rounded-2xl p-4 shadow-lg">
                <p className="font-bold text-sm">TCM Practitioner</p>
                <p className="text-white/80 text-xs">& Wellness Educator</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#C96E6A] text-xs font-semibold tracking-[0.2em] uppercase bg-[#FDE6E5] px-4 py-1.5 rounded-full">
              Tentang
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3D1A1A] mt-6 mb-2">
              Halo, Saya
            </h2>
            <h3 className="font-serif text-3xl font-bold text-[#C96E6A] mb-6">
              [Nama Kamu]
            </h3>

            <div className="space-y-4 text-[#7A3E3E] leading-relaxed">
              <p>
                Saya [nama kamu] — [jabatan/profesi kamu]. Perjalanan saya
                bersama TCM dan kesehatan hormonal dimulai dari pengalaman
                pribadi: bertahun-tahun berjuang dengan [masalah yang relatable]
                tanpa jawaban yang memuaskan dari pendekatan konvensional.
              </p>
              <p>
                Ketika saya menemukan Traditional Chinese Medicine dan
                cycle-based living, semuanya berubah. Saya belajar untuk
                mendengar tubuh saya sendiri — bukan melawannya. Dan saya ingin
                perempuan lain merasakan hal yang sama.
              </p>
              <p>
                JM Chang lahir dari keyakinan bahwa{" "}
                <strong className="text-[#3D1A1A]">
                  setiap perempuan berhak memahami tubuhnya sendiri
                </strong>{" "}
                — dan mendapatkan dukungan yang tepat untuk merawatnya.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: "500+", label: "Klien dibantu" },
                { num: "3+", label: "Tahun pengalaman" },
                { num: "100%", label: "Bahan alami" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#FDE6E5] rounded-2xl p-4 text-center"
                >
                  <p className="font-serif text-2xl font-bold text-[#C96E6A]">
                    {stat.num}
                  </p>
                  <p className="text-[#7A3E3E] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
