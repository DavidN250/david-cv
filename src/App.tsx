import { HashRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Hero    from "./components/sections/Hero";
import About   from "./components/sections/About";
import Resume  from "./components/sections/Resume";
import Works   from "./components/sections/Works";
import Blog    from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import BlogPostPage from "./pages/BlogPostPage";
import ProjectPage  from "./pages/ProjectPage";

function MainPage() {
  return (
    <AppShell>
      <Hero />
      <About />
      <Resume />
      <Works />
      <Blog />
      <Contact />
    </AppShell>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"            element={<MainPage />} />
        <Route path="/blog/:slug"  element={<BlogPostPage />} />
        <Route path="/work/:slug"  element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}
