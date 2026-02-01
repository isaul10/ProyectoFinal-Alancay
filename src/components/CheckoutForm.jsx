import { useState } from "react";
import { useCart } from "../context/CartContext";
import Spinner from "../components/Spinner";

import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Completa todos los campos");
      return;
    }

    if (!buyer.email.includes("@")) {
      setError("Email inválido");
      return;
    }

    setError("");
    setLoading(true);

    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
      setSuccess(true);
    } catch (err) {
      setError("Error al procesar la compra");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner text="Procesando compra..." />;
  }

  if (success) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>✅ Compra realizada con éxito</h2>
        <p>Gracias por tu compra</p>
        <p><strong>ID de orden:</strong> {orderId}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">
          Confirmar compra (${totalPrice()})
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;


