import ContactForm from './components/ContactForm';
import Footer from './components/global/Footer';
import Heading from './components/global/Heading';
import Navbar from './components/global/Navbar';
import Blog from './components/home/Blog';
import ChooseUs from './components/home/ChooseUs';
import Hero from './components/home/Hero';
import OurTeams from './components/home/OurTeams';
import OurWork from './components/home/OurWork';
import Services from './components/home/Services';
import TechnologiesSlider from './components/home/TechnologiesSlider';
import Testimonials from './components/home/Testimonials';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import WorkingShowcase from './components/home/WorkingShowcase';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorkingShowcase />
      {/* <Heading title="Why Choose Us" tagline="Your vision, Our Code" /> */}
      <ChooseUs />
      <Services />
      {/* <TechnologiesSlider /> */}
      <OurWork />
      <Testimonials />
      {/* <Blog /> */}
      <OurTeams />
      <ContactForm/>
      <Footer />
    </div>
  );
}
export default App;
