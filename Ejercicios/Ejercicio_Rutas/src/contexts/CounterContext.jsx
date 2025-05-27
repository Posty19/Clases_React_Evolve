import { createContext, /* useState, */ useReducer, useMemo } from "react";

export const CounterContext = createContext();

const initialValue = {
  count: 0,
  history: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
        history: [...state.history, state.count + 1],
      };
    case "reset":
      return initialValue;
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  //const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialValue);

  /* const upgrade = () => setCount((prev) => ++prev);
  const downgrade = () => setCount((prev) => --prev); */

  const stats = useMemo(() => {
    return {
      promedio:
        state.history.length > 0
          ? state.history.reduce((a, b) => a + b, 0) / state.history.length
          : 0,
      max: Math.max(...state.history, 0),
      min: Math.min(...state.history, 0),
    };
  }, [state.history]);

  return (
    <CounterContext.Provider value={{ state, dispatch, stats }}>
      {children}
    </CounterContext.Provider>
  );
}
