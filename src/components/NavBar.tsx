import { navItems } from "../data/navData";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-center font-orbitron bg-transparent z-50">
      <ul className="flex items-center justify-center gap-2">
        {navItems.map((item) => (
          <Link to={item.adress}>
            <li
              key={item.id}
              className="decoration-0 cursor-pointer text-white tracking-wider"
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
