import { useState } from "react";
import { brand, classes } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const field = "w-full min-h-12 rounded-2xl border border-ink/15 bg-bg px-4 py-3 text-ink placeholder:text-muted";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true); // demo only – connect to a real endpoint in production
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
      <div>
        <SectionHeading id="contact-title" title="Enquire now" body="Tell us about your child and our admissions team will call you back." />
        <Reveal className="space-y-2 text-muted">
          <a href={`tel:${brand.phone}`} className="block text-xl font-bold text-ink">{brand.phone}</a>
          <a href={`mailto:${brand.email}`} className="block">{brand.email}</a>
          <address className="max-w-sm not-italic">{brand.address}</address>
        </Reveal>
      </div>

      <Reveal>
        {sent ? (
          <p role="status" className="rounded-3xl bg-accent p-8 text-xl font-bold text-[#0B2545]">
            Thank you! Our admissions team will contact you soon.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-surface p-6 sm:p-8">
            <label className="block">
              <span className="mb-1 block font-medium">Parent name</span>
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="mb-1 block font-medium">Phone number</span>
              <input required type="tel" name="phone" autoComplete="tel" className={field} />
            </label>
            <label className="block">
              <span className="mb-1 block font-medium">Class</span>
              <select required name="class" defaultValue="" className={field}>
                <option value="" disabled>Select class</option>
                {classes.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <button type="submit" className="min-h-12 w-full rounded-full bg-accent px-7 py-3 font-bold text-[#0B2545] transition hover:brightness-110">
              Enquire now
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
