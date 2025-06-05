function OurWork() {
  const works = [
    {
      projectName: 'Titan',
      projectImg: 'Titan.jpg',
      description:
        'We designed and developed several new pages based on Figma designs provided by the client. The pages are built with a clean, component-driven HTML structure and include interactive elements such as carousels and sliders to enhance user engagement.',
      url: 'https://www.titancompany.in/',
    },
    {
      projectName: 'EME',
      projectImg: 'eme.png',
      description:
        'EME is a data-rich, multilingual website developed entirely from scratch to present advanced electro-mechanical research insights. A key feature is a dynamic, interactive globe visualization that plots data using latitude and longitude values, enhanced by smooth scroll-triggered animations. The site includes multiple content-rich pages, each utilizing complex filters and a modular component strategy for maintainability and performance.',
      url: 'https://eme.be/',
    },
    {
      projectName: 'ThreatsEye',
      projectImg: 'robot.png',
      description: 'sample',
      url: 'https://threatseye.io/',
    },
    {
      projectName: 'ArcelorMittal',
      projectImg: 'ArcelorMittal.png',
      description:
        'We developed this website from the ground up, fully tailored to the client’s specifications. It features a comprehensive product catalog with an advanced filtering and sorting system. Built using a component-based architecture, it follows best security practices and supports multilingual functionality.',
      url: 'https://barsandrods.arcelormittal.com/',
    },
    {
      projectName: 'Share4growth',
      projectImg: 'shregrowth.png',
      description:
        'This is a highly complex, multilingual platform built to bridge the communication gap between teachers and students. Developed entirely in-house, the site features custom components, dynamic filtering capabilities, and continues to be under active maintenance and enhancement',
      url: 'https://share4growth.com/en/counter',
    },
    {
      projectName: 'Neural IT',
      projectImg: 'neuralit.png',
      description: 'sample',
      url: 'https://www.neuralit.com/',
    },
    {
      projectName: 'BTO',
      projectImg: 'bto.webp',
      description:
        'For BTO, we revitalized their existing website by crafting a new theme that integrates seamlessly with their CRM (CiviCRM). The project involved API integrations to fetch and visualize nature and bird-related data, all wrapped in a responsive, user-friendly UI. Developed with a component-based system, the site ensures future scalability and efficient content management.',
      url: 'https://www.bto.org/',
    },
    {
      projectName: 'Maltalingua',
      projectImg: 'malta.png',
      description: 'sample',
      url: 'https://www.maltalingua.com/',
    },
  ];
  return (
    <div className="px-8 lg:flex-col gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Our Work
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="cards flex flex-wrap gap-8">
        {works.map((work, index) => (
          <div
            key={index}
            className="group relative w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={work.projectImg}
                alt={work.projectName}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {work.projectName}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">
                {work.description}
              </p>

              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Visit Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OurWork;
