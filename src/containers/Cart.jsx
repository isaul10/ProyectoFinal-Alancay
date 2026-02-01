import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ padding: "1rem" }}>El carrito está vacío 🛒</h2>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Tu carrito</h2>

      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <h3>Total: ${totalPrice()}</h3>
      <Link to="/checkout">
  <button>Finalizar compra</button>
</Link>


      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;
