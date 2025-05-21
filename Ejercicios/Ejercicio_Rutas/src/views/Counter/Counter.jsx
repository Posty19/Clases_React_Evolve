import { useState } from "react"

const Counter = ()=>{
    const [count,setCount] = useState(0);

    return (
        <div className="container">
            <h2>Contador de React</h2>
            <p>El contador ti ene un valor actual de: <strong>{count}</strong></p>
            <button className="increment" onClick={()=>setCount(prev=>++prev)}>Incremetar</button>
            <button className="decrement" onClick={()=>setCount(prev=>--prev)}>Reducur</button>
        </div>
    )

}

export default Counter;