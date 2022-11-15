import "./App.css";
import Why from "./Components/Why";
import Landing from "./Components/Landing";
import Team from "./Components/Team";
import Mission from "./Components/Mission";
import NavbarCS from "./Components/NavbarCS";
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
                <NavbarCS />
                <Landing />
                <Why />
                <Mission />
              </>
            }
          />
          <Route exact path="/experience" element={<Team />} />
          <Route exact path="/contact" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
