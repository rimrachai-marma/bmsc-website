"use client";
import { FileText, Download, Calendar, ArrowRight, BookOpen, Film, Newspaper } from "lucide-react";

const archiveCategories = [
  {
    Icon: Newspaper,
    label: "Press Releases",
    count: "45+",
    desc: "Official statements and press releases from BMSC on key issues.",
  },
  {
    Icon: FileText,
    label: "Annual Reports",
    count: "30+",
    desc: "Yearly reports documenting BMSC's activities, finances, and impact.",
  },
  {
    Icon: BookOpen,
    label: "Publications",
    count: "20+",
    desc: "Research papers, advocacy documents, and community publications.",
  },
  {
    Icon: Film,
    label: "Video Archive",
    count: "100+",
    desc: "Recordings of events, rallies, cultural programs, and interviews.",
  },
];

const archiveYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2010, 2005, 2000, "1990s"];

const documents = [
  {
    year: 2025,
    type: "Press Release",
    typeColor: "text-gold border-gold/40",
    title: "BMSC Statement on CHT Land Rights Situation — March 2025",
    date: "March 15, 2025",
  },
  {
    year: 2024,
    type: "Annual Report",
    typeColor: "text-forest-mid border-forest-mid/40",
    title: "BMSC Annual Report 2024 — Achievements & Impact",
    date: "December 31, 2024",
  },
  {
    year: 2024,
    type: "Press Release",
    typeColor: "text-gold border-gold/40",
    title: "BMSC Condemns Violence Against Indigenous Communities in CHT",
    date: "October 8, 2024",
  },
  {
    year: 2024,
    type: "Publication",
    typeColor: "text-earth border-earth/40",
    title: "State of Marma Language Education in Bangladesh — Research Report",
    date: "August 2024",
  },
  {
    year: 2023,
    type: "Annual Report",
    typeColor: "text-forest-mid border-forest-mid/40",
    title: "BMSC Annual Report 2023 — Three Decades of Struggle",
    date: "December 31, 2023",
  },
  {
    year: 2023,
    type: "Publication",
    typeColor: "text-earth border-earth/40",
    title: "Indigenous Land Rights in the CHT: A Policy Brief",
    date: "June 2023",
  },
];

export default function ArchivePage() {
  return (
    <>
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">Document Archive</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Archive
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[600px] leading-[1.82] text-[1.1rem]">
            Three decades of documents, publications, reports, and media capturing BMSC&apos;s journey.
          </p>
          <div className="mt-6 inline-block px-5 py-3 border border-gold/30 bg-gold/5">
            <p className="font-mono text-[0.63rem] text-gold/80 tracking-[0.1em]">
              ⟡ Documents will load from backend API — static placeholders shown
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="section-label mb-8">Browse by Type</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {archiveCategories.map(({ Icon, label, count, desc }) => (
              <div key={label} className="card-hover bg-white p-9 cursor-pointer">
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 bg-forest/[0.07] flex items-center justify-center">
                    <Icon size={22} className="text-forest-mid" />
                  </div>
                  <span className="font-display text-[2rem] font-black text-gold/30">{count}</span>
                </div>
                <h3 className="font-display font-bold text-forest text-[1.05rem] mb-2.5">{label}</h3>
                <p className="text-muted text-[0.84rem] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 pb-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-start">
            {/* Year sidebar */}
            <div className="lg:sticky lg:top-24">
              <div className="section-label mb-5">Browse by Year</div>
              <div className="flex flex-col gap-0.5">
                {archiveYears.map((year, i) => (
                  <button
                    key={year}
                    className={`font-mono text-[0.72rem] tracking-wide px-4 py-2.5 border text-left transition-all cursor-pointer ${i === 0 ? "bg-forest text-gold-light border-forest" : "border-forest/10 text-muted hover:border-forest hover:text-forest"}`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div>
              <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <div className="section-label">2025 Documents</div>
                <span className="font-mono text-[0.62rem] text-muted tracking-wide">
                  Showing 6 of 45+ (API will paginate)
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                {documents.map((doc, i) => (
                  <div
                    key={i}
                    className="card-hover bg-white border border-forest/[0.07] px-7 py-6 flex justify-between items-center gap-6 flex-wrap"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`font-mono text-[0.58rem] tracking-[0.1em] uppercase px-2.5 py-1 border ${doc.typeColor}`}
                        >
                          {doc.type}
                        </span>
                        <span className="font-mono text-[0.58rem] text-muted flex items-center gap-1.5">
                          <Calendar size={10} />
                          {doc.date}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-forest text-[1rem] leading-[1.38]">{doc.title}</h3>
                    </div>
                    <button
                      className="shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold cursor-pointer hover:bg-gold hover:text-forest transition-all"
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "var(--gold)";
                        e.currentTarget.style.color = "var(--forest)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--gold)";
                      }}
                    >
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <button className="btn-primary">
                  Load More from API <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
