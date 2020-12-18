
import SearchBar from './SearchBar'
import React , {useState} from 'react';
import Results from './Results';

function Main() {
    const  [query, setQueryMain] = useState ([]);
    //callbacks, props
    return(
        <div className="background">
            <br></br>
            <div className="container-main">
                <h1 className="title-main">recipe ideas</h1>
                <br></br>
                <SearchBar 
                    setQuery={(query)=>{
                        setQueryMain(query);
                        console.log("funciona")
                    }}
                />
                <br></br>
                <h4 className="subtitleMain">
                    ¡Encontrá recetas de todo tipo ingresando el ingrediente que tenés a mano!
                </h4>
                <br></br>
            </div>
            <Results
                query={query}
             />
            <br></br>
        </div>

    );
}
 
export default Main;