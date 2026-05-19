"use client";
import { MapPin, Mail, Phone, Clock, Globe, Video } from "lucide-react";

const contactInfo = [
  { Icon: MapPin, title: "Headquarters", lines: ["Chittagong Hill Tracts, Bangladesh", "Central Committee Office"] },
  { Icon: Mail, title: "Email", lines: ["bmsc.bd@gmail.com", "General inquiries & correspondence"] },
  { Icon: Phone, title: "Phone", lines: ["+880 XXX XXX XXXX", "Available during office hours"] },
  { Icon: Clock, title: "Office Hours", lines: ["Saturday – Thursday: 10am – 6pm", "Friday: Closed"] },
];
const districts = ["Rangamati", "Bandarban", "Khagrachari", "Chittagong", "Dhaka"];

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-linear-to-br from-forest via-[#0d2418] to-forest pt-36 pb-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="section-label text-gold-light! mb-5">Get in Touch</div>
          <h1 className="font-display font-black text-cream mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Contact Us
          </h1>
          <div className="w-15 h-[3px] bg-gold mb-7" />
          <p className="text-cream/72 max-w-[560px] leading-[1.82] text-[1.1rem]">
            Have a question, want to collaborate, or need more information? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info column */}
            <div>
              <div className="section-label mb-8">Contact Information</div>
              <div className="space-y-7">
                {contactInfo.map(({ Icon, title, lines }) => (
                  <div key={title} className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-forest flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold mb-1.5">
                        {title}
                      </div>
                      {lines.map((l, i) => (
                        <div
                          key={i}
                          className={`${i === 0 ? "text-forest font-semibold text-[0.97rem]" : "text-muted text-[0.84rem]"} leading-snug`}
                        >
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-12 pt-10 border-t border-forest/10">
                <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted mb-5">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { Icon: Globe, label: "Facebook" },
                    { Icon: Video, label: "YouTube" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex items-center gap-2.5 px-5 py-2.5 border border-forest/20 text-forest no-underline font-mono text-[0.65rem] tracking-wide transition-all hover:bg-forest hover:text-gold-light hover:border-forest"
                    >
                      <Icon size={15} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Districts */}
              <div className="mt-10 bg-forest p-8">
                <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold mb-5">
                  District Committees
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {districts.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-cream/65 text-[0.85rem]">
                      <span className="text-gold text-[0.5rem]">◆</span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form column */}
            <div>
              <div className="section-label mb-8">Send a Message</div>
              <div className="bg-white border border-forest/[0.07] p-7 sm:p-12">
                <div className="space-y-6">
                  {[
                    { label: "Full Name", type: "text", placeholder: "Your full name" },
                    { label: "Email Address", type: "email", placeholder: "your@email.com" },
                    { label: "Subject", type: "text", placeholder: "How can we help?" },
                  ].map(({ label, type, placeholder }) => (
                    <div key={label}>
                      <label className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] text-forest/80 outline-none transition-colors focus:border-gold placeholder:text-muted/50"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your inquiry…"
                      className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] text-forest/80 outline-none transition-colors focus:border-gold resize-y placeholder:text-muted/50"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-forest block mb-2.5">
                      Inquiry Type
                    </label>
                    <select className="w-full px-4 py-3.5 border border-forest/18 bg-cream font-body text-[0.95rem] text-forest/80 outline-none appearance-none">
                      {[
                        "General Inquiry",
                        "Membership",
                        "Media & Press",
                        "Partnership",
                        "Event Collaboration",
                        "Advocacy & Rights",
                      ].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <button className="btn-primary w-full justify-center py-4!">Send Message</button>
                  <p className="font-mono text-[0.6rem] text-muted tracking-wide text-center">
                    We typically respond within 2–3 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
