import DarkModeButton from "./components/DarkModeButton";
import MainLayout from "./components/MainLayout";
import { applySavedTheme } from "./darkMode";

applySavedTheme();

function App() {
  return (
    <>
      <DarkModeButton className="absolute top-5 right-5" />
      <div className="">
        <MainLayout />
      </div>
    </>
  );
}

export default App;
