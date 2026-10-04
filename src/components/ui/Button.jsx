const styles = {
  primary: "bg-accent text-[#0B2545] hover:brightness-110",
  ghost: "border border-ink/25 text-ink hover:bg-ink/10",
};

export default function Button({ href, variant = "primary", children, ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold transition ${styles[variant]}`}
      {...props}
    >
      {children}
    </a>
  );
}
