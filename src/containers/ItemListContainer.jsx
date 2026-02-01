import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

import Spinner from "../components/Spinner";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(list);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <Spinner />;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{categoryId ? categoryId : "Todos los productos"}</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "1rem" }}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} width="150" />
          <br />
          <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;


