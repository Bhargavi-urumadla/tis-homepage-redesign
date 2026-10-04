import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark theme"
      onClick={onToggle}
      className="relative flex h-10 w-[72px] items-center rounded-full bg-ink/10 p-1"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[#0B2545] ${dark ? "ml-auto" : ""}`}
      >
        {dark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
}
