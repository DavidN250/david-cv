import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // On desktop the panel scrolls; on mobile the window scrolls
    const getTarget = () => document.getElementById("main-panel") ?? window;

    const onScroll = () => {
      const panel = document.getElementById("main-panel");
      if (panel) {
        setProgress((panel.scrollTop / (panel.scrollHeight - panel.clientHeight)) * 100);
      } else {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
      }
    };

    const target = getTarget();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* sticky so it stays at the top of the panel as it scrolls */
    <div className="sticky top-0 left-0 right-0 z-50 h-0.5 bg-surface">
      <div
        className="h-full bg-accent transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
