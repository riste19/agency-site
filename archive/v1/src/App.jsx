import Grain from "./components/atmosphere/Grain.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Process from "./components/Process.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/**
 * App — assembles the single-page site in conversion order.
 * Each section lives in its own component; all copy is centralized in
 * src/data/content.js so you can edit words without touching layout code.
 */
export default function App() {
  return (
    <>
      {/* Accessibility: lets keyboard users jump straight to content */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Site-wide subtle film grain for depth/atmosphere */}
      <Grain />

      <Nav />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
