import "./App.css";
import Why from "./Components/Why";
import Landing from "./Components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Why />
              </>
            }
            exact
          />
          <Route path="/experience" element={<Why />} exact />
          <Route path="/contact" element={<Landing />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
