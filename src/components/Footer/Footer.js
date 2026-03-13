import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Enlaces</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/tienda">Tienda</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Red social</h3>
                    <ul className="social-media">
                        <li>
                            <div><a href="https://www.instagram.com/grogu.tech/" target="_blank" rel="noreferrer" aria-label="Instagram">
                             Instagram</a></div>
                            <div><a href="https://wa.me/541126948588" target="_blank" rel="noreferrer" aria-label="Whatsapp">
                            Whatsapp</a></div>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul>
                        <li><strong>Teléfono: </strong>+54 11 2694-8588</li>
                        <li><strong>Email: </strong><a href="mailto:techgrogu@gmail.com">info@hermanosjota.com.ar</a></li>
                    </ul>
                </div>
            </div>
	    </footer>);
}
export default Footer;