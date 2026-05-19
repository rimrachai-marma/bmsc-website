import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Cultural", "Education", "Advocacy", "Awareness", "Community", "Leadership", "Environment"];
const bgs = [
  "bg-forest",
  "bg-forest-mid",
  "bg-[#2a4a36]",
  "bg-forest-light",
  "bg-[#1e3d2a]",
  "bg-forest",
  "bg-forest-mid",
  "bg-[#334d3c]",
  "bg-forest",
  "bg-[#2d5a40]",
  "bg-[#1a3a2a]",
  "bg-forest-light",
  "bg-[#243d30]",
  "bg-forest-mid",
  "bg-[#1c3828]",
  "bg-[#2f4a3a]",
  "bg-forest",
  "bg-[#223a2e]",
  "bg-forest-mid",
  "bg-[#1f3d2c]",
];
const galleryItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: [
    "Cultural Festival 2024",
    "Leadership Training Workshop",
    "Human Chain Rally",
    "Marma Language Day",
    "Community Awareness Program",
    "Annual General Meeting",
    "Scholarship Ceremony",
    "Youth Leadership Camp",
    "Women's Safety Campaign",
    "CHT Environmental March",
    "University Branch Event",
    "District Committee Meeting",
    "Indigenous Rights Seminar",
    "Blood Donation Campaign",
    "Winter Relief Distribution",
    "Press Conference 2025",
    "Sports & Cultural Day",
    "Flood Relief Operation",
    "National Mourning Day",
    "Inter-District Youth Summit",
  ][i],
  category: [
    "Cultural",
    "Education",
    "Advocacy",
    "Cultural",
    "Awareness",
    "Community",
    "Education",
    "Leadership",
    "Awareness",
    "Environment",
    "Community",
    "Leadership",
    "Advocacy",
    "Community",
    "Awareness",
    "Advocacy",
    "Cultural",
    "Community",
    "Awareness",
    "Leadership",
  ][i],
  date: [
    "2024",
    "2024",
    "2025",
    "2024",
    "2024",
    "2024",
    "2023",
    "2024",
    "2025",
    "2024",
    "2024",
    "2024",
    "2025",
    "2024",
    "2024",
    "2025",
    "2024",
    "2024",
    "2025",
    "2025",
  ][i],
}));

export default function GalleryPage() {
  return (
    <>
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">Visual Archive</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Photo Gallery
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[560px] leading-[1.82] text-[1.1rem]">
            A visual record of BMSC&apos;s programs, events, rallies, and cultural celebrations across Bangladesh.
          </p>
          <div className="mt-6 inline-block px-5 py-3 border border-gold/30 bg-gold/5">
            <p className="font-mono text-[0.63rem] text-gold/80 tracking-[0.1em]">
              Dynamic photos, videos, and albums will load from backend API — currently showing static placeholders
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-mono text-[0.62rem] tracking-[0.1em] uppercase px-4 py-1.5 border transition-all duration-300 cursor-pointer ${cat === "All" ? "bg-forest text-cream border-forest" : "border-forest/20 text-muted hover:border-forest hover:text-forest"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className={`${bgs[i % bgs.length]} relative overflow-hidden cursor-pointer group ${i % 5 === 0 ? "row-span-2 aspect-2/3" : ""}`}
              >
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                    <polygon
                      points="100,0 200,100 100,200 0,100"
                      stroke="#c8922a"
                      strokeWidth="0.8"
                      fill="rgba(200,146,42,0.2)"
                    />
                    <polygon points="100,40 160,100 100,160 40,100" stroke="#e8b84b" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="text-gold text-[1.5rem] mb-2">◆</div>
                    <div className="font-display text-cream font-semibold text-[0.9rem]">View Photo</div>
                  </div>
                </div>
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 opacity-[0.28] pointer-events-none">
                  <span className="font-mono text-gold-light text-[0.62rem]">Photo via API {i + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-forest/85 to-transparent p-4">
                  <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-gold-light mb-1">
                    {item.category} · {item.date}
                  </div>
                  <div className="font-display text-cream text-[0.82rem] font-semibold leading-tight">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <button className="btn-dark">Load More Photos</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12">
            <div className="section-label text-gold-light! mb-4">Video Archive</div>
            <h2 className="font-display font-bold text-cream" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              Videos & Documentaries
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#0d2418] relative cursor-pointer overflow-hidden group"
                style={{ aspectRatio: "16/9" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 border-2 border-gold flex items-center justify-center bg-gold/10 group-hover:bg-gold/25 transition-colors">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-gold ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/75 to-transparent p-4">
                  <div className="font-mono text-[0.6rem] text-gold mb-1">Video · API</div>
                  <div className="font-display text-cream text-[0.85rem] font-semibold">Video title from API</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
