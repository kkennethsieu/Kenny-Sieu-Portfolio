import DarkModeButton from "./components/DarkModeButton";
import MainLayout from "./components/MainLayout";
import NavBar from "./components/NavBar";
import { applySavedTheme } from "./darkMode";
import FrontPage from "./sections/frontPage/FrontPage";

applySavedTheme();

function App() {
  return (
    <>
      <DarkModeButton className="absolute top-5 right-5" />
      {/* <NavBar /> */}
      {/* <FrontPage /> */}
      <div className="">
        <MainLayout />
      </div>
    </>
  );
}

export default App;
