function SectionNavBar() {
  return (
    <nav className="">
      <ul className="space-y-4 flex flex-col">
        <li>
          <a
            href="#about"
            className=" hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experiences"
            className=" hover:text-blue-400 transition-colors duration-300"
          >
            Experiences
          </a>
        </li>
        <li>
          <a
            href="#project"
            className=" hover:text-blue-400 transition-colors duration-300"
          >
            Recent Projects
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className=" hover:text-blue-400 transition-colors duration-300"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className=" hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SectionNavBar;
