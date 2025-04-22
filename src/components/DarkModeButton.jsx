import { toggleDarkMode } from "../darkMode";
import { MdDarkMode } from "react-icons/md";

function DarkModeButton({ className }) {
  return (
    <button onClick={toggleDarkMode} className={`${className} text-xl`}>
      <MdDarkMode />
    </button>
  );
}

export default DarkModeButton;
