import React, {useState, useEffect} from 'react';
import Card from "./Card";
import SearchBar from './SearchBar';
import Main from "./Main";
import App from "../App";
import '../App.css'

 
const Results  = (props) => {
    const APP_ID = "996596ee";
    const APP_KEY = "fd61e44e25f504a3c8a320ab9f819169";
    
    const  [recipes, setRecipes] = useState ([]);

    
    useEffect (() => {
        getRecipes();
    }, [props.query]);

    
    const getRecipes = async () =>{
            
            const response = await fetch(`https://api.edamam.com/search?q=${props.query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await response.json();
            console.log(data.hits);
            setRecipes(data.hits);
            
    }



    return(
        <div className="gridContainer">
            {recipes.map(temp =>(
                <Card
                key={temp.recipe.totalWeight}
                dir={temp.recipe.url}
                title={temp.recipe.label}
                calories={temp.recipe.calories}
                image={temp.recipe.image}
                ingredients={temp.recipe.ingredients}
                
                />
            ))}
        </div>
    );

}
export default Results;

    
