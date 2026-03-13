import './ServiciosBody.css';
import ServiciosList from '../../components/ServiciosList/ServiciosList.js';

function ServiciosBody() {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ServiciosList/>
			</div>
		</div>
    </>);
}
export default ServiciosBody;