import Link from "next/link";
import { ArrowRight, Target, Eye, Flag } from "lucide-react";
import CorePrinciples from "@/app/components/CorePrinciples";

const timeline = [
  {
    year: "1989",
    title: "Foundation",
    desc: "BMSC was established to create unity, communication, and social awareness among Marma students and youth in the Chittagong Hill Tracts.",
  },
  {
    year: "1990s",
    title: "Growth & Organization",
    desc: "Expanded to district committees across CHT. Formalized leadership structures including central, district, and university branch committees.",
  },
  {
    year: "2000s",
    title: "Advocacy & Campaigns",
    desc: "Intensified advocacy for indigenous rights and land rights. Organized major rallies, human chains, and awareness campaigns.",
  },
  {
    year: "2010s",
    title: "Cultural Renaissance",
    desc: "Strengthened Marma language preservation programs and cultural festivals. Grew membership significantly across Bangladesh universities.",
  },
  {
    year: "2020s",
    title: "Digital Era & Resilience",
    desc: "Adapted programs to digital platforms. Expanded focus on women's safety and environmental issues in CHT.",
  },
];

const pillars = [
  {
    Icon: Target,
    title: "Our Mission",
    color: "border-t-gold",
    iconColor: "text-gold",
    iconBg: "bg-gold/10",
    text: "To unite Marma students across Bangladesh, fostering education, cultural pride, leadership, and advocacy for indigenous rights in the Chittagong Hill Tracts and beyond.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    color: "border-t-forest-mid",
    iconColor: "text-forest-mid",
    iconBg: "bg-forest-mid/10",
    text: "A Bangladesh where Marma people enjoy full constitutional rights, cultural recognition, and equal educational and economic opportunities alongside all citizens.",
  },
  {
    Icon: Flag,
    title: "Our Goals",
    color: "border-t-earth",
    iconColor: "text-earth",
    iconBg: "bg-earth/10",
    text: "Preserve the Marma language and traditions; champion land rights; develop student leaders; create social awareness; and build strong, connected Marma communities.",
  },
];

const structure = [
  {
    num: "01",
    title: "Central Committee",
    desc: "Overall leadership and policy direction for all BMSC activities nationwide.",
  },
  {
    num: "02",
    title: "District Committees",
    desc: "Covering 8 districts in CHT and beyond, coordinating regional programs and events.",
  },
  {
    num: "03",
    title: "University Branches",
    desc: "Active student wings in universities and colleges across Bangladesh.",
  },
  {
    num: "04",
    title: "Sub-district Units",
    desc: "Grassroots units connecting students at the local level in their home communities.",
  },
];

const leadership = [
  { role: "Central President", region: "Dhaka" },
  { role: "General Secretary", region: "Chittagong" },
  { role: "Cultural Secretary", region: "Rangamati" },
  { role: "Education Secretary", region: "Bandarban" },
  { role: "Women's Affairs Secretary", region: "Khagrachari" },
  { role: "Organizing Secretary", region: "Dhaka" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="absolute right-[-5%] top-[5%] opacity-[0.07] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400">
            <polygon
              points="200,10 390,200 200,390 10,200"
              stroke="#c8922a"
              strokeWidth="1.5"
              fill="rgba(200,146,42,0.1)"
            />
            <polygon points="200,60 340,200 200,340 60,200" stroke="#e8b84b" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">Our Story</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            About BMSC
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[600px] leading-[1.82] text-[1.1rem]">
            Three decades of service, advocacy, and cultural preservation — building a stronger Marma community, one
            student at a time.
          </p>
        </div>
      </section>

      {/* Mission Vision Goals */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {pillars.map(({ Icon, title, color, iconColor, iconBg, text }) => (
              <div key={title} className={`bg-white p-11 border-t-4 ${color}`}>
                <div className={`w-13 h-13 ${iconBg} flex items-center justify-center mb-6`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <h3 className="font-display font-bold text-forest text-[1.2rem] mb-4">{title}</h3>
                <p className="text-muted text-[0.92rem] leading-[1.82]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <CorePrinciples />

      {/* Timeline */}
      <section className="py-24 bg-forest">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-16">
            <div className="section-label text-gold-light! mb-4">Our Journey</div>
            <h2 className="font-display font-bold text-cream" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
              A History of Struggle & Achievement
            </h2>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-linear-to-b from-gold to-gold/20" />
            {timeline.map((item, i) => (
              <div key={i} className="relative mb-14 pl-9">
                <div className="absolute left-[-45px] top-1.5 w-3 h-3 bg-gold rotate-45" />

                <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-gold mb-2.5">{item.year}</div>
                <h3 className="font-display font-bold text-cream text-[1.2rem] mb-2.5">{item.title}</h3>
                <p className="text-cream/65 text-[0.92rem] leading-[1.78]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Organizational Structure</div>
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)" }}>
              How We Are Organized
            </h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {structure.map(({ num, title, desc }) => (
              <div key={num} className="bg-white p-9 text-center border-b-[3px] border-gold">
                <div className="font-display text-[2.5rem] font-black text-gold/25 mb-3">{num}</div>
                <h3 className="font-display font-bold text-forest text-[1.05rem] mb-3">{title}</h3>
                <p className="text-muted text-[0.85rem] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Leadership</div>
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)" }}>
              Central Committee
            </h2>
            <p className="text-muted text-[0.92rem] mt-4 max-w-[500px] mx-auto">
              Leadership details will be updated from your backend API to reflect the current elected committee.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5">
            {leadership.map((p, i) => (
              <div key={i} className="card-hover bg-white border border-forest/[0.07] p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-forest mx-auto mb-5 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <polygon
                      points="14,2 26,14 14,26 2,14"
                      stroke="#c8922a"
                      strokeWidth="1.5"
                      fill="rgba(200,146,42,0.15)"
                    />
                  </svg>
                </div>
                <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-gold mb-2.5">{p.role}</div>
                <div className="font-display font-semibold text-forest text-[0.85rem] mb-1.5">Central Committee</div>
                <div className="text-muted text-[0.8rem]">{p.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sun py-18">
        <div className="max-w-[1280px] mx-auto px-8 flex justify-center sm:justify-between items-center flex-wrap gap-8">
          <div className="text-center sm:text-left">
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
              Ready to Stand With Us?
            </h2>
            <p className="text-forest/72 text-[0.97rem] mt-3 max-w-[500px]">
              Join thousands of Marma students building a better tomorrow for our community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/join" className="btn-dark">
              Join BMSC <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-7 py-3.5 border border-forest/40 text-forest no-underline hover:bg-forest/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
