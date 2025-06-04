function OurWork() {
  const works = [
    {
      projectName: 'NeuralIT',
      projectImg: 'neuralit.jpg',
      description: 'sample',
      url:'https://www.neuralit.com/'

    },
    {
      projectName: 'Titan',
      projectImg: 'Titan.jpg',
      description: 'We designed and developed several new pages based on Figma designs provided by the client. The pages are built with a clean, component-driven HTML structure and include interactive elements such as carousels and sliders to enhance user engagement.',
      url:'https://www.titancompany.in/'
    },
    {
      projectName: 'EME',
      projectImg: 'Eme.jpg',
      description: 'EME is a data-rich, multilingual website developed entirely from scratch to present advanced electro-mechanical research insights. A key feature is a dynamic, interactive globe visualization that plots data using latitude and longitude values, enhanced by smooth scroll-triggered animations. The site includes multiple content-rich pages, each utilizing complex filters and a modular component strategy for maintainability and performance.',
      url:'https://eme.be/'
    },
    {
      projectName: 'ArcelorMittal',
      projectImg: 'ArcelorMittal.jpg',
      description: 'We developed this website from the ground up, fully tailored to the client’s specifications. It features a comprehensive product catalog with an advanced filtering and sorting system. Built using a component-based architecture, it follows best security practices and supports multilingual functionality.',
      url:'https://barsandrods.arcelormittal.com/'
    },
    {
      projectName: 'Share4growth',
      projectImg: 'shregrowth.jpg',
      description: 'This is a highly complex, multilingual platform built to bridge the communication gap between teachers and students. Developed entirely in-house, the site features custom components, dynamic filtering capabilities, and continues to be under active maintenance and enhancement',
      url:'https://share4growth.com/en/counter'
    },
    {
      projectName: 'Maltalingua',
      projectImg: 'malta.jpg',
      description: 'sample',
      url:'https://www.maltalingua.com/'

    },
    {
      projectName: 'BTO',
      projectImg: 'bto.jpg',
      description: 'For BTO, we revitalized their existing website by crafting a new theme that integrates seamlessly with their CRM (CiviCRM). The project involved API integrations to fetch and visualize nature and bird-related data, all wrapped in a responsive, user-friendly UI. Developed with a component-based system, the site ensures future scalability and efficient content management.',
      url:'https://www.bto.org/'
    },
    {
      projectName: 'ThreatsEye',
      projectImg: 'threatseye.jpg',
      description: 'sample',
      url:'https://threatseye.io/'
    },
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
            href={work.url}
            key={index}
            className="text-center overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg w-[359px] lg:w-[275px] flex-grow relative"
          >
            <img
              src={work.projectImg}
              alt="project"
              className="rounded-t-lg"
            />
<<<<<<< HEAD
            <div id="card-content" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 hover:opacity-100 w-full h-full flex flex-col gap-6 justify-center items-center p-6 text-white transition-all duration-300 ease-in-out">
=======
            <h3 className="font-semibold text-2xl italic tracking-[2px] py-4">
                {work.projectName}
            </h3>
            {/* <div id="card-content" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 hover:opacity-100 w-full h-full flex flex-col gap-6 justify-center items-center p-6 text-white transition-all duration-300 ease-in-out">
>>>>>>> main
              <h3 className="font-semibold text-2xl italic tracking-[2px]">
                {work.projectName}
              </h3>
              <p className="text-sm leading-[32px]">
                <span className="font-semibold italic tracking-[2px]">
                  Description:{' '}
                </span>
                {work.description}
              </p> */}
              {/* <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Technologies Used:{' '}
                </span>
                {work.technologies}
              </p>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Our Role:{' '}
                </span>
                {work.role}
              </p>
              <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Duration:{' '}
                </span>
                <span className="text-green-600">1 Month</span>
              </p> */}
              {/* <p className="text-lg leading-[32px]">
                <span className="text-red-600 font-semibold italic tracking-[2px]">
                  Review:{' '}
                </span>
                <span className="text-green-600">4.9 / 5.0</span>
              </p> */}
<<<<<<< HEAD
            </div>  
=======
            {/* </div> */}
>>>>>>> main
          </a>
        ))}
      </div>
    </div>
  );
}
export default OurWork;
