import SectionNavBar from "./SectionNavBar";

function MainLeft() {
  return (
    <div className="py-10 px-6 md:px-12 lg:px-0 lg:-ml-8 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="/me.jpg"
          alt="Kenny"
          className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full shadow-xl object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h2 className="  font-bold text-center md:text-left  space-y-1 leading-tight">
          <div className="flex gap-2 text-3xl items-center justify-center md:justify-normal">
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

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium">
            Full-Stack Developer
          </span>
          <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium">
            UI/UX Enthusiast
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-medium">
            Problem Solver
          </span>
          <span className="bg-pink-100 text-pink-800 px-4 py-1.5 rounded-full text-sm font-medium">
            React Developer
          </span>
          <span className="bg-sky-100 text-sky-800 px-4 py-1.5 rounded-full text-sm font-medium">
            Creative Developer
          </span>
        </div>

        <p className="text-lg text-center md:text-left max-w-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
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
