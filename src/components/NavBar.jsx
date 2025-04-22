function NavBar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 text-gray-700 text-lg font-medium bg-gray-200 py-5 px-5 rounded-lg">
      <ul className="flex gap-8">
        {["about", "experiences", "projects", "technologies", "contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
