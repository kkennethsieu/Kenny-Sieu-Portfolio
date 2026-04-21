import SectionTitle from "../../components/SectionTitle";

function About() {
  return (
    <div id="about" className="-mt-14 lg:mt-0">
      <SectionTitle title="About Me" />
      <div className="space-y-5 py-8 text-[.95rem] text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Hi, I'm <strong>Kenny Sieu</strong> —{" "}
          <strong>an iOS & Full-Stack Developer.</strong> I'm passionate about
          building unique mobile experiences and dynamic web apps. Whether it's
          a native iOS app or a full-stack platform, I love turning{" "}
          <strong>ideas into engaging and functional products.</strong>
        </p>

        <p>
          I've worked on various projects spanning iOS development, full-stack
          architecture, microservices, and cloud infrastructure. I'm always
          eager to keep learning and looking for new challenges to grow as a
          developer.
        </p>

        <p>
          When I'm not coding, you'll most definitely find me snowboarding in
          the winter or attending music festivals in the summer. I love hiking
          and camping, so you'll catch me out in nature whenever I get the
          chance. I also have a background in videography, photography, and
          kinesiology, having run my own videography business and earned a
          degree in kinesiology before pivoting to software, which inspires a
          lot of my creative projects.
        </p>
      </div>
    </div>
  );
}

export default About;
