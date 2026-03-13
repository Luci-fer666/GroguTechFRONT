import "./TarjetaGaleria.css"
import { Link } from 'react-router-dom';

function TarjetaGaleria({producto}) {

    return (
    <li className="producto-item">
      <Link to={`/producto/${producto._id}`}>
        <img src={producto.imagenUrl} alt={producto.nombre}/>
      </Link>
        
      <Link to={`/producto/${producto._id}`}>
        <h3 className="nombre-producto">
          {producto.nombre}
        </h3>
      </Link>
    </li>
  );
}
export default TarjetaGaleria;
