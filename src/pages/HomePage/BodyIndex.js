import { useEffect, useState } from "react";
import './BodyIndex.css';
import Carrousel from '../../components/Carrousel/carrousel';
import GaleriaFila from '../../components/Galeria/galeria.js';

function IndexBody() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/productos`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "La respuesta de la red no fue satisfactoria");
        }
        const data = await response.json();
        console.log("Productos recibidos:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <p>Cargando productos...</p>;
  }
  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  /* ----------- FILTROS ----------- */
  const nuevo = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);
  const SERVICIOS = products
    .filter(p => p.tipo === "servicio")
    .slice(0, 5);
  const PRODUCTOS = products
    .filter(p => p.tipo === "producto")
    .slice(0, 5);

  return (
    <div className="productos">
      <div className="background-main">
        <main>
          <article>
            <div>
              <Carrousel />
            </div>
            <section>
              <div className="historia">
                <h2>NUEVO</h2>
                <GaleriaFila imagenes={nuevo} className="galeria"/>
              </div>

              <div className="que-ofrecemos">
                <h2>SERVICIOS</h2>
                <GaleriaFila imagenes={SERVICIOS} className="galeria"/>
              </div>

              <div className="que-ofrecemos">
                <h2>PRODUCTOS</h2>
                <GaleriaFila imagenes={PRODUCTOS} className="galeria"/>
              </div>

            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

export default IndexBody;
