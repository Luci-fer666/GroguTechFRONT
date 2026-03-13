import './ProductosBody.css';
import ProductList from '../../components/ProductList/ProductList.js';

function ProductosBody() {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ProductList/>
			</div>
		</div>
    </>);
}
export default ProductosBody;