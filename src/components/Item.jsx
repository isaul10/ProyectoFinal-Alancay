import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "200px" }}
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;

