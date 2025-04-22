import { FaGithub, FaLink } from "react-icons/fa6";

function ProjectLinks({ webLink, gitLink }) {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-3 text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
        <FaLink />
        <a href={webLink} className="hover:underline">
          Live Demo
        </a>
      </div>
      <div className="flex items-center gap-3 text-gray-500 hover:text-blue-500 transition-colors duration-300 dark:text-gray-300">
        <FaGithub />
        <a href={gitLink} className="hover:underline">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectLinks;
