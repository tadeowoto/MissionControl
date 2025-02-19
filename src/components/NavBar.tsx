import { navItems } from "../data/navData";

const NavBar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-center">
      <ul className="flex items-center justify-center gap-2">
        {navItems.map((item) => (
          <li key={item.id} className="decoration-0 cursor-pointer">
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
