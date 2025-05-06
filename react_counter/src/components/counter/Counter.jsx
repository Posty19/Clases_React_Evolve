import './Counter.css';
import { useEffect, useState } from 'react';

const Counter = ({init=0})=>{
    //estado del contador
    const [count,setCount] = useState(init);



    //callback y array
        //montaje/desmontaje
    useEffect(()=>{
        console.log('componente montado');
        //cleanUp
        return ()=> console.log('componente desmontado');
    },[])
        //updating
    useEffect(()=>{
        if(count!==0)console.log('updating hecho');
    },[count]);

    //jsx
    return (
        <div className='counterContainer'>
            <h2>Contador</h2>
            <p>El valor actual del contador es: {count}</p>
            <button type="button" onClick={()=>setCount(prev => ++prev)}>Aumentar conteo</button>
            <button type="button" onClick={()=>setCount(prev => --prev)}>Reducir conteo</button>
        </div>
    );
}

export default Counter;