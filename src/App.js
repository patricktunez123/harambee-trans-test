import { Suspense } from "react";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loaders/Loader";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Nav />
      <Main />
      <Footer />
    </Suspense>
  );
}

export default App;
