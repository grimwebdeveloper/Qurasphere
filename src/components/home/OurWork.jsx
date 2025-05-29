function OurWork() {
  const works = [{}, {}, {}, {}];
  return (
    <div className="px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Our Work
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="cards flex flex-wrap gap-8 justify-center">
        {works.map((work, index) => (
          <a
            href="$"
            key={index}
            id="card"
            className="w-[359px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg flex-grow"
          >
            <img
              src="project.jpg"
              alt="project"
              className="rounded-t-lg"
            />
            <div id="card-content" className="p-4 flex flex-col gap-4">
              <h3 className="font-semibold text-2xl italic tracking-[2px] mb-4">
                Project Name
              </h3>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Requirements:{' '}
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                impedit! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa, impedit!
              </p>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Technologies Used:{' '}
                </span>
                Lorem ipsum dolor sit
              </p>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Our Role:{' '}
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                impedit! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa, impedit!
              </p>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Duration:{' '}
                </span>
                <span className="text-green-600">1 Month</span>
              </p>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Review:{' '}
                </span>
                <span className="text-green-600">4.9 / 5.0</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default OurWork;
