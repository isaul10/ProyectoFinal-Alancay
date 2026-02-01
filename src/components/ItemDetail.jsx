import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);

    // TOAST
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>

      <img src={product.thumbnail} width="250" />

      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Producto agregado al carrito
        </p>
      )}

      
      {showToast && (
        <div className="toast">
          Producto agregado al carrito 🛒
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
