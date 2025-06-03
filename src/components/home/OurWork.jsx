function OurWork() {
  const works = [
    {
      projectName: 'Neuralit',
      projectDetail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim delectus nemo.',
      projectImg: 'neuralit.png',
    },
    {},
    {},
    {},
  ];
  return (
    <div className="px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="lg:text-left mb-6 lg:min-w-[310px]">
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
            href="#"
            key={index}
            className="text-center overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg w-[359px] lg:w-[275px] flex-grow relative"
          >
            <img src={work.projectImg} alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 hover:opacity-100 w-full h-full flex flex-col gap-6 justify-center items-center p-6 text-white transition-all duration-300 ease-in-out">
              <div className="text-4xl font-semibold">{work.projectName}</div>
              <p className="text-lg">{work.projectDetail}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default OurWork;
