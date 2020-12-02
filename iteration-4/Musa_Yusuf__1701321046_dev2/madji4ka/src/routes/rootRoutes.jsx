import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import ListRecipes from "../components/ListRecipes/ListRecipes";
import DrinkRecipes from "../components/DrinkRecipes/DrinkRecipes";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";
import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";


function RootRoutes() {
  return (
      <Switch>
        {/* <Redirect path="/register" to="/" /> */}
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/createRecipe" component={CreateRecipeForm} />
        <Route exact path="/" component={ListRecipes} />
        <Route exact path="/drinks" component={DrinkRecipes} />
      </Switch>
  );
}

export default RootRoutes;
