import { createContext, useContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


  const addItem = (item, quantity) => {
    const existingItem = cart.find(prod => prod.id === item.id);

    if (existingItem) {
      setCart(cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

