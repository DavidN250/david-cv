import { useState } from "react";
import CursorDot from "./components/ui/CursorDot";
import FloatingCode from "./components/ui/FloatingCode";
import ScrollProgress from "./components/layout/ScrollProgress";
import IconNav from "./components/layout/IconNav";
import ProfileCard from "./components/layout/ProfileCard";
import MobileNav from "./components/layout/MobileNav";
import Drawer from "./components/layout/Drawer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Works from "./components/sections/Works";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dark, setDark] = useState(true);

  return (
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

      {/* Mobile top bar */}
      <MobileNav />

      {/* Desktop: padded 3-column layout — only right panel scrolls */}
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
          <Hero />
          <About />
          <Resume />
          <Works />
          <Blog />
          <Contact />
        </main>
      </div>
    </div>
  );
}
