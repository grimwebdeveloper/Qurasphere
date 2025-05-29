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
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import Layout from './components/Layout';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="services" element={<Service/>} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
          
        </Routes>
      </Router>
      {/* <Navbar /> */}
      {/* <Hero /> 
      {/* <Heading title="Why Choose Us" tagline="Your vision, Our Code" /> */}
      {/* <ChooseUs />
      <Services />
      <TechnologiesSlider />
      <OurWork />
      <Testimonials />
      <Blog />
      <OurTeams />
      <ContactForm/>
      <Footer />  */}
    </div>
  );
}
export default App;
