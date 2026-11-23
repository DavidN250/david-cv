import { useNavigate, useLocation } from "react-router-dom";

/**
 * Returns a function that scrolls to a section on the main page.
 * If called from a detail page it navigates home first, then scrolls.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId: string) => {
    const scrollNow = () => {
      const panel   = document.getElementById("main-panel");
      const section = document.getElementById(sectionId);
      if (!section) return;
      if (panel) {
        panel.scrollTo({ top: section.offsetTop - 16, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname === "/") {
      scrollNow();
    } else {
      // Navigate home and pass the target section as state
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };
}
