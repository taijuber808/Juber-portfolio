import About from "./Component/About";
import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Hero from "./Component/Hero";
import Navbar  from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
