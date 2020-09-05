import React from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss'

const Dashboard = () => {
    return (
        <div className={classes.cc}>
            <h1>Main Page</h1>
            <AddDataButton/>
        </div>
    );
};

export default Dashboard;