function FrontPage() {
  return (
    <div className="flex flex-col items-center px-6 py-20 gap-16">
      <h1 className="text-6xl md:text-8xl font-bold text-center">
        Hey, I'm Kenny
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        <img
          src="/me_2.jpg"
          alt="Kenny's portrait"
          className="w-full md:w-1/3 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300"
        />

        <div className="text-xl md:text-2xl flex flex-col gap-6 leading-relaxed max-w-2xl">
          <p>
            I’m a full stack developer from Los Angeles, California—currently
            pursuing a Bachelor's in Computer Science at Oregon State
            University.
          </p>

          <p>
            My work bridges design and development. I love creating clean,
            functional interfaces on the front end, and solving tough problems
            on the back end. Whether it’s building web apps, working with APIs,
            or managing databases—I’m all in.
          </p>

          <p>
            I'm always learning, building, and leveling up my craft. Right now,
            I’m exploring new tools in the React ecosystem, sharpening my
            backend skills, and pushing myself to build projects that are both
            useful and beautiful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
