import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { brand, hero } from "../../data/content";
import Button from "../ui/Button";

const marqueeItems = Array.from({ length: 16 }, (_, i) => `${hero.marquee}-${i}`);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const down = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const parallax = [up, down, up];

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-2">
        <div>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl"
          >
            {hero.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-6 text-xl font-medium">{hero.lead}</p>
            <p className="mt-3 max-w-prose text-lg text-muted">{hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={brand.applyUrl} target="_blank" rel="noreferrer">Apply Now</Button>
              <Button href="#contact" variant="ghost">Enquire Now</Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {hero.images.map((img, i) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              style={{ y: parallax[i] }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="aspect-[3/5] w-full rounded-[2rem] bg-surface object-cover"
            />
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-y border-ink/10 bg-accent py-4 text-[#0B2545]" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-3xl font-extrabold">
          {marqueeItems.map((key) => (
            <span key={key}>{hero.marquee}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
