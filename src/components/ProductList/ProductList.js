import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard.js';
import React, { useState, useEffect } from 'react';
import Error from "../Error/error.js"
import Loading from "../Loading/loading.js"

function ProductList() {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/productos`);
        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message ||'La respuesta de la red no fue satisfactoria');
        }
        const data = await response.json();
        console.log("Productos recibidos:", data);
        const PRODUCTOS = data
          .filter(p => p.tipo === "producto");
        setProducts(PRODUCTOS);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError(err);
      } finally {
        setLoading(false);
      } };
    fetchProducts(); }, []);
  if (loading) return <Loading/>;
  if (error) return <Error errormessage={error.message}/>;

    return (<>
        <ul id="lista-productos" className="product-grid" aria-live="polite">
          {productos.map(producto => (
            <div key={producto._id}>
              <ProductCard 
                producto={producto}
                />
            </div>
            ))}
        </ul>
    </>);
}
export default ProductList;