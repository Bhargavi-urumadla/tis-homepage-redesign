import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { brand, navItems } from "../../data/content";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-1 z-50 px-3 sm:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-bg/80 px-4 py-2 backdrop-blur-md"
      >
        <a href="#top" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
          <img src={brand.logo} alt="" className="h-10 w-auto" />
          <span className="hidden font-display font-extrabold sm:block">{brand.short}</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-medium text-muted transition hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={`tel:${brand.phone}`} className="hidden items-center gap-2 text-sm font-bold xl:flex">
            <Phone size={16} /> {brand.phone}
          </a>
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <span className="hidden sm:block">
            <Button href={brand.applyUrl} target="_blank" rel="noreferrer">Apply Now</Button>
          </span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-ink/10 bg-surface p-4 lg:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-lg font-medium hover:bg-ink/10">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-4 pt-3">
              <Button href={brand.applyUrl} target="_blank" rel="noreferrer">Apply Now</Button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
