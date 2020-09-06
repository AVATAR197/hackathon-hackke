import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './routes/User/User';
import Doctor from './routes/Doctor/Doctor';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import LandingPage from './routes/LandingPage/LandingPage';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    const [loginInfo, setloginInfo] = useState({ token: null, type: null });

    useEffect(() => {
        //check if the user is logged in
        const token = localStorage.getItem('accessToken');
        if (token) setloginInfo({ ...loginInfo, token: token });
        //if the refresh token is present or active token is still valid based on
        //expiration time then log in user automatically by settin the loginInfoto the data from the localstorage
    }, []);

    return (
        <BrowserRouter>
            {process.env.REACT_APP_STAGE === 'production' ? (
                <Switch>
                    {loginInfo.token !== null && loginInfo.type === 'doctor' ? (
                        <Route path="/doctor">
                            <Doctor />
                        </Route>
                    ) : loginInfo.token !== null &&
                      loginInfo.type === 'patient' ? (
                        <Route path="/user">
                            <User />
                        </Route>
                    ) : loginInfo.token === null ? (
                        <>
                            <Route path="/" exact>
                                <LandingPage />
                            </Route>
                            <Route path="/login/:type">
                                <Login />
                            </Route>
                        </>
                    ) : null}
                </Switch>
            ) : (
                <Switch>
                    <Route path="/doctor">
                        <Doctor />
                    </Route>
                    <Route path="/" exact>
                        <LandingPage />
                    </Route>
                    <Route path="/login/:type">
                        <Login />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                </Switch>
            )}
        </BrowserRouter>
    );
};

export default App;
