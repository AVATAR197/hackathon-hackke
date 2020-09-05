import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

const items = [
    {
        name: 'add pacient',
        path: '/doctor/add-pacient',
    },
    {
        name: 'profile',
        path: '/doctor/profile',
    },
];

const Doctor = () => {
    return (
        <Dashboard title="doctor" items={items}>
            <div>doctor add pacient</div>
        </Dashboard>
    );
};

export default Doctor;
