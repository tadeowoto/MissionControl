import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";

function App() {
  //TODO: agregar el suspense con un loader de carga
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
