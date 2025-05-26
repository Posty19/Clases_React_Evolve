import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";
const Counter = ()=>{
    const {count,upgrade,downgrade} = useContext(CounterContext);

    return (
        <div className="container">
            <h2>Contador de React</h2>
            <p>El contador ti ene un valor actual de: <strong>{count}</strong></p>
            <button className="increment" onClick={upgrade}>Incremetar</button>
            <button className="decrement" onClick={downgrade}>Reducur</button>
        </div>
    )

}

export default Counter;