import NavBar from "./NavBar";

function MainLeft() {
  return (
    <div className="h-screen bg-gray-300 px-20 py-20">
      <div className="py-10 px-10 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">
          👋Hello there, I'm Kenneth!👋
        </h3>
        <h2 className="text-3xl font-bold">
          Delivering the best in design and code.
        </h2>
        <div className=" flex gap-4">
          <p>Full-Stack Developer</p>
          <p>Full-Stack Developer</p>
          <p>Full-Stack Developer</p>
        </div>
        <p>
          💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys.
          🌟 From concept to completion, let’s build the future, one pixel and
          one line o|
        </p>
        <NavBar />
      </div>
    </div>
  );
}

export default MainLeft;
