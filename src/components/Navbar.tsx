"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Edukasi", href: "#edukasi" },
  { label: "Produk", href: "#produk" },
  { label: "Konsultasi", href: "#konsultasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF8F7]/95 backdrop-blur-md shadow-sm border-b border-[#F9D5D3]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-bold text-[#8B3E3E] tracking-wide"
        >
          JM Chang
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#3D1A1A] hover:text-[#C96E6A] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produk"
            className="bg-[#C96E6A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#A85450] transition-colors shadow-sm"
          >
            Mulai Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#3D1A1A] text-2xl w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFF8F7] border-t border-[#F9D5D3] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#3D1A1A] font-medium text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produk"
            className="bg-[#C96E6A] text-white px-5 py-3 rounded-full font-semibold text-center hover:bg-[#A85450] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Mulai Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
