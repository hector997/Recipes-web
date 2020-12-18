import React from 'react';
import Card from './Card'

function Recent() {

    return(
        <div className="recent-container">
            <h3 className="title">Reviews recientes</h3>
            <Card />
            <Card />
            <Card />
        </div>
    );
}
 
export default Recent;