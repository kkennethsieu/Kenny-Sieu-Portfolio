import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Experience from "../sections/experience/Experience";
import Projects from "../sections/projects/Projects";
import Technologies from "../sections/technologies/Technologies";

function MainRight() {
  return (
    <div className="bg-gray-300 px-10 py-10">
      <div className="py-10 px-10">
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}

export default MainRight;
