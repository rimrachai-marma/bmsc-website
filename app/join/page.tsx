import Link from "next/link";
import { CheckCircle, Users, BookOpen, Shield, Heart, ArrowRight } from "lucide-react";

const benefits = [
  {
    Icon: Users,
    title: "Community & Network",
    desc: "Join a network of over 1,000 Marma students across Bangladesh, building lifelong friendships and professional connections.",
  },
  {
    Icon: BookOpen,
    title: "Education Support",
    desc: "Access scholarship guidance, tutoring networks, university resources, and career mentorship from senior members.",
  },
  {
    Icon: Shield,
    title: "Advocacy Platform",
    desc: "Add your voice to BMSC's campaigns for indigenous rights, land rights, and cultural recognition at the national level.",
  },
  {
    Icon: Heart,
    title: "Cultural Pride",
    desc: "Participate in Marma cultural festivals, language programs, and traditions that keep our heritage alive and vibrant.",
  },
];

const membershipTypes = [
  {
    type: "Student Member",
    eligibility: "Currently enrolled Marma students at any level",
    fee: "Free",
    perks: [
      "Full voting rights",
      "Access to all programs",
      "Cultural event participation",
      "Scholarship assistance",
      "Leadership training",
    ],
    featured: false,
  },
  {
    type: "Active Member",
    eligibility: "Marma students in higher education (university/college)",
    fee: "Free",
    perks: [
      "All Student benefits",
      "Committee eligibility",
      "Advocacy campaign leadership",
      "Mentorship opportunities",
      "Official representation",
      "District committee roles",
    ],
    featured: true,
  },
  {
    type: "Associate Member",
    eligibility: "Non-Marma supporters, allies & community members",
    fee: "Voluntary",
    perks: ["Event participation", "Newsletter updates", "Support network access", "Solidarity activities"],
    featured: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Fill the Form",
    desc: "Complete the membership application form with your student details and contact information.",
  },
  {
    num: "02",
    title: "Verification",
    desc: "Our district committee will verify your eligibility and reach out within 5–7 business days.",
  },
  {
    num: "03",
    title: "Orientation",
    desc: "Attend an orientation session to learn about BMSC's mission, programs, and how you can contribute.",
  },
  {
    num: "04",
    title: "Welcome!",
    desc: "You're officially a BMSC member. Get your member card and start participating in programs.",
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="absolute right-[-5%] top-[5%] opacity-[0.07] pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 450 450">
            <polygon
              points="225,10 440,225 225,440 10,225"
              stroke="#c8922a"
              strokeWidth="1.5"
              fill="rgba(200,146,42,0.08)"
            />
            <polygon points="225,70 380,225 225,380 70,225" stroke="#e8b84b" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">Membership</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Join BMSC
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[600px] leading-[1.82] text-[1.1rem]">
            Become part of a movement that has been fighting for Marma student rights, cultural preservation, and
            community empowerment for over three decades.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Why Join?</div>
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
              Member Benefits
            </h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="card-hover bg-white p-10 border-l-[3px] border-gold">
                <div className="w-13 h-13 bg-forest/[0.07] flex items-center justify-center mb-6">
                  <Icon size={24} className="text-forest-mid" />
                </div>
                <h3 className="font-display font-bold text-forest text-[1.08rem] mb-3.5">{title}</h3>
                <p className="text-muted text-[0.9rem] leading-[1.78]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership types */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Membership Types</div>
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
              Choose Your Role
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {membershipTypes.map(({ type, eligibility, fee, perks, featured }) => (
              <div
                key={type}
                className={`p-10 relative overflow-hidden ${featured ? "bg-forest" : "bg-white border border-forest/8"}`}
              >
                {featured && (
                  <div className="absolute top-4 right-4 bg-sun px-3 py-1 font-mono text-[0.55rem] tracking-[0.1em] uppercase text-forest font-semibold">
                    Most Common
                  </div>
                )}
                <div
                  className={`font-mono text-[0.62rem] tracking-[0.15em] uppercase mb-3 ${featured ? "text-gold" : "text-gold"}`}
                >
                  {fee === "Free" ? "Free Membership" : "Associate"}
                </div>
                <h3
                  className={`font-display font-bold text-[1.3rem] mb-2.5 ${featured ? "text-cream" : "text-forest"}`}
                >
                  {type}
                </h3>
                <p className={`text-[0.84rem] mb-7 leading-relaxed ${featured ? "text-cream/62" : "text-muted"}`}>
                  {eligibility}
                </p>
                <div className={`border-t pt-6 space-y-3 ${featured ? "border-gold/30" : "border-forest/8"}`}>
                  {perks.map((p) => (
                    <div
                      key={p}
                      className={`flex items-center gap-2.5 text-[0.87rem] ${featured ? "text-cream/78" : "text-forest/80"}`}
                    >
                      <CheckCircle size={15} className="text-gold shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-forest">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center text-gold-light! mb-4">Process</div>
            <h2 className="font-display font-bold text-cream" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
              How to Join
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="p-10 border-l border-gold/20">
                <div className="font-display text-[3rem] font-black text-gold/25 leading-none mb-4">{num}</div>
                <h3 className="font-display font-bold text-cream text-[1.1rem] mb-3">{title}</h3>
                <p className="text-cream/60 text-[0.87rem] leading-[1.75]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-cream">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Application</div>
            <h2 className="font-display font-bold text-forest" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)" }}>
              Membership Application Form
            </h2>
            <p className="text-muted text-[0.92rem] mt-4">
              Fill in your details and our team will get back to you within 5–7 business days.
            </p>
          </div>
          <div className="bg-white border border-forest/[0.07] p-7 sm:p-10 md:p-14">
            <div className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {["First Name", "Last Name"].map((l) => (
                  <div key={l}>
                    <label className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                      {l} *
                    </label>
                    <input
                      type="text"
                      placeholder={l}
                      className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                    />
                  </div>
                ))}
              </div>
              {[
                { label: "Email Address *", type: "email", placeholder: "your@email.com" },
                { label: "Phone Number *", type: "tel", placeholder: "+880 XXX XXX XXXX" },
                { label: "Current Institution *", type: "text", placeholder: "University / College / School name" },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                  />
                </div>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    label: "District *",
                    opts: ["Select district", "Rangamati", "Bandarban", "Khagrachari", "Chittagong", "Dhaka", "Other"],
                  },
                  {
                    label: "Membership Type *",
                    opts: ["Select type", "Student Member", "Active Member", "Associate Member"],
                  },
                ].map(({ label, opts }) => (
                  <div key={label}>
                    <label className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                      {label}
                    </label>
                    <select className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] outline-none appearance-none focus:border-gold transition-colors">
                      {opts.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div>
                <label className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                  Why do you want to join BMSC?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your motivation and how you'd like to contribute…"
                  className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] outline-none focus:border-gold transition-colors resize-y placeholder:text-muted/50"
                />
              </div>
              <button className="btn-primary w-full justify-center py-4! text-[0.75rem]">
                Submit Application <ArrowRight size={15} />
              </button>
              <p className="font-mono text-[0.6rem] text-muted tracking-wide text-center leading-relaxed">
                By submitting, you agree to BMSC&apos;s membership terms. Your information will be kept confidential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
