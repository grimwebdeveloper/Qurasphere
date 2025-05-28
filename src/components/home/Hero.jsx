import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="relative max-w-[1280px] mx-auto min-h-[90vh] px-4">
      {/* Background image for mobile */}
      <div className="absolute inset-0 md:hidden opacity-30 z-0">
        <img
          src="dimension.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center min-h-[90vh]">
        <div className="text-part w-full md:w-1/2">
          <h1 className="leading-tight md:leading-[75px] md:pl-11 pt-5 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text tracking-wide text-center md:text-left sm:text-left">
            We Build,
            <br />
            Web Solution
          </h1>

          <h2 className="text-black text-3xl md:text-5xl font-semibold md:pl-11 py-4 text-center md:text-left">
            On&nbsp;
            <ReactTyped
              strings={["Time", "Budget", "Point"]}
              typeSpeed={140}
              backSpeed={80}
              loop={true}
              showCursor={false}
            />
          </h2>

          <p className="md:pl-11 py-2 font-normal text-lg md:text-2xl text-gray-600 text-center md:text-left">
            Unlocking new dimension to empower{" "}
            <span className="font-semibold italic text-blue-600 capitalize block">
              your business
            </span>
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:bg-blue-600 transition-all duration-300 mt-6 ml-8"
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Image on right for desktop */}
        <div className="image-part w-full md:w-1/2 h-[300px] md:h-[600px] mt-6 md:mt-0 hidden md:block">
          <img
            src="dimension.png"
            alt="web solution"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
