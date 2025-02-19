import Home from "./pages/home/Home";
import Launches from "./pages/launches/Launches";
import Vehicles from "./pages/vehicles/Vehicles";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/launches",
    element: <Launches />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
