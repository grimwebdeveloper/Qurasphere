import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Card from '../components/global/Card';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from "../data/servicesData";
import Banner from '../components/global/Banner';
import TechnologiesSlider from '../components/home/TechnologiesSlider'

function Service() {
  return (
<<<<<<<<< Temporary merge branch 1
    <div className="min-h-screen">
      <div className="max-w-screen-xl px-8 mx-auto py-16 lg:py-24">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
          Our Services
        </h2>
        <div className="text-2xl lg:text-3xl font-medium text-blue-600 mb-6">
          Services that needs your business
=========
    <>
     <div className='w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white '>
         <div className='max-w-[1280px]  min-h-80 mx-auto  flex justify-center items-center '>
           <h1 className='text-4xl font-semibold'>Our services</h1>
         </div>
      
     </div>
     <div className='w-full'>
        <div className='max-w-[1280px] mx-auto mt-8 md:mt-24 mb-24 flex justify-center gap-7 gap-y-9 flex-wrap'>
          {cardsData.map((_, index) => (   
            
             <div className=" w-80 md:w-64">
               <img src="project.jpg" alt="" className='rounded-t-lg' />
               <div className=" bg-gray-200 rounded-b-lg">
                <h5 className=" px-3 py-1 text-2xl font-medium">{cardsData[index].title}</h5>
                <p className="px-3 py-2  font-normal">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="px-3 pb-6 block font-normal text-blue-500">Go somewhere</a>
            </div>
           </div>
           ))}


            
>>>>>>>>> Temporary merge branch 2
        </div>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-3xl">
          We offer a comprehensive range of web development and design services
          to help your business thrive in the digital world.
        </p>
      </div>

      {/* <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service}/>
          ))}
        </div>
        <TechnologiesSlider />
      </div>
      <ContactForm />

    </>
  )
}
export default Service;
