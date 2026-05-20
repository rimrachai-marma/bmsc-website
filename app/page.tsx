"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Users, Landmark, Mic2, Heart, Quote, MapIcon, MapPinIcon } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import CorePrinciples from "@/app/components/CorePrinciples";
import { cn } from "@/lib/utils";

const stats = [
  { number: `${new Date().getFullYear() - 1989}+`, label: "Years" },
  { number: "1000+", label: "Active Members" },
  { number: "8", label: "District Committees" },
  { number: "50+", label: "Programs Annually" },
];

const programs = [
  {
    Icon: BookOpen,
    title: "Education & Scholarship",
    desc: "Supporting Marma students with resources, mentorship, and scholarship opportunities to break educational barriers.",
  },
  {
    Icon: Landmark,
    title: "Cultural Preservation",
    desc: "Safeguarding Marma language, arts, and traditions through festivals, language programs, and cultural events.",
  },
  {
    Icon: Shield,
    title: "Indigenous Rights Advocacy",
    desc: "Organizing rallies, human chains, and campaigns for land rights and constitutional recognition of indigenous peoples.",
  },
  {
    Icon: Users,
    title: "Leadership Development",
    desc: "Cultivating the next generation of Marma leaders through training programs and active community participation.",
  },
  {
    Icon: Mic2,
    title: "Awareness Campaigns",
    desc: "Running social campaigns on women's safety, environmental issues, and community well-being across CHT districts.",
  },
  {
    Icon: Heart,
    title: "Student Welfare",
    desc: "Providing support networks, crisis assistance, and community resources for Marma students across Bangladesh.",
  },
];

const news = [
  {
    date: "May 2025",
    category: "Cultural Event",
    title: "Annual Marma Cultural Festival Celebrates Heritage",
    excerpt:
      "BMSC organized its annual cultural gathering bringing together Marma students from across the Chittagong Hill Tracts.",
    accent: "bg-sun",
  },
  {
    date: "March 2025",
    category: "Advocacy",
    title: "Human Chain Rally for Indigenous Land Rights",
    excerpt:
      "Hundreds of BMSC members participated in a peaceful human chain demanding constitutional protection for land rights.",
    accent: "bg-forest-mid",
  },
  {
    date: "January 2025",
    category: "Education",
    title: "Leadership Training Workshop Trains 80 New Members",
    excerpt:
      "A three-day intensive workshop trained 80 new student leaders from district committees in community organizing.",
    accent: "bg-earth-light",
  },
];

const testimonials = [
  {
    quote:
      "BMSC gave me the platform to speak up for my community. The leadership training I received here shaped not just my career but my entire sense of purpose as a Marma student.",
    name: "Mong Shwe Prue Marma",
    role: "University of Dhaka, Former District Secretary",
    region: "Rangamati",
  },
  {
    quote:
      "Growing up in a remote part of CHT, I felt isolated. BMSC connected me with hundreds of students who share my struggles and my dreams. It truly became my second family.",
    name: "Ching Ye Marma",
    role: "Chittagong University, Active Member",
    region: "Bandarban",
  },
  {
    quote:
      "Through BMSC's scholarship support, I was able to continue my education when my family could no longer afford it. They fight for us every single day.",
    name: "Mya Nue Marma",
    role: "BUET Graduate, Alumni Member",
    region: "Khagrachari",
  },
  {
    quote:
      "The cultural programs organized by BMSC rekindled my pride in the Marma language. I started learning it seriously and now I teach it to younger students.",
    name: "Thui Hla Marma",
    role: "School Teacher & Branch Organizer",
    region: "Rangamati",
  },
  {
    quote:
      "BMSC's advocacy work on land rights has given our entire community a voice we never had before. Their rallies and campaigns create real pressure for real change.",
    name: "Kyaw Zin Marma",
    role: "Law Graduate, Legal Awareness Volunteer",
    region: "Chittagong",
  },
];

const galleryItems = [
  { span: "col-span-2 row-span-2", label: "Cultural Festival 2024", bg: "bg-forest" },
  { span: "col-span-1 row-span-1", label: "Leadership Training", bg: "bg-forest-mid" },
  { span: "col-span-1 row-span-1", label: "Human Chain Rally", bg: "bg-forest-light" },
  { span: "col-span-1 row-span-1", label: "Community Workshop", bg: "bg-forest/80" },
  { span: "col-span-1 row-span-1", label: "Annual Meeting", bg: "bg-forest-mid/80" },
];

