import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import AddPatient from './AddPatient/AddPatient';

const items = [
    {
        name: 'add patient',
        path: '/doctor/add-patient',
    },
    {
        name: 'profile',
        path: '/doctor/profile',
    },
];

const Doctor = () => {
    return (
        <Dashboard title="doctor" items={items}>
            <Switch>
                <Route path="/doctor/add-patient">
                    <AddPatient />
                </Route>
            </Switch>
        </Dashboard>
    );
};

export default Doctor;
