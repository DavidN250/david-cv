import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CursorDot from "../ui/CursorDot";
import FloatingCode from "../ui/FloatingCode";
import ScrollProgress from "./ScrollProgress";
import IconNav from "./IconNav";
import ProfileCard from "./ProfileCard";
import MobileNav from "./MobileNav";
import Drawer from "./Drawer";
import { HireMeProvider } from "../ui/HireMeModal";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();

  // When navigating back from a detail page with a target section in state, scroll to it
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const attempt = (tries: number) => {
      const panel   = document.getElementById("main-panel");
      const section = document.getElementById(target);
      if (panel && section) {
        panel.scrollTo({ top: section.offsetTop - 16, behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 80);
      }
    };
    attempt(5);
  }, [location.state]);

  return (
    <HireMeProvider>
    <div
      className={`antialiased min-h-screen ${
        dark ? "bg-app-black text-app-white" : "light bg-app-black text-app-white"
      }`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, color-mix(in srgb, var(--color-border) var(--grid-percent, 20%), transparent) 0, color-mix(in srgb, var(--color-border) var(--grid-percent, 20%), transparent) 1px, transparent 1px, transparent 110px)",
        backgroundAttachment: "fixed",
      }}
    >
      <FloatingCode />
      <CursorDot />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <MobileNav />

      <div className="md:h-screen md:overflow-hidden md:flex md:gap-3 md:p-12">
        <IconNav
          onOpenDrawer={() => setDrawerOpen(true)}
          onToggleDark={() => setDark((d) => !d)}
          dark={dark}
        />
        <ProfileCard />

        <main
          id="main-panel"
          className="md:flex-3 md:min-w-0 md:rounded-2xl md:bg-primary md:overflow-y-auto scroll-smooth"
        >
          <ScrollProgress />
          {children}
        </main>
      </div>
    </div>
    </HireMeProvider>
  );
}
