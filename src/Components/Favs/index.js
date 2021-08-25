import Header from '../shared/Header'
import './style.css'

import RecipeCard from '../Recipes/RecipeCard';


const Recipes = () => {
    const favRecipes = JSON.parse(localStorage.getItem('favItems')) || []
    return (
        <div className="recipes_container">
            <Header />
            <div className="recipes-header">
                <h1>My Favorites</h1>
            </div>
            <div className="recipes_listing">
                {favRecipes.length > 0 ? favRecipes.map(({ strMealThumb, strMeal, idMeal }) =>
                    <RecipeCard title={strMeal} img={strMealThumb} id={idMeal} key={idMeal} />
                ) : <h4 className="error-text">No recipes found for selected filters!</h4>}
            </div>
        </div>
    )
}

export default Recipes;