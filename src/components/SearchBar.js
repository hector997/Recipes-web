import React, {useState, useEffect} from 'react';
import Results from './Results';
import {Link} from 'react-router-dom';
import '../App.css'

const SearchBar = (props) => {
    const [search,setSearch] = useState ('');

    
    const updateSearch = e =>{
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        props.setQuery(search);
        setSearch('');
    }

    return(
        <div>
            <div className="searchBar">
                <form onSubmit={getSearch}>
                <input className="inputBar" placeholder="Escribí acá..." type="text" value={search} onChange={updateSearch}/>
                <button className="inputButton" type="submit">Buscar</button>
                </form>
            </div>
        </div>

    );
    }

 
export default SearchBar;