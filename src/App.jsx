import { useTheme } from "./hooks/useTheme";
import ScrollProgress from "./components/animation/ScrollProgress";
import CustomCursor from "./components/animation/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Sports from "./components/sections/Sports";
import Rankings from "./components/sections/Rankings";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Sports />
        <Rankings />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
