import Header from '../shared/Header'
import './style.css'

import RecipeCard from '../Recipes/RecipeCard';
import { Card, Button } from 'react-bootstrap';
import PaymentModal from './PaymentModal';
import { useState } from 'react';


const Recipes = () => {
    const [show, setShow] = useState(false);
    const cartRecipes = JSON.parse(localStorage.getItem('cartItems')) || []
    return (
        <div className="recipes_container">
            <Header />
            <div className="recipes-header">
                <h1>My Cart</h1>
            </div>
            <div className="recipes_listing-wrapper">
            <div className="recipes_listing">
                {cartRecipes.length > 0 ? cartRecipes.map(({ strMealThumb, strMeal, idMeal }) =>
                    <RecipeCard title={strMeal} img={strMealThumb} id={idMeal} key={idMeal} />
                ) : <h4 className="error-text">No recipes found for selected filters!</h4>}
            </div>
            <Card className="cart-checkout_card">
                <div>
                    <h4>Cart Items</h4>
                    <div>
                        {cartRecipes.length > 0 ? cartRecipes.map(({ strMealThumb, strMeal, idMeal }) =>
                            <div key={idMeal} className="cart-checkout_row">
                                <img src={strMealThumb} alt={strMeal} />
                                <p>{strMeal}</p>
                            </div>
                        ) : <h4 className="error-text">No recipes found for selected filters!</h4>}
                    </div>
                </div>
                <Button className="cart-checkout_pay-now-btn" variant="success" onClick={() => setShow(true)}>Pay Now</Button>
            </Card>
            </div>
            <PaymentModal onHide={() => setShow(false)} show={show} />
        </div>
    )
}

export default Recipes;