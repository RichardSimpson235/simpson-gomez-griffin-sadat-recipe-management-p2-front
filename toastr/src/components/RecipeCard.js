import React from "react";
import chicken from '../images/c.jpg';

export default function RecipeCard({ recipe, deleteCard }) {
    

    async function deleteRecipe(e) {
        e.stopPropagation();
        deleteCard(recipe.id);
        

        const data = {
            id: recipe.id,
            name: recipe.name,
            description: recipe.description
        }

        console.log(JSON.stringify(recipe));

        const url = `http://localhost:8080/recipes/${data.id}`;
        const httpResponse = await fetch(url, {
            method: "DELETE"
        });
    
    }
    

      
    function getRecipe() {       
        const recipeObject = {
            recipeID: recipe.id,
            nameVal: recipe.name,
            descpVal: recipe.description
        }
        console.log(recipeObject);
    }


    return(
        <div className="btn" onClick={getRecipe}>
        <div className="card" style={{maxWidth: "100%"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={chicken} className=" img-fluid rounded float-start" alt={recipe.name}/>
        </div>
        <div className="col-md-8" style={{display: 'flex'}}>
            <div className="card-body" >
                <div className="row">
                    <div className="d-flex justify-content-end" >
                        <button  onClick={deleteRecipe} type="button" className="btn-close " aria-label="Close"/>
                    </div>
                </div>
                <h5 style={{display: 'none'}} id="recipeId">{recipe.id}</h5>
                <h2 className="card-title" id="recipeName">{recipe.name}</h2>
                <p className="card-text" id="recipeDescription">{recipe.description} </p>               
            </div>
        </div>
        </div>
        </div>
        </div>
        
    );
}