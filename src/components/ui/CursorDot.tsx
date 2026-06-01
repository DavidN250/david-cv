import { useEffect, useRef, useState } from "react";

const IDLE_FACTS = [
  "In my life I have never missed a deadline.",
  "Cost will never break our deal.",
  "Clean code is not an option — it's a habit.",
  "I ship on time, every time.",
  "Your vision + my execution = something great.",
  "Every bug I fix makes the next one easier.",
  "I don't just build features — I build trust.",
  "After deployment I am still there for you.",
  "Effective communication is my first priority.",
];

export default function CursorDot() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const indexRef = useRef(0);

  const [fact, setFact] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -200, mouseY = -200;
    let raf: number;

    const showNextFact = () => {
      const text = IDLE_FACTS[indexRef.current % IDLE_FACTS.length];
      indexRef.current++;
      setFact({ text, x: mouseX, y: mouseY });
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current)  dotRef.current.style.transform  = `translate(${mouseX - 4}px,  ${mouseY - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${mouseX - 16}px, ${mouseY - 16}px)`;

      // Hide fact on movement and restart idle timer
      setFact(null);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(showNextFact, 2800);
    };

    const grow   = () => ringRef.current?.classList.add("scale-[2]");
    const shrink = () => ringRef.current?.classList.remove("scale-[2]");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", (e) => {
      if ((e.target as Element).closest("a, button, [role=button], input, textarea")) grow();
      else shrink();
    });

    const tick = () => { raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-9999 w-2 h-2 rounded-full bg-accent"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-9998 w-8 h-8 rounded-full border border-accent transition-transform duration-200"
        style={{ willChange: "transform" }}
      />

      {/* Idle fun-fact bubble */}
      {fact && (
        <div
          className="pointer-events-none fixed z-9999 font-mono text-xs text-app-white bg-secondary border border-accent rounded-xl px-4 py-2.5 shadow-xl max-w-xs animate-[idle-fact_0.3s_ease-out]"
          style={{
            left: fact.x + 20,
            top:  fact.y - 48,
          }}
        >
          <span className="text-accent mr-1.5">//</span>
          {fact.text}
          {/* Small pointer arrow */}
          <span
            className="absolute -bottom-1.5 left-3 w-3 h-3 bg-secondary border-b border-l border-accent -rotate-45"
          />
        </div>
      )}
    </>
  );
}
