import './SearchList.css';
import ProductCard from '../ProductCard/ProductCard.js';
import Error from "../Error/error.js"
import Loading from "../Loading/loading.js"
import { useEffect, useState } from "react";

function SearchList({search}) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) return;
    const fetchBusqueda = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/productos/busqueda/${search}`
        );
        if (!response.ok) {
          throw new Error("Error en la búsqueda");
        }
        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBusqueda();
  }, [search]);
  if (loading) return <Loading/>;
  if (error) return <Error errormessage={error.message}/>;
  return (
    <main>
      <h2>Resultados para: "{search}"</h2>
      {productos.length === 0 && (
        <p>No se encontraron resultados</p>
      )}
        <ul id="lista-productos" className="product-grid" aria-live="polite">
          {productos.map(producto => (
            <div key={producto._id}>
              <ProductCard 
                producto={producto}
                />
            </div>
            ))}
        </ul>
    </main>
  );
}

export default SearchList;