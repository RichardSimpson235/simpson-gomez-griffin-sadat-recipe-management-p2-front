import React, { useRef, useState } from 'react';
import RecipeHolder from './RecipeHolder';

function Search() {

    const [recipes, setRecipes] = useState([]);
    const searchString = useRef();

    const searchEndpoint = new URL("http://localhost:8080/recipes/search");

    const search = async (e) => {

        if(e.code === "Enter") {
            searchEndpoint.search = new URLSearchParams({
                name: searchString.current.value
            });

            const response = await fetch(searchEndpoint);
            const newRecipes = await response.json();

            setRecipes(newRecipes);
        }
    }

    return (
        <div className='col'>
            <input onKeyUp={search} ref={searchString} className='form-control' type='text' placeholder="Search for a recipe..." />

            {
                Object.keys(recipes).length === 0 ? "" :
                <RecipeHolder recipes={recipes} isDeletable={false}/>
            }
        </div>
    )
}

export default Search;