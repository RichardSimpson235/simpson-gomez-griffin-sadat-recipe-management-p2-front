import React from "react";
import taco from "./taco.jpg"

export default function RecipeInfo({ recipe }){

    // var r = {
    //     name:'Tacos',
    //     description:'Tacos Rancheros',
    //     cookTime:'1.5 hours'
    //     };

    return (
    <div className="container" >
        <div className="row" >

            <h3>Recipe: {recipe.name}</h3>

        </div>

        <h3>Description: {recipe.description}</h3>     

        <h3>Cook Time: {recipe.cookTime}</h3> 
       

        <img src= {taco} className="img-fluid" ></img>

    </div>);  

}

