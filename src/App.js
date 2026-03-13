import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import ProductosBody from './pages/ProductosPage/ProductosBody.js';
import ProductoIndividualBody from './pages/ProductosDetailPage/ProductDetail.js';
import CarritoBody from './pages/CarritoPage/BodyCarrito.js';
import CrearProducto from './components/CrearProducto/CrearProducto.js';
import IndexBody from './pages/HomePage/BodyIndex.js';
import Registro from './pages/RegistroPage/Register.js';
import Login from './pages/LoginPage/Login.js';
import Perfil from './pages/PerfilPage/Perfil.js';
import TiendaPage from './pages/TiendaPage/TiendaPage.js';
import ServiciosBody from './pages/ServiciosPage/ServiciosBody.js';
import SearchBody from './pages/SearchBody/SearchBody.js';

import { Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <div className="App">
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<IndexBody/>} />
          <Route path="/tienda" element={<TiendaPage/>} />
          <Route path="/productos" element={<ProductosBody/>} />
          <Route path="/servicios" element={<ServiciosBody/>} />
          <Route path="/carrito" element={<CarritoBody/>} />
          <Route path="/register" element={<Registro/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/perfil/:id" element={<Perfil/>} />
          <Route path="/admin/crear-producto" element={<CrearProducto/>} />
          <Route path="/producto/:id" element={<ProductoIndividualBody />} />
          <Route path="/buscar/:query" element={<SearchBody />} />
        </Routes>
      </main>
      <Footer/> 
    </div>
  );}

export default App;
