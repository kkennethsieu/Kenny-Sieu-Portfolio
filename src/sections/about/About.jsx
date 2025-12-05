import SectionTitle from "../../components/SectionTitle";

function About() {
  return (
    <div id="about" className="-mt-14 lg:mt-0">
      <SectionTitle title="About Me" />
      <div className="space-y-5 py-8 text-[.95rem] text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Hi, I'm <strong>Kenny Sieu</strong> —{" "}
          <strong>a Full-Stack Developer.</strong>
          I’m passionate about building dynamic web apps and learning new
          technologies. I enjoy turning <strong>frontend concepts</strong> into
          functional, engaging experiences.
        </p>

        <p>
          I’ve worked on projects spanning microservices, full-stack
          development, and machine learning, which have sharpened my
          problem-solving and coding skills. I’m always looking for new
          challenges to grow as a developer.
        </p>

        <p>
          When I’m not coding, you’ll find me <strong>snowboarding</strong>,
          attending <strong>music festivals</strong>, or exploring hidden gems
          in the city. I also have a background in videography and kinesiology,
          which inspires some of my creative and health-focused projects.
        </p>
      </div>
    </div>
  );
}

export default About;
