import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './recipeCard.css';
import RecipeDetailCard from './RecipeDetailCard';

const RecipeCard = ({ title, img, id }) => {
    const [cart, setCart] = useState(false);
    const [fav, setFav] = useState(false);
    const [showDetail, setDetailCard] = useState(false);

    const updateActionFromStorage = () => {
        const favItems = JSON.parse(localStorage.getItem('favItems')) || [];
        const foundFavIndex = favItems.findIndex(d => d.idMeal === id);
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const foundCartIndex = cartItems.findIndex(d => d.idMeal === id);
        setFav(foundFavIndex !== -1);
        setCart(foundCartIndex !== -1);
    }

    useEffect(() => {
        updateActionFromStorage();
    }, [])

    const handleUpdateStorage = (storage) => {
        const currentData = JSON.parse(localStorage.getItem(storage)) || [];
        const data = { strMealThumb: img, strMeal: title, idMeal: id }
        const foundIndex = currentData.findIndex(d => d.idMeal === id);
        if (foundIndex > -1) {
            currentData.splice(foundIndex, 1);
        } else {
            currentData.push(data);
        }
        localStorage.setItem(storage, JSON.stringify(currentData));
        updateActionFromStorage();
    }
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={img} alt={title} />
            <Card.ImgOverlay onClick={() => setDetailCard(true)}>
                <div className="recipe_card-short-actions">
                    <i className={`bi bi-heart${fav? '-fill' : ''} fav`} onClick={e => { e.preventDefault(); e.stopPropagation(); handleUpdateStorage('favItems') }}></i>
                    <i className={`bi bi-cart${cart? '-fill' : ''} cart`} onClick={e => { e.preventDefault(); e.stopPropagation(); handleUpdateStorage('cartItems') }}></i>
                </div>
                <Card.Title>{title}</Card.Title>
            </Card.ImgOverlay>
            
            <RecipeDetailCard id={id} show={showDetail} onHide={() => setDetailCard(false)} title={title} handleUpdateStorage={handleUpdateStorage} fav={fav} cart={cart} />
        </Card>
    )
}

export default RecipeCard;