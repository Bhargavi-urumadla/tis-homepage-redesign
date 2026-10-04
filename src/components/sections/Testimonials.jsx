import { testimonials } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="parents" aria-labelledby="parents-title" className="bg-brand/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="parents-title" title="From the parents" />
        <ul className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08}>
              <figure data-hover className="h-full rounded-3xl bg-surface p-7">
                <blockquote className="text-lg">“{t.quote}”</blockquote>
                <figcaption className="mt-5 font-bold">
                  {t.name} <span className="font-normal text-muted">· {t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
