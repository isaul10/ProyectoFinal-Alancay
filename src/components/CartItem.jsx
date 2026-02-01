import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h4>{product.title}</h4>
      <p>Cantidad: {product.quantity}</p>
      <p>Precio unitario: ${product.price}</p>
      <p>Subtotal: ${product.price * product.quantity}</p>

      <button onClick={() => removeItem(product.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;

