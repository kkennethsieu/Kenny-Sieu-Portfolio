import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Experience from "../sections/experience/Experience";
import Projects from "../sections/projects/Projects";
import Technologies from "../sections/technologies/Technologies";

function MainRight() {
  return (
    <div className="py-10 px-10 xl:pr-32">
      <About />
      {/* <Experience /> */}
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default MainRight;
