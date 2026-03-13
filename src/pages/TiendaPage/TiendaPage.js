import './TiendaPage.css';
import TiendaList from '../../components/TiendaList/TiendaList';

function TiendaPage() {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <TiendaList/>
			</div>
		</div>
    </>);
}
export default TiendaPage;