import SectionNavBar from "./SectionNavBar";

function MainLeft() {
  return (
    <div className="py-10 px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Image Section */}
      <div className="flex justify-center mb-6 md:mb-0">
        <img
          src="/me.jpg"
          alt="Kenny"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h2 className="  font-bold text-center md:text-left  space-y-1 leading-tight">
          <span className="block text-3xl">
            Hi, I'm Kenny <span className="inline-block">👋</span>
          </span>
          <span className="block text-indigo-600 text-4xl">
            Crafting Seamless
          </span>
          <span className="block text-indigo-600 text-4xl">
            Digital Experiences.
          </span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Full-Stack Developer
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            UI/UX Enthusiast
          </span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
            Problem Solver
          </span>
        </div>

        <p className="text-lg text-center md:text-left max-w-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
          💡 I’m passionate about bringing ideas to life with a perfect blend of
          design and code. From clean UIs to solid back-end systems, I create
          products that focus on both user experience and performance.
        </p>

        <SectionNavBar />
      </div>
    </div>
  );
}

export default MainLeft;
