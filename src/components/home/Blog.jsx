function Blog() {
  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Our Blog
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="blogs flex flex-wrap gap-8 justify-center">Blog</div>
    </div>
  )
}
export default Blog