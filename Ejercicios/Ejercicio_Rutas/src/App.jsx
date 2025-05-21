import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Home from "./views/Home/home";
import Counter from "./views/Counter/Counter";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";


function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Counter" element={<Counter/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
