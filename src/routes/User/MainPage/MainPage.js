import React from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss'
import DataTable from './DataTable';

const Dashboard = () => {
    
    return (
        <div className={classes.cc}>
            <h1>Main Page</h1>
            <DataTable/>
            <AddDataButton/>
        </div>
    );
};

export default Dashboard;
