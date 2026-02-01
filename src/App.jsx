import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";
import Cart from "./containers/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm";


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />

      </Routes>
    </>
  );
}

export default App;
