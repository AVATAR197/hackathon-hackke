import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const items = [
    {
        name: 'add pacient',
        path: '/add-pacient',
    },
    {
        name: 'profile',
        path: '/profile',
    },
];

const Doctor = () => {
    return (
        <Dashboard>
            <div>doctor add pacient</div>
        </Dashboard>
    );
};

export default Doctor;
