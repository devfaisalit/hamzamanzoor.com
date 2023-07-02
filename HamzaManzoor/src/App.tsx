import { Suspense } from "react";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";

function App() {
  return (
    <Suspense fallback={<Preloader />} >
      <Home/>
    </Suspense>
  );
}

export default App;