export default function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const timeout = setTimeout(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    }, 0);

    api.on("select", () => setCurrent(api.selectedScrollSnap()));

    return () => clearTimeout(timeout);
  }, [api]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-forest via-[#0d2418] to-[#1b3524]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute right-[-8%] top-[5%] opacity-[0.08] w-[56vw] max-w-[720px]"
            viewBox="0 0 600 600"
            fill="none"
          >
            <polygon
              points="300,20 580,300 300,580 20,300"
              stroke="#c8922a"
              strokeWidth="1.5"
              fill="rgba(200,146,42,0.04)"
            />
            <polygon
              points="300,80 520,300 300,520 80,300"
              stroke="#c8922a"
              strokeWidth="1"
              fill="rgba(200,146,42,0.03)"
            />
            <polygon
              points="300,200 400,300 300,400 200,300"
              stroke="#e8b84b"
              strokeWidth="1.2"
              fill="rgba(200,146,42,0.05)"
            />
          </svg>
          <div className="animate-spin-slow absolute left-[6%] bottom-[22%] opacity-15">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <polygon points="45,4 86,45 45,86 4,45" stroke="#7ab648" strokeWidth="1.5" fill="none" />
              <polygon points="45,22 68,45 45,68 22,45" stroke="#c8922a" strokeWidth="1" fill="rgba(200,146,42,0.08)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 opacity-60 bg-linear-to-r from-transparent via-gold to-transparent" />
        </div>
        <div className="max-w-[1280px] mx-auto px-8 pt-36 pb-24 relative z-10">
          <div className="max-w-[780px]">
            <p className="section-label animate-fade-in delay-1 mb-7 text-gold-light!">
              Bangladesh Marma Students Council
            </p>
            <h1
              className="animate-fade-up delay-2 font-display font-black text-cream mb-7 leading-[1.07]"
              style={{ fontSize: "clamp(2.8rem,6vw,5.2rem)" }}
            >
              Rooted in Culture,
              <br />
              <em className="text-sun not-italic">Rising</em> in Unity
            </h1>
            <p
              className="animate-fade-up delay-3 text-cream/75 max-w-[580px] leading-[1.85] mb-12"
              style={{ fontSize: "clamp(1rem,2vw,1.2rem)" }}
            >
              Since 1989, BMSC has united Marma students across Bangladesh — preserving our language, defending our
              rights, and building leaders who serve the Chittagong Hill Tracts community.
            </p>
            <div className="animate-fade-up delay-4 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Discover Our Story <ArrowRight size={15} />
              </Link>
              <Link href="/join" className="btn-outline">
                Become a Member
              </Link>
            </div>
            <div className="animate-fade-in delay-5 flex items-center gap-3.5 mt-20">
              <div className="w-px h-11 bg-linear-to-b from-gold to-transparent" />
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cream/35">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-sun overflow-hidden py-2.5">
        <div className="animate-marquee flex whitespace-nowrap w-max">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="font-mono text-[0.67rem] tracking-[0.12em] uppercase text-forest font-semibold">
                &nbsp;&nbsp;◆&nbsp;&nbsp;শিক্ষা · Education&nbsp;&nbsp;◆&nbsp;&nbsp;সাম্য ·
                Equality&nbsp;&nbsp;◆&nbsp;&nbsp;মৈত্রী · Friendship&nbsp;&nbsp;◆&nbsp;&nbsp;প্রগতি ·
                Progress&nbsp;&nbsp;◆&nbsp;&nbsp;Cultural Preservation&nbsp;&nbsp;◆&nbsp;&nbsp;Indigenous
                Rights&nbsp;&nbsp;◆&nbsp;&nbsp;Land Rights Advocacy&nbsp;&nbsp;◆&nbsp;&nbsp;Student
                Unity&nbsp;&nbsp;◆&nbsp;&nbsp;Marma Heritage&nbsp;&nbsp;◆&nbsp;&nbsp;CHT Development&nbsp;&nbsp;
              </span>
            ))}
        </div>
      </div>

      {/* STATS */}
      <section className="bg-forest py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "py-10 px-7 text-center border-gold/20",
                  i % 2 === 0 && "border-r",
                  i < 2 && "border-b md:border-b-0",
                  i < 3 && "md:border-r",
                )}
              >
                <div className="stat-number">{s.number}</div>
                <div className="font-mono text-[0.63rem] tracking-[0.15em] uppercase text-cream/50 mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <CorePrinciples />

      {/* ABOUT */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-label mb-5">Who We Are</div>
              <h2
                className="font-display font-bold text-forest mb-6"
                style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}
              >
                A Voice for Marma Students Across Bangladesh
              </h2>
              <div className="gold-rule mb-8" />
              <p className="text-muted leading-[1.88] mb-5">
                Founded in 1989, BMSC emerged from a deep need — to create unity, communication, and social awareness
                among Marma students and youth scattered across the Chittagong Hill Tracts and beyond.
              </p>
              <p className="text-muted leading-[1.88] mb-9">
                Through district committees, university branches, and a central committee, we have grown into a movement
                that touches every corner of Marma student life — from the classroom to the halls of advocacy.
              </p>
              <Link href="/about" className="btn-dark">
                Our Full Story <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-forest p-7 md:p-12 relative overflow-hidden">
                {[
                  "top-0 left-0 border-t-2 border-l-2",
                  "top-0 right-0 border-t-2 border-r-2",
                  "bottom-0 left-0 border-b-2 border-l-2",
                  "bottom-0 right-0 border-b-2 border-r-2",
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-5 h-5 border-gold ${cls}`} />
                ))}
                <blockquote className="font-display text-[1.45rem] italic text-cream leading-[1.65] mb-8">
                  &quot;Our language is our identity. Our unity is our strength. Our rights are our birthright.&quot;
                </blockquote>
                <div className="border-t border-gold/30 pt-6">
                  <div className="font-mono text-[0.62rem] text-gold tracking-[0.15em] uppercase mb-3 sm:mb-4">
                    Four Core Principles
                  </div>
                  <div className="flex gap-2">
                    {[
                      { en: "Education", bn: "শিক্ষা" },
                      { en: "Equality", bn: "সাম্য" },
                      { en: "Friendship", bn: "মৈত্রী" },
                      { en: "Progress", bn: "প্রগতি" },
                    ].map((v) => (
                      <span
                        key={v.en}
                        className="sm:px-3.5 sm:py-1.5 sm:border border-gold/30 flex flex-col leading-tight"
                      >
                        <span className="font-bengali text-sun text-[0.75rem] sm:text-[0.95rem]">{v.bn}</span>
                        <span className="font-mono text-cream/50 text-[0.55rem] sm:text-[0.6rem] tracking-widest uppercase">
                          {v.en}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-16px] right-[-16px] w-20 h-20 bg-sun -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-cream-dark marma-pattern">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">What We Do</div>
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
              Our Programs & Initiatives
            </h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {programs.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="card-hover bg-white p-10 relative overflow-hidden border-b-[3px] border-transparent hover:border-gold transition-[border-color] duration-300"
              >
                <div className="absolute top-5 right-6 font-display text-[3rem] font-black text-forest/[0.04] leading-none">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 bg-forest/[0.07] flex items-center justify-center mb-6">
                  <Icon size={22} className="text-forest-mid" />
                </div>
                <h3 className="font-display font-bold text-forest text-[1.08rem] mb-3.5">{title}</h3>
                <p className="text-muted text-[0.9rem] leading-[1.78]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/programs" className="btn-primary">
              All Programs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-forest overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4 text-gold-light!">Community Voices</div>
            <h2 className="font-display font-bold text-cream" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
              What Our Members Say
            </h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full max-w-5xl mx-auto px-3 md:px-6 lg:px-12"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <div className="h-full border border-gold/20 bg-white/5 p-7 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-leaf via-gold to-sun" />
                    <Quote size={32} className="text-gold/40 mb-6" />
                    <p className="text-cream/80 leading-[1.85] text-[0.97rem] italic mb-8 flex-1">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="border-t border-gold/20 pt-5 flex items-center gap-4">
                      <div className="w-11 h-11 bg-linear-to-br from-leaf/40 to-forest-mid rounded-full flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-cream text-[1rem]">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-cream text-[0.97rem]">{t.name}</div>
                        <div className="font-mono text-[0.6rem] text-gold tracking-wide uppercase mt-0.5">{t.role}</div>
                        <div className="font-mono text-[0.58rem] text-cream/45 mt-0.5 flex items-center gap-1.5">
                          <MapPinIcon className="inline-block size-4" /> <span>{t.region}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  i === current ? "bg-gold w-8" : "bg-gold/30 w-2 hover:bg-gold/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-14 flex-wrap gap-5">
            <div>
              <div className="section-label mb-4">Latest Updates</div>
              <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
                News & Events
              </h2>
            </div>
            <Link
              href="/news"
              className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-gold no-underline flex items-center gap-2 hover:text-sun transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <article key={i} className="card-hover bg-white border border-forest/[0.07] overflow-hidden">
                <div className={`h-1 ${item.accent}`} />
                <div className="p-8">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-gold px-2.5 py-1 border border-gold/40">
                      {item.category}
                    </span>
                    <span className="font-mono text-[0.6rem] text-muted">{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-forest text-[1.05rem] mb-3 leading-[1.4]">{item.title}</h3>
                  <p className="text-muted text-[0.87rem] leading-[1.78] mb-6">{item.excerpt}</p>
                  <Link
                    href="/news"
                    className="font-mono text-[0.63rem] tracking-[0.1em] uppercase text-forest-mid no-underline flex items-center gap-1.5 border-b border-forest-mid pb-0.5 w-fit hover:text-leaf hover:border-leaf transition-colors"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-linear-to-br from-forest to-forest-mid relative overflow-hidden">
        <div className="absolute left-[-4%] top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none">
          <svg width="380" height="380" viewBox="0 0 380 380">
            <polygon
              points="190,10 370,190 190,370 10,190"
              stroke="#c8922a"
              strokeWidth="1.5"
              fill="rgba(200,146,42,0.1)"
            />
            <polygon points="190,60 320,190 190,320 60,190" stroke="#e8b84b" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="max-w-[780px] mx-auto px-8 text-center relative z-10">
          <div className="section-label justify-center mb-6 text-gold-light!">Join the Movement</div>
          <h2 className="font-display font-bold text-cream mb-6" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Be Part of Something Greater
          </h2>
          <p className="text-cream/70 mb-11 leading-[1.82] max-w-[540px] mx-auto text-[1.05rem]">
            Whether you&apos;re a Marma student, a community supporter, or an ally — there&apos;s a place for you in
            BMSC. Together, we protect our heritage and shape our future.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/join" className="btn-primary">
              Become a Member <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
            <div>
              <div className="section-label mb-4">Visual Archive</div>
              <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
                Gallery & Media
              </h2>
            </div>
            <Link
              href="/gallery"
              className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-gold no-underline flex items-center gap-2 hover:text-sun transition-colors"
            >
              Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
          {/* Mobile: 1 top + 2x2 bottom | Tablet+: 4-col/2-row grid */}
          <div className="md:hidden flex flex-col gap-1">
            {/* Top: first item full width */}
            {galleryItems[0] && (
              <div
                className={`${galleryItems[0].bg} relative overflow-hidden cursor-pointer group flex items-end aspect-3/2`}
              >
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                    <polygon
                      points="100,0 200,100 100,200 0,100"
                      stroke="#c8922a"
                      strokeWidth="0.8"
                      fill="rgba(200,146,42,0.2)"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-forest/85 to-transparent p-3 sm:p-4">
                  <div className="font-mono text-[0.5rem] sm:text-[0.55rem] tracking-[0.1em] uppercase text-gold-light mb-0.5 sm:mb-1">
                    {/* {item.category} · {item.date} */}
                    Category · 2025
                  </div>
                  <div className="font-display text-cream text-[0.75rem] sm:text-[0.82rem] font-semibold leading-tight">
                    {/* {item.title} */}
                    Gallery Image Title
                  </div>
                </div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none z-10">
                  <span className="font-mono text-[0.62rem] text-gold-light">Photo via API</span>
                </div>
              </div>
            )}

            {/* Bottom: remaining 4 items in 2x2 grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              {galleryItems.slice(1).map((cell, i) => (
                <div
                  key={i + 1}
                  className={`${cell.bg} relative overflow-hidden cursor-pointer group flex items-end aspect-3/2`}
                >
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                      <polygon
                        points="100,0 200,100 100,200 0,100"
                        stroke="#c8922a"
                        strokeWidth="0.8"
                        fill="rgba(200,146,42,0.2)"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-forest/85 to-transparent p-3 sm:p-4">
                    <div className="font-mono text-[0.5rem] sm:text-[0.55rem] tracking-[0.1em] uppercase text-gold-light mb-0.5 sm:mb-1">
                      {/* {item.category} · {item.date} */}
                      Category · 2025
                    </div>
                    <div className="font-display text-cream text-[0.75rem] sm:text-[0.82rem] font-semibold leading-tight">
                      {/* {item.title} */}
                      Gallery Image Title
                    </div>
                  </div>
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none z-10">
                    <span className="font-mono text-[0.62rem] text-gold-light">API</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet+: 4-col/2-row grid */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-1">
            {galleryItems.map((cell, i) => (
              <div
                key={i}
                className={`${cell.span} ${cell.bg} relative overflow-hidden cursor-pointer group flex items-end aspect-3/2`}
              >
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                    <polygon
                      points="100,0 200,100 100,200 0,100"
                      stroke="#c8922a"
                      strokeWidth="0.8"
                      fill="rgba(200,146,42,0.2)"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-forest/85 to-transparent p-4">
                  <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-gold-light mb-1">
                    {/* {item.category} · {item.date} */}
                    Category · 2025
                  </div>
                  <div className="font-display text-cream text-[0.82rem] font-semibold leading-tight">
                    {/* {item.title} */}
                    Gallery Image Title
                  </div>
                </div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none z-10">
                  <span className="font-mono text-[0.62rem] text-gold-light">{i === 0 ? "Photo via API" : "API"}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 font-mono text-[0.62rem] text-muted tracking-wide">
            Gallery images will load dynamically from backend API
          </p>
        </div>
      </section>
    </>
  );
}
