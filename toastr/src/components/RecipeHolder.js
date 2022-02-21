import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeAdd from "./AddRecipeButton";



export default function RecipeHolder({ recipes }) {


    const [recipeItems, setRecipes] = useState([...recipes]);

    const recipeList = recipeItems.map(r =>                        
        <RecipeCard key={r.id} recipe={r} deleteCard={deleteRecipe} />
        
        )
    function addRecipe(){
        //some add recipe function cal
        
    }

    function deleteRecipe(id) {
        const allRecipes = [...recipeItems];
        const newList = allRecipes.filter(r => r.id !== id);  

        setRecipes(newList);
        
    }

    return(
        <div className="container">
    <br/>
    <h1 style={{textAlign: "center"}}>My Recipes</h1><br/>
 
        <div className="card-group">
            {recipeList}
            
                <div className="btn" onClick={addRecipe}>
                    <RecipeAdd />
                </div>           
        </div>

    </div>
    )
} 