import ContactForm from '../components/ContactForm';

function ContactUs() {
  return (
    <>
      <div className="max-w-screen-xl px-8 mx-auto py-16 lg:py-24">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Contact Us</h2>
        <div className="text-2xl lg:text-3xl font-medium text-blue-600 mb-6">
          Get in touch with us
        </div>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-3xl">
          Have a question or want to work together? We'd love to hear from you.
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />
    </>
  );
}

export default ContactUs;
