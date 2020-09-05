import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import AddPatient from './AddPatient/AddPatient';
import MainPage from './MainPage/MainPage';

const items = [
    {
        name: 'preview',
        path: '/doctor',
    },
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
                <Route path="/doctor" exact>
                    <MainPage />
                </Route>
                <Route path="/doctor/add-patient">
                    <AddPatient />
                </Route>
            </Switch>
        </Dashboard>
    );
};

export default Doctor;
