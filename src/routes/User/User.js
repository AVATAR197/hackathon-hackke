import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Tips from './Tips/Tips';
import MainPage from './MainPage/MainPage';
import AboutDoctor from './AboutDoctor/AboutDoctor';

const items = [
    {
        name: 'dashboard',
        path: '/user',
    },
    {
        name: 'profile',
        path: '/user/profile',
    },
    {
        name: 'tips from doctor',
        path: '/user/tips',
    },
    {
        name: 'about the doctor',
        path: '/user/about-doctor',
    },
];

const User = () => {
    return (
        <Dashboard title="patient" items={items}>
            <Switch>
                <Route path={`/user`} exact>
                    <MainPage />
                </Route>
                <Route path={`/user/profile`}>
                    <Profile />
                </Route>
                <Route path={`/user/about-doctor`}>
                    <AboutDoctor />
                </Route>
                <Route path="/user/tips">
                    <Tips />
                </Route>
            </Switch>
        </Dashboard>
    );
};

export default User;
