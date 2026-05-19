"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Archive", href: "/archive" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:40px;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
        scrolled
          ? "bg-forest/97 backdrop-blur-md border-b border-leaf/20"
          : "bg-linear-to-b from-forest/88 to-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 no-underline">
            <div className="relative w-[52px] h-[52px] shrink-0">
              <div className="animate-pulse-glow absolute inset-[-3px] rounded-full bg-radial from-leaf/25 to-transparent" />
              <Image
                src="/bmsc-logo.png"
                alt="BMSC Logo"
                width={52}
                height={52}
                className="rounded-full object-cover relative z-10"
                priority
              />
            </div>
            <div className="sm:hidden lg:block">
              <div className="font-display font-extrabold text-[1.1rem] text-cream tracking-wide leading-tight">
                BMSC
              </div>
              <div className="font-mono text-[0.54rem] text-leaf tracking-widest uppercase leading-snug mt-0.5">
                Bangladesh Marma Students Council
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <Link href="/join" className="btn-primary py-2.5! px-5! text-[0.68rem]!">
              Join Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer text-cream p-1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-forest/98 border-t border-leaf/20 px-8 pt-6 pb-8">
          <div className="flex flex-col items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link block py-3 text-[0.8rem]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/join" className="btn-primary mt-5 inline-flex" onClick={() => setMenuOpen(false)}>
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
