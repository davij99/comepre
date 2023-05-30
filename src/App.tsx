import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { Suspense } from "react";
import Spinner from "./assets/shared/components/core/Spinner.tsx";
import NavBar from "./assets/shared/components/core/NavBar/NavBar.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="page">
          <Suspense fallback={<Spinner />}>
            <Router />
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
