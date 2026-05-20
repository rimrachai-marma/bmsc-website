"use client";
import Link from "next/link";
import Image from "next/image";
import { Globe, Video, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "About BMSC", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "News & Events", href: "/news" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Archive", href: "/archive" },
  { label: "Join the Council", href: "/join" },
];

const focusAreas = [
  "Cultural Preservation",
  "Education & Leadership",
  "Indigenous Rights",
  "Land Rights Advocacy",
  "Women's Safety",
  "Community Awareness",
  "Student Welfare",
];

const contactInfo = [
  { Icon: MapPin, text: "Chittagong Hill Tracts, Bangladesh" },
  { Icon: Mail, text: "bmsc.bd@gmail.com" },
  { Icon: Phone, text: "+880 XXX XXX XXXX" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      {/* Top gradient bar — blends logo colors */}
      <div className="h-[5px] bg-linear-to-r from-leaf via-gold to-sun" />

      <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="no-underline flex items-center gap-4 mb-5">
              <div className="relative w-[58px] h-[58px] shrink-0">
                <div className="absolute inset-[-4px] rounded-full border border-leaf/40" />
                <div className="absolute inset-[-8px] rounded-full border border-leaf/15" />
                <Image src="/bmsc-logo.png" alt="BMSC" width={58} height={58} className="rounded-full object-cover" />
              </div>
              <div>
                <div className="font-display font-extrabold text-[1.15rem] text-cream tracking-wide">BMSC</div>
                <div className="font-mono text-[0.54rem] text-leaf tracking-widest uppercase leading-snug mt-0.5">
                  Bangladesh Marma Students Council
                </div>
              </div>
            </Link>

            <p className="text-[0.87rem] text-cream/65 leading-[1.8] mb-6">
              Uniting Marma students across Bangladesh to preserve our culture, advance our rights, and build our future
              together.
            </p>

            {/* Est. badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-leaf/25 bg-leaf/6 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-leaf" />
              <span className="font-mono text-[0.58rem] tracking-widest uppercase text-cream/55">Established 1989</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                { Icon: Globe, label: "Facebook" },
                { Icon: Video, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-leaf/30 flex items-center justify-center text-leaf rounded-sm transition-all duration-300 hover:bg-leaf hover:text-forest hover:border-leaf"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-leaf mb-5">Quick Links</h4>
            <ul className="list-none space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/65 no-underline text-[0.87rem] flex items-center gap-2 transition-colors duration-300 hover:text-leaf"
                  >
                    <span className="text-gold text-[0.5rem]">◆</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-leaf mb-5">Focus Areas</h4>
            <ul className="list-none space-y-2.5">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-center gap-2 text-cream/65 text-[0.87rem]">
                  <span className="text-sun text-[0.5rem]">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-leaf mb-5">Contact Us</h4>
            <div className="space-y-4 mb-7">
              {contactInfo.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 text-cream/65 text-[0.87rem]">
                  <Icon size={15} className="text-sun mt-0.5 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Bengali watermark panel */}
            <div className="p-4 border border-leaf/15 bg-leaf/4 flex items-center gap-4">
              <Image src="/bmsc-logo.png" alt="BMSC" width={38} height={38} className="rounded-full opacity-85" />
              <div>
                <p className="font-bengali text-[0.57rem] tracking-widest uppercase text-leaf mb-1">
                  বাংলাদেশ মারমা স্টুডেন্টস কাউন্সিল
                </p>
                <p className="text-[0.77rem] text-cream/45 leading-relaxed">Serving the Marma community since 1989.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-leaf/15 pt-6 flex flex-wrap justify-between items-center gap-3">
          <p className="font-mono text-[0.72rem] text-cream/35">
            &copy; {new Date().getFullYear()} Bangladesh Marma Students Council. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-mono text-[0.7rem] text-cream/35 no-underline transition-colors duration-300 hover:text-leaf"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
