import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeInfo from "./recipe-information";
import Instructions from './Instructions';

function RecipePage({ create }) {

    const [recipe, setRecipe] = useState({});
    // const params = useParams();
    const { id } = useParams();

    const endpoint = new URL(`http://localhost:8080/recipes/${id}`);

    useEffect(() => {
        fetch(endpoint).then(response => {
            response.json().then(data => {
                setRecipe(data);
            });
        });
    }, []);


    return (
        create ? 
        <p>we gonna create</p> : 
        (<>
            <div className="row">
                <RecipeInfo recipe={recipe}/>
            </div>
            <div className="row">
                {/* <Instructions instructions={recipe.instructions} /> */}
            </div>
        </>)
    )
}

export default RecipePage;
