import React from "react";
import chicken from '../images/c.jpg';
import './recipeCard.css';
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, deleteCard, isDeletable }) {    

    async function deleteRecipe(e) {
        e.stopPropagation();
        deleteCard(recipe.id);
        

        const data = {
            id: recipe.id,
            name: recipe.name,
            description: recipe.description
        }

        const url = `http://localhost:8080/recipes/${data.id}`;
        const httpResponse = await fetch(url, {
            method: "DELETE"
        });
    
    }

    return(
        <div className="btn">
            <div className="card" style={{maxWidth: "100%"}} >
                <Link to={`/recipes/${recipe.id}`} className='stretched-link'/>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={chicken} className=" img-fluid rounded float-start" alt={recipe.name}/>
                        </div>
                    <div className="col-md-8" style={{display: 'flex'}}>
                        <div className="card-body" >
                            {
                                isDeletable ? (
                                <div className="row">
                                    <div className="d-flex justify-content-end button-div" >
                                        <button  onClick={deleteRecipe} type="button" className="btn-close z-index-master" aria-label="Close"/>
                                    </div>
                                </div>
                                ) : ""
                            }
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