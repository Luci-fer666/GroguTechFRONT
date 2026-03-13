import './CarritoCart.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../auth/CartContext';

function CarritoCard({ producto }) {
  const { removeItem } = useContext(CartContext);

  return (
    <li className="carritocard">
      <img
        className="carritoimg"
        src={producto.imagenUrl}
        alt={producto.nombre}
      />

      <div className="carritoinfo">
        <Link to={`/producto/${producto._id}`}>
          <h3 className="carrito-nombre">{producto.nombre}</h3>
        </Link>

        <p className="carritoprecio">
          <strong>ARS</strong> ${producto.precio}
        </p>

        <p className="carritocantidad">
          Cantidad: <strong>{producto.quantity} </strong>
          Precio por cantidad: <strong>{producto.quantity * producto.precio}</strong>
        </p>

        <button
          className="carritoremove"
          onClick={() => removeItem(producto._id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
}

export default CarritoCard;