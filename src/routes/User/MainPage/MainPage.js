import React from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss'


const Dashboard = () => {
    return (
        <div className={classes.Wrapper}>
            <AddDataButton></AddDataButton>
        </div>
    );
};

export default Dashboard;
