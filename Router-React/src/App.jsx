import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* repetir con cada una de las vistas */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
