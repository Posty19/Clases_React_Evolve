import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/home";
import Counter from "./views/Counter/Counter";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
import { CounterProvider } from "./contexts/CounterContext";
import DashBoard from "./layouts/DashBoard/DashBoard";
import Settings from './views/Setings/Settings'
import HomeLayout from "./layouts/HomeLayout.jsx/HomeLayout";

function App() {
  return (
    //counter provider engloba a todo
    <CounterProvider>
      <Router>
          <Routes>
            <Route element={<HomeLayout/>}>
              <Route index path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Counter" element={<Counter />} />
              {/* ruta del 404 */}
            </Route>
            <Route path="/dashboard" element={<DashBoard/>}>
              {/* <Route index element={<DashBoard/>} /> */}
              <Route path="settings" element={<Settings/>} />
            </Route>
          </Routes>
      </Router>
    </CounterProvider>
  );
}

export default App;
