import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

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
        name: 'tips',
        path: '/tips',
    },
];

const User = () => {
    return (
        <Dashboard items={items}>
            <Switch>
                <Route path={`user/dashboard`}></Route>
            </Switch>
        </Dashboard>
    );
};

export default User;
