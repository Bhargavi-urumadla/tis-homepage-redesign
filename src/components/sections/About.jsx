import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { about, stats } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading id="about-title" title={about.title} body={about.body} />
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="rounded-3xl bg-surface p-6 sm:p-8">
            <dd className="font-display text-5xl font-extrabold text-brand sm:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-2 text-sm font-medium text-muted">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
      <Reveal className="mt-8 text-muted">{about.est}</Reveal>
    </section>
  );
}
