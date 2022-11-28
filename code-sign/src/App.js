import "./App.css";
import Why from "./Components/Why";
import Landing from "./Components/Landing";
import Team from "./Components/Team";
import Works from "./Components/Works";
import Reviews from "./Components/Reviews";
import Mission from "./Components/Mission";
import NavbarCS from "./Components/NavbarCS";
import Process from "./Components/Process";
import Principles from "./Components/Principles";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {/* <NavbarCS /> */}
                <Landing />
                <Mission />
                <Why />
                <Principles />
                <Process />
              </>
            }
          />
          <Route
            path="/experience"
            exact
            element={
              <>
                <Team />
                <Works />
                <Reviews />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
