// Floating software-engineering symbols that drift up across the background.
// All values are deterministic (no Math.random) so the layout is stable.

const SYMBOLS = [
  "{ }",  "</>",  "=>",    "//",    "===",   ";",
  "const","async","import","return","npm",   "()",
  "&&",   "git",  "01",    "#!/",   "void",  "API",
  "[ ]",  "SSH",  "curl",  "npm i", "null",  "REST",
  "fn()", "use",  "type",  "pkg",   "tsx",   "git push",
];

const FLOATERS = SYMBOLS.map((text, i) => ({
  text,
  left:     ((i * 4.7 + 2) % 96) + 1,    // 1 – 97 %
  delay:    (i * 1.37) % 16,              // 0 – 16 s
  duration: 16 + (i * 0.83) % 12,        // 16 – 28 s
  size:     11 + (i * 1.3) % 12,         // 11 – 23 px
}));

export default function FloatingCode() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {FLOATERS.map(({ text, left, delay, duration, size }, i) => (
        <span
          key={i}
          className="absolute font-mono text-accent select-none"
          style={{
            left: `${left}%`,
            bottom: "-4%",
            fontSize: size,
            opacity: 0,
            animation: `code-float ${duration}s linear ${delay}s infinite`,
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}
