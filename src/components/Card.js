import React from 'react';
import Results from './Results';
import {Link} from 'react-router-dom';
import '../App.css';


const Card = ({title,calories,image,dir}) => {
    
      

    return(
        <div className="card">
            <img className="cardPic" src={image}/>
            <a className="cardTitle" onClick={()=>{window.open(dir)}}>{title}</a>
            <div className="cardCalories" >Calories: {calories}</div>
        </div>

    );
}
 
export default Card;