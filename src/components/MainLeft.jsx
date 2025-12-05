import SectionNavBar from "./SectionNavBar";

function MainLeft() {
  return (
    <div className="flex md:flex-row flex-col items-center md:items-start gap-10 lg:-ml-8 px-6 md:px-12 lg:px-0 py-10">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="/me.jpg"
          alt="Kenny"
          className="shadow-xl rounded-full w-40 md:w-48 lg:w-52 h-40 md:h-48 lg:h-52 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h2 className="space-y-1 font-bold md:text-left text-center leading-tight">
          <div className="flex justify-center md:justify-normal items-center gap-2 text-3xl">
            <img src="/portfolioCircle.png" className="w-10" />
            <span>Hi, I'm Kenny </span>
            <span>👋</span>
          </div>
          <span className="block text-indigo-600 text-4xl">
            Crafting Seamless
          </span>
          <span className="block text-indigo-600 text-4xl">
            Digital Experiences.
          </span>
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <span className="bg-indigo-100 px-4 py-1.5 rounded-full font-medium text-indigo-800 text-sm">
            Full-Stack Developer
          </span>
          <span className="bg-emerald-100 px-4 py-1.5 rounded-full font-medium text-emerald-800 text-sm">
            UI/UX Enthusiast
          </span>
          <span className="bg-yellow-100 px-4 py-1.5 rounded-full font-medium text-yellow-800 text-sm">
            Problem Solver
          </span>
          <span className="bg-pink-100 px-4 py-1.5 rounded-full font-medium text-pink-800 text-sm">
            React Developer
          </span>
          <span className="bg-sky-100 px-4 py-1.5 rounded-full font-medium text-sky-800 text-sm">
            Creative Developer
          </span>
        </div>

        <p className="max-w-2xl text-gray-700 dark:text-gray-200 text-lg md:text-left text-center leading-relaxed">
          💻 I’m passionate about bringing ideas to life with a perfect blend of
          design and code. Whether it's a clean UI or a solid backend, I focus
          on building things that look good and work even better. 🧑‍💻
        </p>

        <SectionNavBar />
      </div>
    </div>
  );
}

export default MainLeft;
