import react from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-light justify-content-between">
            <div className="container">
                <h1 className='recrud'><Link to='/' className='text-dark'>Recrud</Link></h1>
            </div>
            <Link to="/items/new" className='btn btn-dark new-post d-block d-md-inline-block'>Add new item &#43;</Link>
        </nav>
     );
}
 
export default Header;
