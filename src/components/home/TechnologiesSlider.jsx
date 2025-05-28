function TechnologiesSlider() {
  return (
    <div className="outline max-w-screen-xl mx-auto">
      <div className="text-center lg:text-left mb-6 lg:max-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Technologies We Worked With
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <marquee behavior="" direction="">
        <div className="flex">
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
          <img src="javascript.png" alt="" className="w-24 h-24" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-red-700"></div>
      </marquee>
    </div>
  );
}
export default TechnologiesSlider;
