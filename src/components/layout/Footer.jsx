import { brand } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-extrabold">{brand.name}</p>
          <address className="mt-2 max-w-md text-sm not-italic text-muted">{brand.address}</address>
        </div>
        <div className="text-sm text-muted">
          <a href={`tel:${brand.phone}`} className="block hover:text-ink">Admission Helpline: {brand.phone}</a>
          <a href={`mailto:${brand.email}`} className="block hover:text-ink">{brand.email}</a>
          <p className="mt-2">© {new Date().getFullYear()} {brand.name}, Dehradun. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
