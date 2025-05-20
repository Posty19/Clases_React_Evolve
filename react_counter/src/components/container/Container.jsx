import { useState } from "react";
import Counter from "../Counter/Counter";

const Container = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Panel Contador</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "ocultar contador" : "Mostar contador"}
      </button>
      {show && <Counter/>}
      {show && <Counter init={9}/>}
      {show && <Counter init={-2}/>}
      {show && <Counter init={7}/>}
    </>
  );
};

export default Container;
