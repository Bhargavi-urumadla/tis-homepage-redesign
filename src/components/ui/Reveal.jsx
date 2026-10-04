import { motion, useReducedMotion } from "framer-motion";

/** Scroll-triggered reveal. Use `delay` (e.g. index * 0.08) to stagger siblings. */
export default function Reveal({ children, delay = 0, y = 24, as = "div", className = "" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
