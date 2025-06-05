import {
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiSupabase,
  SiReactquery,
  SiRedux,
} from "react-icons/si";

import TechnologyItem from "./TechnologyItem";
import SectionTitle from "../../components/SectionTitle";

function Technologies() {
  const techStack = [
    { icon: <FaReact />, title: "React", description: "UI Library" },
    { icon: <SiNextdotjs />, title: "Next.js", description: "React Framework" },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      description: "Utility-first Styling",
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      description: "Core Web Language",
    },
    {
      icon: <SiSupabase />,
      title: "Supabase",
      description: "Backend-as-a-Service",
    },
    {
      icon: <SiReactquery />,
      title: "React Query",
      description: "Data Fetching & Caching",
    },
    { icon: <SiVite />, title: "Vite", description: "Build Tool" },
    { icon: <FaGithub />, title: "GitHub", description: "Version Control" },
    { icon: <FaFigma />, title: "Figma", description: "UI Design Tool" },
    { icon: <FaHtml5 />, title: "HTML5", description: "Markup Language" },
    { icon: <FaCss3Alt />, title: "CSS3", description: "Styling Language" },
    { icon: <SiRedux />, title: "Redux", description: "State Management" },
  ];

  return (
    <div id="technologies" className="pt-8">
      <SectionTitle title="Technologies" />
      <div className="grid grid-cols-3 gap-10 pt-8 lg:grid-cols-4">
        {techStack.map((tech) => (
          <TechnologyItem
            key={tech.title}
            icon={tech.icon}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
