function ChooseUs() {
  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto pb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Why Choose Us
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl">👥Multi-Skilled Expert Team</h3>
          <p className="text-lg mt-4 text-zinc-700">
            Our team includes UI/UX designers, frontend/backend devs,
            WordPress/Drupal specialists — all working together for one goal:
            your success.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">📢Transparent Communication</h3>
          <p className="text-lg mt-4 text-zinc-700">
            No guesswork, no hidden delays. We keep you in the loop with regular
            updates, honest feedback, and clear timelines.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">💼 On-Time Delivery</h3>
          <p className="text-lg mt-4 text-zinc-700">
            We respect your time. Deadlines aren’t goals — they’re our
            commitment. Expect timely and smooth delivery, always.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">🔧Flexible Technologies</h3>
          <p className="text-lg mt-4 text-zinc-700">
            From MERN stack to WordPress & Drupal, we choose the best tech stack
            tailored to your business goals and scalability.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">💸Budget-Friendly Solutions</h3>
          <p className="text-lg mt-4 text-zinc-700">
            High-quality doesn’t have to mean high-cost. We deliver top-tier
            results without burning your pocket.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ChooseUs;
