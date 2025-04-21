import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import ProjectTag from "./ProjectTag";

function ProjectItem({
  logoImg,
  projectTitle,
  description,
  gitLink,
  webLink,
  tags,
}) {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <span className="flex gap-2 items-center font-semibold ">
        <img src={logoImg} className="w-8" />
        <h3>{projectTitle}</h3>
      </span>
      <p>{description}</p>
      <div>
        <span className="flex gap-2 items-center">
          <FaLink />
          <a href={webLink}>{webLink}</a>
        </span>
        <span className="flex gap-2 items-center">
          <FaGithub />
          <a href={gitLink}>{gitLink}</a>
        </span>
      </div>
      <div className="flex gap-3">
        {tags.map((tag) => (
          <ProjectTag tag={tag} key={tag.name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
