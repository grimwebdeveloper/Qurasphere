function Services() {
  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto pb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          What I Do For You
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl">Web Design (Figma & UI/UX)</h3>
          <p className="text-lg mt-4 text-zinc-700">
            Our design team brings your vision to life with pixel-perfect Figma
            designs. Every layout is crafted for user experience, brand
            identity, and conversion.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Frontend Development</h3>
          <p className="text-lg mt-4 text-zinc-700">
            We build stunning, fast, and interactive front-end interfaces using
            the latest web technologies like React, Tailwind, and more. Whether
            it’s a landing page or a full SPA, our code is clean, responsive,
            and user-focused.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Custom Web Development</h3>
          <p className="text-lg mt-4 text-zinc-700">
            We build tailor-made websites and web apps from scratch using modern
            stacks. Fully responsive, optimized for SEO and performance — built
            exactly how you want it.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Custom Web Applications</h3>
          <p className="text-lg mt-4 text-zinc-700">
            Need something beyond a website? Our team builds interactive web
            apps — dashboards, tools, SaaS platforms — with smart features and
            scalable architecture.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">MERN Stack Development</h3>
          <p className="text-lg mt-4 text-zinc-700">
            From concept to deployment, we handle full-stack web apps with
            MongoDB, Express, React, and Node.js. Our MERN experts build
            scalable, secure, and high-performance apps tailored to your
            business goals.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">WordPress Development</h3>
          <p className="text-lg mt-4 text-zinc-700">
            From custom themes to plugin integration, we turn WordPress into a
            powerful business tool. Whether it's a blog, business site, or
            e-commerce store — we deliver speed, SEO, and simplicity.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Drupal Development</h3>
          <p className="text-lg mt-4 text-zinc-700">
            For enterprise-grade CMS solutions, our Drupal developers create
            secure, modular, and scalable websites. From government to corporate
            needs — we’ve done it all with Drupal.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
