import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function DrinkRecipes() {
    const [drinkRecipes, setDrinkRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/drinkRecipes').then(response => {
            return response.json()
        }).then(data => {
           setDrinkRecipes(data)
        });
    }, []);
        
        return (
            <>
            <Link to="/createRecipe" className="btn btn-primary mb-2 ">Create new recipe</Link>
            <Accordion>
                {console.log(drinkRecipes)}
                {drinkRecipes.map((recipe) => (
                    <Card key={recipe.id + 1} className={'mb-2'}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={recipe.id + 1}>
                                {recipe.name} - Show more
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={recipe.id + 1}>
                            <Card.Body>
                                <img src={recipe.imgSrc} alt={recipe.name}/>
                                <div>Description: <pre style={{'whiteSpace': 'pre-wrap'}}>{recipe.description}</pre></div>
                                <div>Ingredients: {recipe.ingredients.map((ingredient, index) =>(
                                    <>
                                        <br />
                                        <span>{index + 1}. {ingredient}</span>
                                    </>
                                ))}</div>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card.Footer>Author: {recipe.author}</Card.Footer>
                    </Card>
                ))}
            </Accordion>
            </>
        )
}

