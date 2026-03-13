import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext.js';
import './CrearProducto.css';

function CrearProducto() {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    consola: "",
    tipo: "producto",
    precio: "",
    descripcion: "",
    imagenUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const dataToSend = {
      ...formData,
      precio: Number(formData.precio)
    };

    try {

      const token = localStorage.getItem("token");

      if (!token) {
        alert("No hay sesión activa");
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/productos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "La creación falló.");
      }

      const result = await response.json();

      alert(`¡Creación exitosa para ${formData.nombre}!`);

      setFormData({
        nombre: "",
        consola: "",
        tipo: "producto",
        precio: "",
        descripcion: "",
        imagenUrl: ""
      });

      navigate(`/productos`);

    } catch (error) {
      alert(error.message);
    }
  };

  if (!currentUser || !currentUser.roles || !currentUser.roles.includes('admin')) {
    return <p>Debes logearte como administrador para crear productos</p>;
  }

  return (

    <div className="crear-producto-container">

      <h2 className="titulo-formulario">Agregar nuevo producto</h2>

      <form className="formulario-producto" onSubmit={handleSubmit}>

        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="consola">Consola</label>
          <input
            type="text"
            id="consola"
            name="consola"
            value={formData.consola}
            onChange={handleChange}
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="tipo">Tipo</label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            <option value="producto">Producto</option>
            <option value="servicio">Servicio</option>
          </select>
        </div>

        <div className="campo-formulario">
          <label htmlFor="imagenUrl">Imagen del producto</label>
          <input
            type="url"
            id="imagenUrl"
            name="imagenUrl"
            value={formData.imagenUrl}
            onChange={handleChange}
          />
          {formData.imagenUrl && (
            <img 
              src={formData.imagenUrl}
              alt="preview"
              style={{marginTop:"10px",borderRadius:"8px",maxHeight:"200px"}}
            />)}
        </div>

        <div className="campo-formulario">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="4"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-crear">
          Crear producto
        </button>

      </form>

    </div>

  );
}

export default CrearProducto;
