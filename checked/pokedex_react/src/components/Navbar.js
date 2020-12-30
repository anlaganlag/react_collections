import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="categories">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/pokemons">
            <button className="btn btn-primary">神奇寶貝</button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/type">
            <button className="btn btn-primary">品系</button>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
