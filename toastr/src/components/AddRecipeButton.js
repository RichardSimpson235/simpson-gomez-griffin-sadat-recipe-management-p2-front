import React from "react";
import add from '../images/add.png';



export default function RecipeAdd() {



    



    return(
        <div className="container">
        
        <div className="card-group">
        <div className="card bg-light text-black bg-image hover-zoom">
            <img src={add} className="card-img" alt="..."/>
            <div className="card-img-overlay">
            <h1 className="card-title" style={{textAlign: "center"}}>Add Recipe</h1>
            </div>
        </div>
        </div>        
        
        </div>
    );
}