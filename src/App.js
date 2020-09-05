import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './routes/User/User';
import Doctor from './routes/Doctor/Doctor';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import LandingPage from './routes/LandingPage/LandingPage';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <Route path="/doctor">
                <Doctor />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
