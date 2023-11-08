import { createContext, useState } from "react";

// CREAR CONTEXTO
export const cartContext = createContext();

// CREAR PROVIDER
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Vemos si el producto está en el carrito, para ver si aumentamos cantidad o lo tenemos que agregar
    const productInCartIndex = cart.findIndex((item) => item.id == product.id);

    if (productInCartIndex >= 0) {
      // SI EL PRODUCTO YA ESTÁ EN EL CARRITO
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // SI EL PRODUCTO NO ESTÁ EN EL CARRITO
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id != product.id));
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
