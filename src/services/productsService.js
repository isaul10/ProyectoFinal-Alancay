const API_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.products;
};

export const getProductsByCategory = async (category) => {
  const res = await fetch(`${API_URL}/category/${category}`);
  const data = await res.json();
  return data.products;
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return data;
};
