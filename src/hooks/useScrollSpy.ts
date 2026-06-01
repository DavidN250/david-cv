import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], panelId = "main-panel") {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const panel = document.getElementById(panelId) ?? window;

    const onScroll = () => {
      const midY =
        panel instanceof HTMLElement
          ? panel.getBoundingClientRect().top + panel.clientHeight * 0.35
          : window.innerHeight * 0.35;

      let best = sectionIds[0];
      let bestDist = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - midY);
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      });

      setActiveId(best);
    };

    panel.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => panel.removeEventListener("scroll", onScroll);
  }, [sectionIds, panelId]);

  return activeId;
}
