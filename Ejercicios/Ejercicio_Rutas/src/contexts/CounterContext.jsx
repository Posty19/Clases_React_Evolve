import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const upgrade = () => setCount((prev) => ++prev);
  const downgrade = () => setCount((prev) => --prev);

  return (
    <CounterContext.Provider value={{ count, upgrade, downgrade }}>
      {children}
    </CounterContext.Provider>
  );
}
