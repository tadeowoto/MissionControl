import { navItems } from "../data/navData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 font-orbitron bg-transparent z-50">
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <Bars4Icon className="absolute h-6 w-6 left-3 top-2.5 mr-2 text-white" />
      </button>

      <ul
        className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {navItems.map((item) => (
          <Link to={item.adress} key={item.id} onClick={() => setIsOpen(false)}>
            <li className="text-white tracking-wider cursor-pointer py-2 md:py-0 transition-colors hover:text-accent-300 hover:scale-105 transform duration-300">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
