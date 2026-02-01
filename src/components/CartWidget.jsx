import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart">
      🛒 {totalQuantity() > 0 && <span>{totalQuantity()}</span>}
    </Link>
  );
};

export default CartWidget;
