import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";
const Counter = ()=>{
    const {/* count,upgrade,downgrade */state,dispatch,stats} = useContext(CounterContext);

    return (
        <div className="container">
            <h2>Contador de React</h2>
            <p>El contador ti ene un valor actual de: <strong>{state.count}</strong></p>
            <p>El valor promedio es: <strong>{stats.promedio.toFixed(2)}</strong></p>
            <p>El valor maximo es: <strong>{stats.max}</strong></p>
            <p>El valor minimo es: <strong>{stats.min}</strong></p>
            <button className="increment" onClick={()=>dispatch({type:'increment'})}>Incremetar</button>
            <button className="decrement" onClick={()=>dispatch({type:'decrement'})}>Reducur</button>
            <button className="decrement" onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )

}

export default Counter;