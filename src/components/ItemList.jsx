import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
