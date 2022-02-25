import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import BaseRoutes from "./Routes";

function App() {
  return (
    <Suspense>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
}

export default App;
