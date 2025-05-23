import { servicesData } from "../../data/servicesData";

function Services() {
  const services = servicesData
  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto pb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          What I Do For You
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <div className="flex items-center" key={index}>
            <div>
              <h3 className="text-2xl">{service.serviceName}</h3>
              <p className="text-lg mt-4 text-zinc-700">
                {service.description}
              </p>
            </div>
            <img
              src={service.serviceImage}
              alt={service.serviceName}
              className="w-24 h-24 hidden lg:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
