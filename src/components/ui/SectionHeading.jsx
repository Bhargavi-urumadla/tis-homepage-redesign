import Reveal from "./Reveal";

export default function SectionHeading({ title, body, id }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <h2 id={id} className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-4 max-w-prose text-lg text-muted">{body}</p>}
    </Reveal>
  );
}
