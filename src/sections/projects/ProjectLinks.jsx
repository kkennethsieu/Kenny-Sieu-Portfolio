import { FaGithub, FaLink } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";

function ProjectLinks({ webLink, gitLink, figmaLink }) {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-3 font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500">
        <FaLink />
        <a href={webLink} target="_blank" className="hover:underline">
          Live Demo
        </a>
      </div>
      <div className="flex items-center gap-3 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300">
        <FaGithub />
        <a href={gitLink} target="_blank" className="hover:underline">
          GitHub Repository
        </a>
      </div>
      {figmaLink && (
        <div className="flex items-center gap-3 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300">
          <IoLogoFigma />
          <a href={figmaLink} target="_blank" className="hover:underline">
            Figma
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectLinks;
