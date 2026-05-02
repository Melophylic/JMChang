const links = {
  Halaman: [
    { label: "Tentang", href: "#tentang" },
    { label: "Edukasi", href: "#edukasi" },
    { label: "Produk", href: "#produk" },
    { label: "Konsultasi", href: "#konsultasi" },
  ],
  Produk: [
    { label: "PDF Cycle Guide", href: "#produk" },
    { label: "Bloom Tea", href: "#produk" },
    { label: "Glow Tea", href: "#produk" },
    { label: "Calm Tea", href: "#produk" },
    { label: "Restore Tea", href: "#produk" },
    { label: "Bundle 4 Fase", href: "#produk" },
  ],
  Bantuan: [
    { label: "FAQ", href: "#faq" },
    { label: "Hubungi Kami", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
};

const socials = [
  { icon: "📷", label: "Instagram", href: "#" },
  { icon: "🎵", label: "TikTok", href: "#" },
  { icon: "💬", label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3D1A1A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl font-bold text-white mb-3">
              JM Chang
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Mendukung perjalanan hormonal perempuan dengan pendekatan holistik
              — Cycle-Based Diet & Traditional Chinese Medicine.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#C96E6A] rounded-full flex items-center justify-center transition-colors text-base"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="font-semibold text-white/90 text-sm uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-xs leading-relaxed mb-4 max-w-3xl">
            <strong className="text-white/50">Disclaimer Medis:</strong> Informasi
            dan produk di website ini bersifat edukatif dan tidak dimaksudkan
            sebagai pengganti saran, diagnosis, atau perawatan medis profesional.
            Selalu konsultasikan kondisi kesehatanmu dengan tenaga medis yang
            berkualifikasi. JM Chang tidak bertanggung jawab atas keputusan
            kesehatan yang dibuat berdasarkan informasi di website ini.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} JM Chang · jmchang.id · All rights
              reserved
            </p>
            <p className="text-white/30 text-xs">
              Dibuat dengan ❤️ untuk perempuan Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
