
import './Navbar.css';
import { AuthContext } from '../../auth/AuthContext.js';
import { CartContext } from '../../auth/CartContext';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const userId = currentUser?.id;


  const handleSearch = (e) => {

    e.preventDefault();

    if (!searchText.trim()) return;

    navigate(`/buscar/${encodeURIComponent(searchText)}`);

  };


  return (

    <header className="site-header">

      <div className="branding">
        <Link to="/" className="brand">
          <img
            id="logo"
            src="/assets/img/GROGUTECH.png"
            alt="Icono Hermanos Jota"
          />
        </Link>
      </div>


      <form className="search" onSubmit={handleSearch}>

        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button type="submit">
          Buscar
        </button>

      </form>


      <nav className="site-nav" aria-label="Principal">

        <Link to="/">Inicio</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/servicios">Servicios</Link>

        <Link to="/carrito">
          Carrito
          <span id="cart-count" aria-live="polite">
            ({totalItems})
          </span>
        </Link>

        {currentUser ? (
          <Link to={`/perfil/${userId}`}>MiPerfil</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}

      </nav>

    </header>

  );
}

export default Navbar;

