import './SearchBody.css';
import SearchList from '../../components/SeachList/SearchList';
import { useParams } from 'react-router-dom';

function SearchBody() {

  const { query } = useParams();

  return (
    <div className="background-main">
      <div className="catalogo" id="contenido">
        <SearchList search={query}/>
      </div>
    </div>
  );
}

export default SearchBody;