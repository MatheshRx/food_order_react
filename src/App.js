import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartShownIs, setCartShownIs] = useState(false);

  const showHandeler = () => {
    setCartShownIs(true);
  };

  const closeHandeler = (e) => {
    if (
      e.target.classList.contains("closeModal") ||
      e.target.classList.contains("closeCart")
    )
      setCartShownIs(false);
  };
  return (
    <CartProvider>
      {cartShownIs && <Cart onCloseCart={closeHandeler} />}
      <Header onShowCart={showHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
