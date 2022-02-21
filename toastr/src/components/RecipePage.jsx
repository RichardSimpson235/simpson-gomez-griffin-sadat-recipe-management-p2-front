import React from "react";
import { useParams } from "react-router-dom";

function RecipePage({ create }) {

    // const params = useParams();
    const { id } = useParams();
    return (
        create ? <p> we gonna create a recipe</p> : <p>This is the page for recipe with id: {id}</p>
    )
}

export default RecipePage;
