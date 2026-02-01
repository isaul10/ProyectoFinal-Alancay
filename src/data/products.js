const products = [
  {
    id: "1",
    title: "Remera Negra",
    price: 5000,
    category: "remeras",
    description: "Remera de algodón",
    image: "https://via.placeholder.com/150"
  },
  {
    id: "2",
    title: "Zapatillas Running",
    price: 20000,
    category: "zapatillas",
    description: "Zapatillas deportivas",
    image: "https://via.placeholder.com/150"
  },
  {
    id: "3",
    title: "Remera Blanca",
    price: 4500,
    category: "remeras",
    description: "Remera básica",
    image: "https://via.placeholder.com/150"
  }
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 1000);
  });
};
