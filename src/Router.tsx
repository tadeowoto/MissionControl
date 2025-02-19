import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routerConfig";
export const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
