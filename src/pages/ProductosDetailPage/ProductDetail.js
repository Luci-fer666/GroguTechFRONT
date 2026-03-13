
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../auth/CartContext';
import { AuthContext } from '../../auth/AuthContext.js';
import './ProductDetail.css';

function ProductoDetail() {
  const { addItemToCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/productos/${id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al obtener el producto');
        }
        const data = await response.json();
        setProducto(data);
      } catch (err) {
        console.error("Error fetching producto:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchProducto();
    }
  }, [id]);


  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  const eliminarProducto = async () => {
    if (!window.confirm(`¿Seguro que querés eliminar "${producto.nombre}"?`)) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No hay sesión activa");
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/productos/${producto._id}`,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al eliminar el producto');
      }

      alert(`"${producto.nombre}" fue eliminado correctamente`);
      navigate('/productos');
    } catch (err) {
      console.error("Error eliminando producto:", err);
      alert("Ocurrió un error al eliminar el producto");
    }

  };


  return (
    <main id="producto-individual">
      <div id="producto-caracteristicas-container">
        <h2>{producto.nombre}</h2>
        <img
          id="imagen"
          src={producto.imagenUrl}
          alt={producto.nombre}
        />
        <p>
          <strong>Descripción:</strong> {producto.descripcion}
        </p>
      </div>

      <div id="producto-caracteristicas">
        <h3 id="precio">
          <strong>Precio:</strong> $ {producto.precio}
        </h3>
        <ul>

          {producto.consola && (
            <li>
              <strong>Consola:</strong> {producto.consola}
            </li>
          )}

          <li>
            <strong>Tipo:</strong> {producto.tipo}
          </li>

          <li>
            <strong>Publicado:</strong> {new Date(producto.createdAt).toLocaleDateString()}
          </li>
        </ul>

          <button
            className="btn"
            type="button"
            onClick={() => {
              addItemToCart(producto);
              alert(`"${producto.nombre}" se agregó al carrito`);
            }}
          >
            Agregar al carrito
          </button>

        {currentUser && currentUser.roles === "admin" && (
          <button
            onClick={eliminarProducto}
            className="btn"
            type="button"
          >
            Eliminar Producto
          </button>

        )}
      </div>
    </main>
  );
}
export default ProductoDetail;

