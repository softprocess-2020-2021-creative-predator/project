// import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";
import { Router } from 'react-router';
import { Container } from "react-bootstrap";
import { createBrowserHistory } from 'history';
import RegisterForm from "./components/register/RegisterForm";
import ListRecipes from "./components/ListRecipes/ListRecipes";
import NavBar from './components/layout/NavBar/NavBar';
import MainContent from './components/layout/MainContent/MainContent';

import RootRoutes from './routes/rootRoutes';


const history = createBrowserHistory(); 

function App() {
  return (
    <Container>
      <Router history={history}>
        <NavBar />
        <MainContent>
          <RootRoutes />
        </MainContent>
      </Router>
    </Container>
  );
}

export default App;
