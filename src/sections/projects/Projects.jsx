import { RiNextjsLine } from "react-icons/ri";
import ProjectItem from "./ProjectItem";
import { SiTailwindcss } from "react-icons/si";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="py-8 space-y-6">
        <ProjectItem
          logoImg="/logo_only.png"
          projectTitle="JobQuest | Job App Tracker"
          description="This is my portfolio website. I built it to showcase my projects and skills. It is a static built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:"
          webLink="https://jobquestnow.vercel.app/"
          gitLink="https://github.com/kkennethsieu/JobQuest"
          tags={[
            {
              icon: <RiNextjsLine />,
              name: "Next.JS",
            },
            {
              icon: <SiTailwindcss />,
              name: "Tailwind CSS   ",
            },
          ]}
        />
        <ProjectItem
          logoImg="/logo_only.png"
          projectTitle="JobQuest | Job App Tracker"
          description="This is my portfolio website. I built it to showcase my projects and skills. It is a static built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:"
          webLink="https://jobquestnow.vercel.app/"
          gitLink="https://github.com/kkennethsieu/JobQuest"
          tags={[
            {
              icon: <RiNextjsLine />,
              name: "Next.JS",
            },
            {
              icon: <SiTailwindcss />,
              name: "Tailwind CSS   ",
            },
          ]}
        />
        <ProjectItem
          logoImg="/logo_only.png"
          projectTitle="JobQuest | Job App Tracker"
          description="This is my portfolio website. I built it to showcase my projects and skills. It is a static built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:"
          webLink="https://jobquestnow.vercel.app/"
          gitLink="https://github.com/kkennethsieu/JobQuest"
          tags={[
            {
              icon: <RiNextjsLine />,
              name: "Next.JS",
            },
            {
              icon: <SiTailwindcss />,
              name: "Tailwind CSS   ",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
