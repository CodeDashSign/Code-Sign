import "./App.css";
import Why from "./Components/Why";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
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
                <Landing />
              </>
            }
          />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/contact" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
