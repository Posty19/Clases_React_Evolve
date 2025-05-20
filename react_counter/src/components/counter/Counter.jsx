import { useEffect, useState } from "react";

const Counter = ({ init = 0 }) => {
  const [count, setCount] = useState(init);

  //Updating
  useEffect(() => {
    if (count !== 0) {
      console.log("se ha actualizado el contador");
    }
  }, [count]);

  //montaje y desmontaje
  useEffect(() => {
    console.log("componente montado");
    return ()=>{
        console.log("Componente desmontado");
    }
  }, []);

  return (
    <div className="counterContainer">
      <h2>Contador</h2>
      <p>El valor de la cuenta es: {count}</p>
      <button type="button" onClick={() => setCount((prev) => ++prev)}>
        Aumentar
      </button>
      <button type="button" onClick={() => setCount((prev) => --prev)}>
        Reducir
      </button>
    </div>
  );
};
export default Counter;
