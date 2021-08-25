
import { useEffect, useState } from "react";
import { Spinner, Button, Ratio, Badge } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import './RecipeDetailCard.css';

const RecipeDetailCard = ({ id, show, title, handleUpdateStorage, fav, cart, ...props }) => {

    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchRecipeDetail = async () => {
        if (!id) {
            return;
        }
        try {
            setLoading(true);
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const result = await res.json();
            setDetail(result.meals[0]);
            console.log(result.meals[0])
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (show) {
            fetchRecipeDetail();
        }
    }, [show])

    const ingredients = Object.keys(detail).filter(e => e.includes('strIngredient')) || [];
    const tutorialCode = detail.strYoutube ? detail.strYoutube.replace('https://www.youtube.com/watch?v=', '') : null;
    return (
        <Modal
            {...props}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="recipe-detail_modal-card"
        >
            <Modal.Body className="recipe-detail-card_body">
                {loading ? <div className="recipe-detail-card_box"><Spinner animation="grow" /></div> :
                    <div className="recipe-detail-card_content">
                        <div className="recipe-detail-card_content-info">
                            <h4>{title}</h4>
                            {detail.strTags ? <div className="recipe-detail-card_tags">{detail.strTags?.split(',').map(e => <Badge bg="dark" key={e}>{e}</Badge>)}</div> : ''}
                            <h6 className="recipe-detail_title">Ingredients :</h6>
                            <div className="recipe-detail-card_ingredients">
                                {ingredients.map(e => detail[e] && <p key={e}>{detail[e]} <span className="recipe-detail-card_measure">({detail[`strMeasure${parseInt(e.replace('strIngredient', ''), 10)}`]})</span><span className="divider">,</span></p>)}
                            </div>
                            <h6 className="recipe-detail_title">Preparation :</h6>
                            <p>
                                {detail?.strInstructions}
                            </p>
                            {tutorialCode && <><h6 className="recipe-detail_title">Tutorial :</h6>
                                <Ratio aspectRatio="16x9">
                                    <iframe src={`https://www.youtube.com/embed/${tutorialCode}?controls=0`} X-Frame-Options="cross-origin" title="video" />
                                </Ratio>
                            </>}
                        </div>
                        <img src={detail.strMealThumb} alt={title} className="recipe-detail-card_content-img" />
                        <div className="recipe-detail_action-btn">
                            <Button variant="danger" className="action-button" onClick={e => handleUpdateStorage('favItems')}><i className={`bi bi-heart${fav ? '-fill' : ''}`}></i>{fav ? 'Added' : 'Add'} to favorite</Button>
                            <Button variant="success" className="action-button" onClick={e => handleUpdateStorage('cartItems')}><i className={`bi bi-cart${cart ? '-fill' : ''}`}></i>{cart ? 'Added' : 'Add'} to cart</Button>
                        </div>
                    </div>
                }
            </Modal.Body>
        </Modal>
    )
}

export default RecipeDetailCard;