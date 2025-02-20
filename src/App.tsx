import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";
import { ApiProvider } from "./context/apiContext";

function App() {
  //TODO: agregar el suspense con un loader de carga
  return (
    <ApiProvider>
      <Router>
        <AppRouter />
      </Router>
    </ApiProvider>
  );
}

export default App;
