import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeAdd from "./AddRecipeButton";
import { useNavigate } from "react-router-dom";



export default function RecipeHolder({ recipes, isDeletable }) {

    const [recipeItems, setRecipes] = useState([...recipes]);
    const navigate = useNavigate();

    const recipeList = recipeItems.map(r =>                        
        <RecipeCard key={r.id} recipe={r} deleteCard={deleteRecipe} isDeletable={isDeletable}/>
        
    );

    function addRecipe(){
        navigate('/recipes/new');
    }

    function deleteRecipe(id) {
        const allRecipes = [...recipeItems];
        const newList = allRecipes.filter(r => r.id !== id);  

        setRecipes(newList);
        
    }

    return(
        <div className="container">
            <div className="row text-center">
                <h1 className="display-4">My Recipes</h1><br/>
            </div>
 
        <div className="row">
            <div className="card-group">
                {recipeList}
                
                    {
                        isDeletable ? (
                        <div className="btn" onClick={addRecipe}>
                            <RecipeAdd />
                        </div>   
                        ) : ""
                    }        
            </div>
        </div>

    </div>
    )
}