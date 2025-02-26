import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
