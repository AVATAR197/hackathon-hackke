import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './routes/User/User';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import LandingPage from './routes/LandingPage/LandingPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <LandingPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/user">
                <User />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
