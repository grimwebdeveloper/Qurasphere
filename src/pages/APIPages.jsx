import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Banner from '../components/global/Banner';
import ImageWithContent from '../components/ImageWithContent';
import CtaBanner from '../components/CtaBanner';

function APIPages() {
    return (
        <>
            <Banner bannerText={'API Development Services'} />
            <ImageWithContent
                title="Why Choose Our API Services?"
                description="We create custom APIs that enable your software products to communicate seamlessly with third-party tools, platforms, and devices. Our APIs are fast, secure, and scalable – ensuring your business processes stay connected and efficient."
                features={[
                    "Custom REST, GraphQL, or SOAP APIs",
                    "Third-party API integration (e.g., Stripe, Google, PayPal)",
                    "Secure authentication with OAuth or JWT",
                    "Well-documented for easy implementation",
                    "Ongoing support and maintenance"
                ]}
                imageUrl="api-development.jpg"
                buttonText="Get a Free Quote"
                buttonLink="/contact-us"
            />
            <CtaBanner />
        </>
    )
}
export default APIPages;
