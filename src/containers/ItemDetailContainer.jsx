import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

import Spinner from "../components/Spinner";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [itemId]);

  //if (loading) return <h2>Cargando...</h2>;
  if (loading) return <Spinner />;


  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
