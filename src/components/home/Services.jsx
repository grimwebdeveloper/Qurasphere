import { servicesDataHome } from "../../data/servicesData";
import ServiceCard from "../ServiceCard";
import { Link } from 'react-router-dom';


function Services() {
  const services = servicesDataHome
  return (
    <div className="px-8 lg:flex-col gap-8 max-w-[1280px] mx-auto pb-16">
      <div className="text-center mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          What We Do For You
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        {services.map((service, index) => (
          // <div>{service.description},{service.serviceName}</div>
          <ServiceCard key={index} service={service} /> 
        ))}
      </div>
      {/* <div className="flex flex-col gap-6"> */}
      {/* {services.map((service, index) => (
          <div className="flex items-center" key={index}>
            <div>
              <h3 className="text-2xl flex items-center justify-start gap-4 font-semibold">{service.serviceName}</h3>
              <p className="text-lg mt-2 text-zinc-700">
                {service.description}
              </p>
            </div>
            <img
              src={service.serviceImage}
              alt={service.serviceName}
              className="w-24 h-24 hidden lg:block"
            />
          </div>
        ))} */}
      {/* </div> */}
      <div className="flex justify-center mt-8">
        <Link
          to="/services"
          className="inline-block outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
}
export default Services;
