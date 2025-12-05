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
  figmaLink,
  tags,
  highlights,
}) {
  return (
    <div className="flex flex-col gap-2 py-3 rounded-lg">
      <div className="flex items-center gap-2">
        <img
          src={logoImg}
          alt={`${projectTitle} logo`}
          className="rounded-full w-[8%]"
        />
        <h3 className="font-semibold text-xl">{projectTitle}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Description
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {highlights && (
          <div>
            <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Highlights
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              {highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        <ProjectLinks
          gitLink={gitLink}
          webLink={webLink}
          figmaLink={figmaLink}
        />
      </div>

      <div className="gap-3 grid grid-cols-3 sm:grid-cols-4 mt-4">
        {tags.map((tag) => (
          <ProjectTag tag={tag} key={tag.name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
