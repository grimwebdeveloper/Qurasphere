function Navbar() {
  return (
    <div className="border-b border-zinc-300">
      <nav
        id="navbar"
        className="h-20 flex items-center justify-between px-2 max-w-[1280px] mx-auto"
      >
        <a href="#" id="logo" className="flex items-center gap-1">
          <img src="logo.png" alt="logo" className="w-12" />
          <h1 className="hidden lg:block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            QURASPHERE
          </h1>
        </a>

        <ul
          id="nav-links"
          className="absolute lg:static top-0 right-0 h-screen lg:h-auto w-[75%] lg:w-auto bg-white/50 lg:bg-transparent flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-6 backdrop-blur-[16px] backdrop-saturate-[180%]"
        >
          <li>
            <a href="#">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 h-20 mr-2 cursor-pointer lg:hidden"
              >
                {' '}
                <path
                  d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
                  fill="#000000"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 font-semibold">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 font-semibold">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 font-semibold">
              CASE STUDIES
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 font-semibold">
              BLOG
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 font-semibold">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 font-semibold">
              CONTACT US
            </a>
          </li>
        </ul>

        <div id="hamburger" className="lg:hidden">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z"
              fill="#212121"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
