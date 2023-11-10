import "./Cart.css";
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt="iphone" />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const { cart, clearCart, addToCart } = useCart();
  const cartCheckbocId = useId();

  return (
    <>
      <label htmlFor={cartCheckbocId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckbocId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
