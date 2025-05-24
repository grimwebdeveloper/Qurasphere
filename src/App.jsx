import Footer from './components/global/Footer';
import Heading from './components/global/Heading';
import Navbar from './components/global/Navbar';
import Blog from './components/home/Blog';
import ChooseUs from './components/home/ChooseUs';
import Hero from './components/home/Hero';
import OurTeams from './components/home/OurTeams';
import OurWork from './components/home/OurWork';
import Services from './components/home/Services';
import Testimonials from './components/home/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Heading title="Why Choose Us" tagline="Your vision, Our Code" /> */}
      <ChooseUs />
      <Services />
      <OurWork />
      <Testimonials />
      <Blog />
      <OurTeams />
      <Footer />
    </div>
  );
}
export default App;
