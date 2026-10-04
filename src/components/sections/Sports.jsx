import { sports } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-title" className="bg-brand/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="sports-title" title={sports.title} body={sports.body} />
        <ul className="flex flex-wrap gap-3">
          {sports.list.map((name, i) => (
            <Reveal as="li" key={name} delay={(i % 8) * 0.04} y={14}>
              <span
                data-hover
                className="block rounded-full border border-ink/15 bg-surface px-5 py-3 font-medium transition hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-[#0B2545]"
              >
                {name}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
