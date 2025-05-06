import Heading from './components/global/Heading';
import Navbar from './components/global/Navbar';
import ChooseUs from './components/home/ChooseUs';
import Hero from './components/home/Hero';
import Services from './components/home/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Heading title="Why Choose Us" tagline="Your vision, Our Code" /> */}
      <ChooseUs />
      <Services />
    </div>
  );
}
export default App;
