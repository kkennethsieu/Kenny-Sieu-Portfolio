import { useState } from "react";

function SectionNavBar() {
  const [activeLink, setActiveLink] = useState("about");
  return (
    <nav className="">
      <ul className="gap-4 lg:flex flex-col hidden text-[.9rem]">
        <li
          onClick={() => setActiveLink("about")}
          className="flex gap-2 items-center group"
        >
          <div
            className={`border-b-2 w-8 group-hover:border-blue-400 border-gray-500 group-hover:w-[4.5rem] transition-all duration-500 ${
              activeLink === "about" && "w-[4.5rem] border-blue-400"
            }`}
          ></div>
          <a
            href="#about"
            className={`group-hover:text-blue-400 transition-colors duration-300 ${
              activeLink === "about" && "text-blue-400"
            }`}
          >
            About
          </a>
        </li>
        <li
          onClick={() => setActiveLink("projects")}
          className="flex gap-2 items-center group"
        >
          <div
            className={`border-b-2 w-8 group-hover:border-blue-400 border-gray-500 group-hover:w-[4.5rem] transition-all duration-500 ${
              activeLink === "projects" && "w-[4.5rem] border-blue-400"
            }`}
          ></div>
          <a
            href="#projects"
            className={`group-hover:text-blue-400 transition-colors duration-300 ${
              activeLink === "projects" && "text-blue-400"
            }`}
          >
            Recent Projects
          </a>
        </li>
        <li
          onClick={() => setActiveLink("technologies")}
          className="flex gap-2 items-center group"
        >
          <div
            className={`border-b-2 w-8 group-hover:border-blue-400 border-gray-500 group-hover:w-[4.5rem] transition-all duration-500 ${
              activeLink === "technologies" && "w-[4.5rem] border-blue-400"
            }`}
          ></div>
          <a
            href="#technologies"
            className={`group-hover:text-blue-400 transition-colors duration-300 ${
              activeLink === "technologies" && "text-blue-400"
            }`}
          >
            Technologies
          </a>
        </li>
        <li
          onClick={() => setActiveLink("contact")}
          className="flex gap-2 items-center group"
        >
          <div
            className={`border-b-2 w-8 group-hover:border-blue-400 border-gray-500 group-hover:w-[4.5rem] transition-all duration-500 ${
              activeLink === "contact" && "w-[4.5rem] border-blue-400"
            }`}
          ></div>
          <a
            href="#contact"
            className={`group-hover:text-blue-400 transition-colors duration-300 ${
              activeLink === "contact" && "text-blue-400"
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SectionNavBar;
