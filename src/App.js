import { Suspense } from "react";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading...</h1>
        </div>
      }
    >
      <Nav />
      <Main />
      <Footer />
    </Suspense>
  );
}

export default App;
