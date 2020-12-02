import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class ListRecipes extends React.Component {

    state = {
        recipes: []
    }

    fetchRecipes = () => {
        fetch('http://localhost:3004/recipes').then(response => {
            return response.json()
        }).then(data => this.setState({
            recipes: data
        }));
    }

    componentDidMount() {
        this.fetchRecipes();
    }

    render() {
        return (
            <>
            <Link to="/createRecipe" className="btn btn-primary mb-2 ">Create new recipe</Link>
            <Accordion>
                {this.state.recipes.map((recipe) => (
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
}

export default ListRecipes;
