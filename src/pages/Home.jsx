import ContactForm from '../components/ContactForm';
import ChooseUs from '../components/home/ChooseUs';
import Hero from '../components/home/Hero';
import OurTeams from '../components/home/OurTeams';
import OurWork from '../components/home/OurWork';
import Services from '../components/home/Services';

function Home() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <Services />
      <OurWork />
      <OurTeams />
      <ContactForm />
    </>
  );
}
export default Home;
