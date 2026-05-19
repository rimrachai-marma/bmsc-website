import Link from "next/link";
import { BookOpen, Shield, Users, Landmark, Mic2, Heart, TreePine, Scale, ArrowRight } from "lucide-react";

const programs = [
  {
    Icon: BookOpen,
    title: "Education & Scholarship Program",
    category: "Education",
    borderColor: "border-t-gold",
    tagColor: "text-gold border-gold/50",
    desc: "BMSC works tirelessly to connect Marma students with educational opportunities, from scholarships to tutorial support.",
    activities: [
      "Scholarship application support",
      "Tutoring networks",
      "University admission guidance",
      "Career counseling",
    ],
  },
  {
    Icon: Landmark,
    title: "Marma Language & Cultural Preservation",
    category: "Culture",
    borderColor: "border-t-forest-mid",
    tagColor: "text-forest-mid border-forest-mid/50",
    desc: "BMSC runs language classes, cultural festivals, traditional arts programs, and documentation projects.",
    activities: [
      "Marma language classes",
      "Annual cultural festival",
      "Traditional arts workshops",
      "Oral history documentation",
    ],
  },
  {
    Icon: Shield,
    title: "Indigenous Rights Advocacy",
    category: "Advocacy",
    borderColor: "border-t-earth",
    tagColor: "text-earth border-earth/50",
    desc: "We organize rallies, human chains, discussion forums, and lobbying to advocate for constitutional recognition.",
    activities: ["Rally & demonstration", "Policy advocacy", "National coalition liaison", "Legal awareness campaigns"],
  },
  {
    Icon: Users,
    title: "Student Leadership Development",
    category: "Leadership",
    borderColor: "border-t-forest-light",
    tagColor: "text-forest-light border-forest-light/50",
    desc: "Through structured training and mentorship, BMSC develops the leadership skills of Marma students.",
    activities: [
      "Annual leadership training",
      "Mentorship programs",
      "Public speaking workshops",
      "Committee skill-building",
    ],
  },
  {
    Icon: Mic2,
    title: "Social Awareness Campaigns",
    category: "Awareness",
    borderColor: "border-t-gold-light",
    tagColor: "text-gold border-gold-light/50",
    desc: "BMSC runs targeted campaigns on women's safety, child rights, environmental protection, and healthcare access.",
    activities: [
      "Women's safety campaigns",
      "Child rights awareness",
      "Health & hygiene drives",
      "Environmental advocacy",
    ],
  },
  {
    Icon: Heart,
    title: "Student Welfare & Support",
    category: "Welfare",
    borderColor: "border-t-earth-light",
    tagColor: "text-earth-light border-earth-light/50",
    desc: "We provide a support network for Marma students facing hardship, displacement, or crisis.",
    activities: [
      "Crisis relief assistance",
      "Housing support networks",
      "Mental health awareness",
      "Peer support groups",
    ],
  },
  {
    Icon: TreePine,
    title: "Land Rights & Environmental Protection",
    category: "Environment",
    borderColor: "border-t-forest",
    tagColor: "text-forest border-forest/50",
    desc: "BMSC advocates against illegal land grabbing and deforestation while promoting sustainable practices.",
    activities: ["Land rights documentation", "Deforestation awareness", "Environmental rallies", "Community mapping"],
  },
  {
    Icon: Scale,
    title: "Community Justice Initiatives",
    category: "Justice",
    borderColor: "border-t-sun",
    tagColor: "text-sun border-sun/50",
    desc: "Working with legal aid organizations, BMSC helps community members understand and access their legal rights.",
    activities: [
      "Legal aid facilitation",
      "Rights education sessions",
      "Customary law awareness",
      "Victim support referrals",
    ],
  },
];

const impactStats = [
  { n: "500+", l: "Scholarships Facilitated" },
  { n: "100+", l: "Cultural Events Organized" },
  { n: "30+", l: "Major Rallies & Campaigns" },
  { n: "80+", l: "Leadership Workshops" },
  { n: "8", l: "District Committees Active" },
  { n: "20+", l: "University Branches" },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="absolute right-[-5%] top-[5%] opacity-[0.07] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400">
            <polygon
              points="200,10 390,200 200,390 10,200"
              stroke="#c8922a"
              strokeWidth="1.5"
              fill="rgba(200,146,42,0.1)"
            />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">What We Do</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Programs & Initiatives
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[600px] leading-[1.82] text-[1.1rem]">
            From cultural preservation to rights advocacy, our programs touch every dimension of Marma student life and
            community well-being.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map(({ Icon, title, category, borderColor, tagColor, desc, activities }, i) => (
              <div
                key={i}
                className={`card-hover bg-white border border-forest/[0.07] overflow-hidden border-t-4 ${borderColor}`}
              >
                <div className="p-9">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-13 h-13 bg-forest/[0.07] flex items-center justify-center">
                      <Icon size={24} className="text-forest-mid" />
                    </div>
                    <span
                      className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase px-2.5 py-1 border ${tagColor}`}
                    >
                      {category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-forest text-[1.1rem] mb-3.5 leading-[1.35]">{title}</h3>
                  <p className="text-muted text-[0.88rem] leading-[1.78] mb-6">{desc}</p>
                  <div className="border-t border-forest/8 pt-5">
                    <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-muted mb-3">
                      Key Activities
                    </div>
                    <ul className="space-y-2">
                      {activities.map((act) => (
                        <li key={act} className="flex items-center gap-2.5 text-[0.85rem] text-forest/80">
                          <span className="text-gold text-[0.5rem] shrink-0">◆</span>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <div className="section-label justify-center text-gold-light! mb-5">Our Impact</div>
          <h2 className="font-display font-bold text-cream mb-4" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
            Decades of Meaningful Work
          </h2>
          <p className="text-cream/65 max-w-[560px] mx-auto mb-16 leading-[1.82]">
            Every program we run is driven by a single commitment: empowering the Marma community to thrive on its own
            terms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gold/15">
            {impactStats.map((s) => (
              <div key={s.l} className="py-9 px-6 text-center">
                <div className="stat-number text-[2.8rem]!">{s.n}</div>
                <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-cream/45 mt-2.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <h2 className="font-display font-bold text-forest mb-5" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
            Want to Participate or Partner?
          </h2>
          <p className="text-muted mb-10 leading-[1.82] max-w-[520px] mx-auto">
            Whether you&apos;re a student, educator, organization, or supporter — we welcome collaboration on any of our
            programs.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/join" className="btn-primary">
              Join BMSC <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-7 py-3.5 border border-forest/35 text-forest no-underline hover:bg-forest/8 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
