import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Tips from './Tips/Tips';

const items = [
    {
        name: 'dashboard',
        path: '/dashboard',
    },
    {
        name: 'profile',
        path: '/profile',
    },
    {
        name: 'tips from doctor',
        path: '/tips',
    },
];

const User = () => {
    return (
        <Dashboard items={items}>
            <Switch>
                <Route path={`/user/profile`}>
                    <Profile />
                </Route>
                <Route path="/user/tips">
                    <Tips />
                </Route>
            </Switch>
        </Dashboard>
    );
};

export default User;
