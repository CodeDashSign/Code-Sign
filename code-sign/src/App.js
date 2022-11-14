import "./App.css";
import Why from "./Components/Why";
import Landing from "./Components/Landing";
import Team from "./Components/Team";
import Works from "./Components/Works";
import Reviews from "./Components/Reviews";
import Mission from "./Components/Mission";
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
                <Landing />
                <Why />
                <Mission />
              </>
            }
          />
          <Route
            path="/experience" 
            exact
            element={
              <>
                <Team />
                <Works/>
                <Reviews/>
              </>
            } 
          />
          <Route exact path="/contact" 
            element={
              <Landing />
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
