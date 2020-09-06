import React, { useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import AddPatient from './AddPatient/AddPatient';
import MainPage from './MainPage/MainPage';
import UserDetails from './UserDetails/UserDetails';

const items = [
    {
        name: 'preview',
        path: '/doctor',
    },
    {
        name: 'add patient',
        path: '/doctor/add-patient',
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
                <Route path="/doctor/patient-details/:id">
                    <UserDetails />
                </Route>
            </Switch>
        </Dashboard>
    );
};

export default Doctor;
