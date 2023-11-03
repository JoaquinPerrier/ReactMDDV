import { createContext, useState } from "react";

// CREAR CONTEXTO
export const cartContext = createContext();

// CREAR PROVIDER
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {};
  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
}
