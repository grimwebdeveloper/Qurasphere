import Navbar from '../components/global/Navbar'; 
import Footer from '../components/global/Footer';
import Card from '../components/global/Card';
import ContactForm from '../components/ContactForm';

function Service() {
  const cardsData = [
     {
      image: 'project.jpg',
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },
    {
      image: 'project.jpg',
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link: '#',
    },


  ];
  return (
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
                <h5 className=" px-3 py-1 text-2xl font-medium">Card title</h5>
                <p className="px-3 py-2  font-normal">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="px-3 pb-6 block font-normal text-blue-500">Go somewhere</a>
            </div>
           </div>
           ))}


            
        </div>

     </div>
     <ContactForm/>
    
    </>
  )
}
export default Service