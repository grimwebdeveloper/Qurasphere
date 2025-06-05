function OurWork() {
  const works = [
    {
      projectName: 'NeuralIT',
      projectImg: 'neuralit.png',
      description: 'sample',
      url: 'https://www.neuralit.com/',
    },
    {
      projectName: 'Titan',
      projectImg: 'Titan.jpg',
      description:
        'We designed and developed several new pages based on Figma designs provided by the client. The pages are built with a clean, component-driven HTML structure and include interactive elements such as carousels and sliders to enhance user engagement.',
      url: 'https://www.titancompany.in/',
    },
    {
      projectName: 'EME',
      projectImg: 'Eme.jpg',
      description:
        'EME is a data-rich, multilingual website developed entirely from scratch to present advanced electro-mechanical research insights. A key feature is a dynamic, interactive globe visualization that plots data using latitude and longitude values, enhanced by smooth scroll-triggered animations. The site includes multiple content-rich pages, each utilizing complex filters and a modular component strategy for maintainability and performance.',
      url: 'https://eme.be/',
    },
    {
      projectName: 'ArcelorMittal',
      projectImg: 'ArcelorMittal.jpg',
      description:
        'We developed this website from the ground up, fully tailored to the client’s specifications. It features a comprehensive product catalog with an advanced filtering and sorting system. Built using a component-based architecture, it follows best security practices and supports multilingual functionality.',
      url: 'https://barsandrods.arcelormittal.com/',
    },
    {
      projectName: 'Share4growth',
      projectImg: 'shregrowth.jpg',
      description:
        'This is a highly complex, multilingual platform built to bridge the communication gap between teachers and students. Developed entirely in-house, the site features custom components, dynamic filtering capabilities, and continues to be under active maintenance and enhancement',
      url: 'https://share4growth.com/en/counter',
    },
    {
      projectName: 'Maltalingua',
      projectImg: 'malta.jpg',
      description: 'sample',
      url: 'https://www.maltalingua.com/',
    },
    {
      projectName: 'BTO',
      projectImg: 'bto.jpg',
      description:
        'For BTO, we revitalized their existing website by crafting a new theme that integrates seamlessly with their CRM (CiviCRM). The project involved API integrations to fetch and visualize nature and bird-related data, all wrapped in a responsive, user-friendly UI. Developed with a component-based system, the site ensures future scalability and efficient content management.',
      url: 'https://www.bto.org/',
    },
    {
      projectName: 'ThreatsEye',
      projectImg: 'threatseye.jpg',
      description: 'sample',
      url: 'https://threatseye.io/',
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
      <div className="cards flex flex-wrap gap-8 justify-center lg:justify-between">
        {works.map((work, index) => (
          // <a
          //   href={work.url}
          //   key={index}
          //   className="w-[359px] lg:w-[275px] flex-grow relative grid justify-items-center text-center items-center overflow-hidden rounded-lg shadow-lg bg-white"
          // >
          //   <div className="w-full">
          //     <img
          //       src={work.projectImg}
          //       alt="project"
          //       className="w-full h-[410px] object-cover rounded-t-lg"
          //     />
          //   </div>
          //   <h3 className="px-3 pt-3 pb-1 text-2xl font-semibold italic tracking-[2px]">
          //     {work.projectName}
          //   </h3>
          // </a>
          <a
            href={work.url}
            key={index}
            className="shadow-lg bg-white rounded-lg overflow-hidden"
          >
            <div>
              <img src="neuralit.png" alt="project" className="h-[410px]"/>
            </div>
            <h3 className="tracking-[2px font-semibold text-2xl] text-center py-4">{work.projectName}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
export default OurWork;
