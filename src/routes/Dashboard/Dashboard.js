import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from './Dashboard.module.scss';

const Dashboard = ({ items, children }) => {
    return (
        <div>
            <NavBar title="pacient" items={items} />
            <div className={classes.Content}>{children}</div>
        </div>
    );
};

export default Dashboard;
