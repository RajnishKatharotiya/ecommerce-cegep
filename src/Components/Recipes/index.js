import Header from '../shared/Header'
import './style.css'

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';

import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';


const Recipes = () => {
    // filters list
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [areas, setAreas] = useState([]);
    // current selected filters
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    // filtered recipes
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const getFilters = async () => {
        try {
            setLoading(true);
            const resC = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
            const resultC = await resC.json();
            setCategories(resultC.meals);

            const resI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            const resultI = await resI.json();
            setIngredients(resultI.meals);

            const resA = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const resultA = await resA.json();
            setAreas(resultA.meals);

            setSelectedIngredient(resultI.meals[0].strIngredient);
            setSelectedArea(resultA.meals[0].strArea);
            setSelectedCategory(resultC.meals[0].strCategory);
        } catch (e) {
            console.log("ERROR", e)
            setLoading(false);
        }
    }

    const getRecipes = async (query) => {
        try {
            setLoading(true);
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${query || `c=${selectedCategory}`}`);
            const result = await res.json();
            setFilteredRecipes(result.meals || []);
        } catch (e) {
            console.log("ERROR", e)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFilters()
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            getRecipes(`c=${selectedCategory}`);
        }
    }, [selectedCategory])


    useEffect(() => {
        if (selectedIngredient) {
            getRecipes(`i=${selectedIngredient}`);
        }
    }, [selectedIngredient])


    useEffect(() => {
        if (selectedArea) {
            getRecipes(`a=${selectedArea}`);
        }
    }, [selectedArea])

    return (
        <div className="recipes_container">
            <Header />
            <div className="recipes-header">
                <h1>Recipes</h1>
                <div className="recipes-filter_box">
                    <FloatingLabel controlId="floatingSelectGrid" label="Recipes by category">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                            {categories.map(c => <option value={c.strCategory} key={c.strCategory}>{c.strCategory}</option>)}
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelectGrid" label="Recipes by ingredient">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setSelectedIngredient(e.target.value)} value={selectedIngredient}>
                            {ingredients.map(c => <option value={c.strIngredient} key={c.strIngredient}>{c.strIngredient}</option>)}
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelectGrid" label="Recipes by area">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setSelectedArea(e.target.value)} value={selectedArea}>
                            {areas.map(c => <option value={c.strArea} key={c.strArea}>{c.strArea}</option>)}
                        </Form.Select>
                    </FloatingLabel>
                </div>
            </div>
            <div className="recipes_listing">
                {loading ?
                    <Spinner animation="grow" /> :
                    filteredRecipes.length > 0 ? filteredRecipes.map(({ strMealThumb, strMeal, idMeal }) =>
                        <RecipeCard title={strMeal} img={strMealThumb} id={idMeal} key={idMeal} />
                    ) : <h4 className="error-text">No recipes found for selected filters!</h4>
                }
            </div>
        </div>
    )
}

export default Recipes;