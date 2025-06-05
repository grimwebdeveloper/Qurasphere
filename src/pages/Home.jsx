import Hero from "../components/home/Hero"
import ChooseUs from "../components/home/ChooseUs"
import Services from '../components/home/Services'
import ContactForm from '../components/ContactForm';
import WorkingShowcase from "../components/home/WorkingShowcase"
import TechnologiesSlider from '../components/home/TechnologiesSlider'


function Home() {
  return (
    <>
      <Hero /> 
      <ChooseUs />
      <WorkingShowcase/>
      <Services />
      <TechnologiesSlider />
      <ContactForm/>
    </>
  )  
}
export default Home;
