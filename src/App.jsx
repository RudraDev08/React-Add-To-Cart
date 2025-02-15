import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState({});

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div>
      <Navbar totalItems={totalItems} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
