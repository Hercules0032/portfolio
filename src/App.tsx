import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./hooks/useTheme";
import BlueprintBackground from "./components/BlueprintBackground";
import GrainOverlay from "./components/GrainOverlay";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LiveDeployments from "./components/LiveDeployments";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BlueprintBackground />
        <GrainOverlay />
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <main className="page">
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Timeline />
          <Experience />
          <Projects />
          <LiveDeployments />
          <Certifications />
          <Contact />
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
