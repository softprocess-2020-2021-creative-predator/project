import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import RegisterForm from "./components/register/RegisterForm";
import ListRecipes from "./components/ListRecipes/ListRecipes";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Route exact path="/">
          <h1>Feed</h1>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <ListRecipes></ListRecipes>
        </Route>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
