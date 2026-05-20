import { GraduationCap, Scale, Handshake, TrendingUp } from "lucide-react";

const principles = [
  {
    Icon: GraduationCap,
    english: "Education",
    bengali: "শিক্ষা",
    desc: "Empowering every Marma student with knowledge, skills, and opportunities to reach their full potential.",
  },
  {
    Icon: Scale,
    english: "Equality",
    bengali: "সাম্য",
    desc: "Advocating for equal rights, representation, and dignity for all indigenous peoples of the Chittagong Hill Tracts.",
  },
  {
    Icon: Handshake,
    english: "Friendship",
    bengali: "মৈত্রী",
    desc: "Building bridges of solidarity and unity among Marma students, communities, and all peoples of Bangladesh.",
  },
  {
    Icon: TrendingUp,
    english: "Progress",
    bengali: "প্রগতি",
    desc: "Driving forward the social, cultural, and economic development of the Marma community for generations to come.",
  },
];

export default function CorePrinciples() {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Background geometric pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237ab648'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4 text-gold-light!">Our Foundation</div>
          <h2 className="font-display font-bold text-cream" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            Four Core Principles
          </h2>
          {/* Bengali subtitle */}
          <p className="mt-3 text-[0.85rem] sm:text-[1rem] text-gold tracking-widest flex justify-center items-center gap-3 sm:gap-4">
            <span className="font-bengali">শিক্ষা</span>
            <span>&middot;</span>
            <span className="font-bengali">সাম্য</span>
            <span>&middot;</span>
            <span className="font-bengali">মৈত্রী</span>
            <span>&middot;</span>
            <span className="font-bengali">প্রগতি</span>
          </p>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {principles.map(({ Icon, english, bengali, desc }, i) => (
            <div
              key={english}
              className="group relative bg-white/5 border border-gold/15 p-10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
            >
              {/* Hover top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-leaf via-gold to-sun scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Number watermark */}
              <div className="absolute top-4 right-5 font-display font-black text-[3.5rem] text-white/[0.04] leading-none select-none">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gold/10 border border-gold/25 flex items-center justify-center mb-7 group-hover:bg-gold/20 transition-colors duration-300">
                <Icon size={26} className="text-gold" />
              </div>

              {/* Bengali name — large, prominent */}
              <div className="font-bengali font-bold text-sun text-[2rem] leading-none mb-1">{bengali}</div>

              {/* English name */}
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-leaf mb-5">{english}</div>

              {/* Divider */}
              <div className="w-8 h-px bg-linear-to-r from-gold to-transparent mb-5" />

              {/* Description */}
              <p className="text-cream/65 text-[0.88rem] leading-[1.78]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center max-w-[680px] mx-auto">
          <p className="font-display italic text-cream/55 text-[1.05rem] leading-[1.75]">
            &quot;These four pillars — Education, Equality, Friendship, and Progress — are not just words. They are the
            compass that guides every action BMSC takes for the Marma community.&quot;
          </p>
          <div className="mt-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-gold/60">
            — Bangladesh Marma Students Council
          </div>
        </div>
      </div>
    </section>
  );
}
