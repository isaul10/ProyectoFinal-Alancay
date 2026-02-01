

import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./NavBar.css";
import CartWidget from "./CartWidget";

const categories = [
  { slug: "smartphones", name: "Smartphones" },
  { slug: "laptops", name: "Laptops" },
  { slug: "fragrances", name: "Fragrances" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        Mi Tienda
      </Link>

      <ul className="nav-links">
        {/* INICIO */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Inicio
          </NavLink>
        </li>

        {/* CARRITO ICONO */}
        <li>
          <CartWidget />
        </li>

        {/* CATEGORÍAS */}
        <li className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setOpen(!open)}
          >
            Categorías ▾
          </button>

          {open && (
            <ul className="dropdown-menu">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <NavLink
                    to={`/category/${cat.slug}`}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* LINK CARRITO TEXTO */}
        <li className="cart">
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
           
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
