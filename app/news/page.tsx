import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const allNews = [
  {
    id: 1,
    date: "May 15, 2025",
    category: "Cultural Event",
    title: "Annual Marma Cultural Festival Celebrates Heritage",
    excerpt:
      "BMSC organized its annual cultural gathering bringing together Marma students from across the Chittagong Hill Tracts to celebrate language, dance, and tradition.",
    featured: true,
    accent: "bg-sun",
  },
  {
    id: 2,
    date: "March 26, 2025",
    category: "Advocacy",
    title: "Human Chain Rally for Indigenous Land Rights",
    excerpt:
      "Hundreds of BMSC members participated in a peaceful human chain to demand constitutional protection for indigenous land and forest rights in CHT.",
    featured: true,
    accent: "bg-forest-mid",
  },
  {
    id: 3,
    date: "January 18, 2025",
    category: "Education",
    title: "Leadership Training Workshop Trains 80 New Members",
    excerpt:
      "A three-day intensive workshop trained 80 new student leaders from district committees in community organizing, advocacy, and leadership skills.",
    featured: false,
    accent: "bg-leaf",
  },
  {
    id: 4,
    date: "December 10, 2024",
    category: "Awareness",
    title: "BMSC Launches Women's Safety Campaign Across CHT",
    excerpt:
      "A month-long awareness campaign on women's safety was launched across 6 districts, involving discussions, rallies, and community workshops.",
    featured: false,
    accent: "bg-gold",
  },
  {
    id: 5,
    date: "November 2, 2024",
    category: "Community",
    title: "BMSC Distributes Education Supplies to Remote Students",
    excerpt:
      "In partnership with local NGOs, BMSC distributed school supplies to over 200 students in remote CHT areas ahead of the new academic year.",
    featured: false,
    accent: "bg-earth-light",
  },
  {
    id: 6,
    date: "October 5, 2024",
    category: "Advocacy",
    title: "Delegation Meets Education Ministry on Marma Textbooks",
    excerpt:
      "A BMSC delegation met with Ministry of Education representatives to advocate for inclusion of Marma language textbooks in the national curriculum.",
    featured: false,
    accent: "bg-forest-mid",
  },
  {
    id: 7,
    date: "August 20, 2024",
    category: "Cultural Event",
    title: "Marma Language Day Observed with Cultural Programs",
    excerpt:
      "BMSC organized a series of events across universities to observe Marma Language Day, raising awareness about linguistic preservation.",
    featured: false,
    accent: "bg-sun",
  },
];

const categories = ["All", "Cultural Event", "Advocacy", "Education", "Awareness", "Community"];

export default function NewsPage() {
  const featured = allNews.filter((n) => n.featured);
  const rest = allNews.filter((n) => !n.featured);
  return (
    <>
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">Updates</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            News & Events
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[560px] leading-[1.82] text-[1.1rem]">
            Stay informed about BMSC&apos;s latest programs, events, campaigns, and community milestones.
          </p>
          <div className="mt-6 inline-block px-5 py-3 border border-gold/30 bg-gold/5">
            <p className="font-mono text-[0.63rem] text-gold/80 tracking-[0.1em]">
              ⟡ Dynamic news will load from backend API — currently showing static placeholders
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pt-20 pb-10 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="section-label mb-8">Featured</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((item) => (
              <article key={item.id} className="card-hover bg-forest overflow-hidden relative">
                <div className={`h-[5px] ${item.accent}`} />
                <div className="p-10">
                  <div className="flex justify-between items-center mb-5">
                    <span
                      className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase text-gold px-2.5 py-1 border border-gold/40`}
                    >
                      {item.category}
                    </span>
                    <span className="font-mono text-[0.6rem] text-cream/50 flex items-center gap-1.5">
                      <Calendar size={11} />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-cream text-[1.4rem] mb-4 leading-[1.35]">{item.title}</h2>
                  <p className="text-cream/65 text-[0.9rem] leading-[1.78] mb-7">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="font-mono text-[0.63rem] tracking-[0.1em] uppercase text-gold-light no-underline flex items-center gap-1.5 border-b border-gold/40 pb-0.5 w-fit hover:text-leaf hover:border-leaf transition-colors"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All news */}
      <section className="pb-24 pt-10 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-center mb-10 flex-wrap gap-5">
            <div className="section-label">All Stories</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase px-3.5 py-1.5 border cursor-pointer transition-colors ${cat === "All" ? "bg-forest text-cream border-forest" : "border-forest/20 text-muted hover:border-forest hover:text-forest"}`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {rest.map((item) => (
              <article key={item.id} className="card-hover bg-white border border-forest/[0.07] overflow-hidden">
                <div className={`h-[3px] ${item.accent}`} />
                <div className="p-7">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-gold flex items-center gap-1.5">
                      <Tag size={9} />
                      {item.category}
                    </span>
                    <span className="font-mono text-[0.58rem] text-muted">{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-forest text-[1rem] mb-3 leading-[1.38]">{item.title}</h3>
                  <p className="text-muted text-[0.86rem] leading-[1.75] mb-5">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-forest-mid no-underline flex items-center gap-1.5 border-b border-forest-mid pb-0.5 w-fit hover:text-leaf hover:border-leaf transition-colors"
                  >
                    Read More <ArrowRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
