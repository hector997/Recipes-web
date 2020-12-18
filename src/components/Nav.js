import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
import '../App.css';

function Nav() {
    
    return(
        <nav id="Nav" >
        
            <Link to="/">
                <a className="navHome" >Recipe Ideas</a>
            </Link>
            <ul className="navButtons">
                <Link to="/LogIn">
                    <button className="button">login</button>
                </Link>
                
                <Link to="/About">
                    <button className="button">Favs</button>
                </Link>
            </ul>
        </nav>
    );
}
 
export default Nav;