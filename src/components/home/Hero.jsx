function Hero() {
  return (
    <div className="first-impression min-h-[80vh] text-center flex flex-col justify-center gap-20">
      <h2 className="leading-none font-semibold ">
        <div className="text-[9.6vw] xl:text-[122.867px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600">World-Class Websites</div>
        <div className="text-[5vw] xl:text-[64px] font-mono font-normal">
          On-Time. On-Budget. On-Point.
        </div>
      </h2>
      <div className="flex justify-center items-center gap-4 lg:gap-8">
        <button
          type="button"
          className="outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect"
        >
          Contact Us
        </button>
        <button
          type="button"
          className="outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect"
        >
          View Our Work
        </button>
      </div>
    </div>
  );
}
export default Hero;
