import { useState } from "react";

import Counter from "../counter/Counter";
import "./container.css";

const Container = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <h1>Panel del contador</h1>
      <button onClick={() => setShow((prev) => !prev)} className="toggleButton">
        {show ? "Ocultar Contador" : "Mosatrar Contador"}
      </button>
      {show && <Counter/>}
    </div>
  );
};

export default Container;