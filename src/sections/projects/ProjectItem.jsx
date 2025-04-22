import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import ProjectTag from "./ProjectTag";
import ProjectLinks from "./ProjectLinks";

function ProjectItem({
  logoImg,
  projectTitle,
  description,
  gitLink,
  webLink,
  tags,
}) {
  return (
    <div className="flex flex-col gap-2 text-sm rounded-lg py-3">
      <div className="flex items-center gap-2">
        <img
          src={logoImg}
          alt={`${projectTitle} logo`}
          className="w-[8%] rounded-full"
        />
        <h3 className="text-xl font-semibold">{projectTitle}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      <ProjectLinks gitLink={gitLink} webLink={webLink} />

      <div className="flex gap-3 mt-4">
        {tags.map((tag) => (
          <ProjectTag tag={tag} key={tag.name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
