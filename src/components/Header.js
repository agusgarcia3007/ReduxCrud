import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    const [add, setAdd] = useState(false);

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-light justify-content-between">
            <div className="container">
                <h1 className='recrud'><Link to='/' className='text-dark' onClick={() => setAdd(false)} >Recrud</Link></h1>
            </div>
            { !add ? <Link to="/items/new" className='btn btn-dark new-post d-block d-md-inline-block' onClick={() => setAdd(true)} >Add new item &#43;</Link> : null }
        </nav>
     );
}
 
export default Header;
