import { rankings } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Rankings() {
  return (
    <section id="rankings" aria-labelledby="rank-title" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading id="rank-title" title="Ranked among the best boarding schools" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {rankings.map((r, i) => (
          <Reveal as="li" key={r.text} delay={i * 0.08} className="flex gap-5 rounded-3xl bg-surface p-6">
            <span className="font-display text-6xl font-extrabold text-brand">{r.rank}</span>
            <div>
              <p className="text-xl font-bold">{r.place}</p>
              <p className="mt-1 text-muted">{r.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
