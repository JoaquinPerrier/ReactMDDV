import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, filters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </CartProvider>
  );
}

export default App;
