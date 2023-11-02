import "./Cart.css";
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";

export function Cart() {
  const cartCheckbocId = useId();

  return (
    <>
      <label htmlFor={cartCheckbocId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckbocId} hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="iphone"
            />
            <div>
              <strong>Iphone</strong> - $899
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
