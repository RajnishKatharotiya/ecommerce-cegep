import Header from '../shared/Header'
import './style.css'

import RecipeCard from '../Recipes/RecipeCard';


const Recipes = () => {
    const cartRecipes = JSON.parse(localStorage.getItem('cartItems')) || []
    return (
        <div className="recipes_container">
            <Header />
            <div className="recipes-header">
                <h1>My Cart</h1>
            </div>
            <div className="recipes_listing">
                {cartRecipes.length > 0 ? cartRecipes.map(({ strMealThumb, strMeal, idMeal }) =>
                    <RecipeCard title={strMeal} img={strMealThumb} id={idMeal} key={idMeal} />
                ) : <h4 className="error-text">No recipes found for selected filters!</h4>}
            </div>
        </div>
    )
}

export default Recipes;