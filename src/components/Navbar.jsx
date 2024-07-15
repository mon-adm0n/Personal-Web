import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (offset) => {
    window.scrollTo(0, offset);
  };

  const navItems = [
    { link: "Overview", path: "index", scrol: () => scrollToSection(0) },
    { link: "Project", path: "project", scrol: () => scrollToSection(660) },
    { link: "Archive", path: "archive", scrol: () => scrollToSection(2400) },
  ];

  return (
    <>
      <nav
        className={`bg-main text-white dark:bg-secondary dark:text-white/90 top-0  fixed shadow z-50 md:z-10 w-full px-6 py-2 md:py-3 overflow-hidden md:px-12`}
        data-aos="flip-up"
      >
        <div>
          <div className="justify-center items-center flex">
            <ul className="hidden md:space-x-14 md:flex lg:text-xl">
              {navItems.map(({ link, path, scrol }, index) => (
                <li
                  key={index}
                  className=" px-4 block duration-500 scroll-ml-24 hover:text-white hover:scale-125"
                >
                  <a onClick={scrol} key={path}>
                    {link}
                  </a>
                </li>
              ))}
            <li className="items-center flex">
              <div
                onClick={toggleDarkMode}
                className="bg-secondary/40 dark:bg-white/40 p-1 rounded-full items-center text-center mx-auto"
              >
                <Icon
                  icon={
                    isDarkMode === "dark"
                      ? "tdesign:mode-dark"
                      : "tdesign:mode-light"
                  }
                  className={`rounded-full bg-yellow-400/90 ring-1 text-white text-xl transition-all ease-out duration-500 ${
                    isDarkMode === "dark"
                      ? "mr-6 ring-yellow-300"
                      : "ml-6 ring-yellow-500 rotate-45"
                  }`}
                />
              </div>
            </li>
            </ul>
          </div>

          {/* Button Menu */}
          <div className="md:hidden items-center flex mx-auto justify-center space-x-64">
            <button
              onClick={toggleMenu}
              className="text-white dark:text-white focus:outline-none focus:text-slate-500"
            >
              <Icon
                icon={isMenuOpen ? "ic:baseline-clear" : "ic:baseline-menu"}
                className={`text-white text-3xl transition-all ease-out duration-500 ${
                  isMenuOpen
                    ? "rotate-90"
                    : ""
                }`}
              />
            </button>
            <li className="items-center flex">
              <div
                onClick={toggleDarkMode}
                className="bg-secondary/40 dark:bg-white/40 p-1 rounded-full items-center text-center mx-auto"
              >
                <Icon
                  icon={
                    isDarkMode === "dark"
                      ? "tdesign:mode-dark"
                      : "tdesign:mode-light"
                  }
                  className={`rounded-full bg-yellow-400/90 ring-1 text-white text-xl transition-all ease-out duration-500 ${
                    isDarkMode === "dark"
                      ? "mr-6 ring-yellow-300"
                      : "ml-6 ring-yellow-500 rotate-45"
                  }`}
                />
              </div>
            </li>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden fixed space-y-4 px-4 pt-20 pb-6 z-40 bg-secondary ${
          isMenuOpen ? "block top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path, scrol }) => (
          <a
            onClick={scrol}
            key={path}
            className="block p-2 my-2 text-xl text-white hover:text-slate-300 hover:bg-main/30 hover:rounded-xl"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
