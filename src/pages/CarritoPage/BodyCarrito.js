import './BodyCarrito.css';
import CarritoCard from '../../components/CarritoProductCart/CarritoCart';
import React, { useContext } from 'react';
import { CartContext } from '../../auth/CartContext';
import { AuthContext } from '../../auth/AuthContext.js';

function CarritoBody() {
  const { currentUser } = useContext(AuthContext);
  const { cartItems, clearCart} = useContext(CartContext);
  const nombre = currentUser?.username || "Cliente";

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const realizarPedido = () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }
    const numero = "541126948588";
    let mensaje = `Hola, me llamo ${nombre}, quisiera pedir:%0A%0A`;
    cartItems.forEach((item) => {
      mensaje += `${item.quantity} ${item.nombre}%0A`;
    });

    mensaje += `%0ATotal: ARS $${total}`;
    const url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, "_blank");

  };



  return (
    <main className="contenido">
      <div className="background-main">
        <h1 class="titulopagina">Carrito de compras</h1>
        {cartItems.length === 0 && (
          <p>No hay productos en el carrito.</p>
        )}
        <section className="resumencarrito">
          <ol id="carrito-lista" className="carritogrid" aria-live="polite">
            {cartItems.map((producto) => (
              <div key={producto._id}>
                <CarritoCard
                  producto={producto}
                />
              </div>
            ))}

          </ol>

          <div className="cardOption">
            <p>
              Total:{' '}
              <strong>
                ARS ${total}
              </strong>
            </p>
            <button id="vaciarcarrito" className="btncar" onClick={clearCart}>
              Vaciar carrito
            </button>
            <button id="vaciarcarrito" className="btncar" 
            onClick={() => realizarPedido()}
            >
              Realizar pedido
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CarritoBody;