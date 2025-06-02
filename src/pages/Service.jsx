import ContactForm from '../components/ContactForm';

function Service() {
  const servicesData = [
    {
      serviceName: 'Web Design (Figma & UI/UX)',
      description: `Our design team brings your vision to life with pixel-perfect
                Figma designs. Every layout is crafted for user experience,
                brand identity, and conversion.`,
      serviceImage: 'figma.png',
    },
    {
      serviceName: 'Frontend Development',
      description: `We build stunning, fast, and interactive front-end interfaces using
            the latest web technologies like React, Tailwind, and more. Whether
            it's a landing page or a full SPA, our code is clean, responsive,
            and user-focused.`,
      serviceImage: 'javascript.png',
    },
    {
      serviceName: 'Custom Web Development',
      description: `We build tailor-made websites and web apps from scratch using modern
            stacks. Fully responsive, optimized for SEO and performance — built
            exactly how you want it.`,
      serviceImage: 'react.png',
    },
    {
      serviceName: 'Custom Web Applications',
      description: `Need something beyond a website? Our team builds interactive web
            apps — dashboards, tools, SaaS platforms — with smart features and
            scalable architecture.`,
      serviceImage: 'redux.png',
    },
    {
      serviceName: 'MERN Stack Development',
      description: `From concept to deployment, we handle full-stack web apps with
            MongoDB, Express, React, and Node.js. Our MERN experts build
            scalable, secure, and high-performance apps tailored to your
            business goals.`,
      serviceImage: 'mern.png',
    },
    {
      serviceName: 'WordPress Development',
      description: `From custom themes to plugin integration, we turn WordPress into a
            powerful business tool. Whether it's a blog, business site, or
            e-commerce store — we deliver speed, SEO, and simplicity.`,
      serviceImage: 'wordpress.png',
    },
    {
      serviceName: 'Drupal Development',
      description: `For enterprise-grade CMS solutions, our Drupal developers create
            secure, modular, and scalable websites. From government to corporate
            needs — we've done it all with Drupal.`,
      serviceImage: 'drupal.png',
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl px-8 mx-auto py-16 lg:py-24">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
          Our Services
        </h2>
        <div className="text-2xl lg:text-3xl font-medium text-blue-600 mb-6">
          Services that needs your business
        </div>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-3xl">
          We offer a comprehensive range of web development and design services
          to help your business thrive in the digital world.
        </p>
      </div>

      {/* <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div
                  className="w-16 h-16 mb-4 bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(/images/${service.serviceImage})`,
                  }}
                  role="img"
                  aria-label={service.serviceName}
                />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="px-8 py-16 max-w-screen-xl mx-auto">
        <div id="cards" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* <img 
                  src={service.serviceImage} 
                  alt={service.serviceName}
                  className="w-16 h-16 object-contain"
                /> */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {service.serviceName}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
export default Service;
