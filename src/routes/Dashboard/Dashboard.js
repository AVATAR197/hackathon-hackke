import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from './Dashboard.module.scss';

const Dashboard = ({ items, children, title }) => {
    return (
        <div>
            <NavBar title={title} items={items} />
            <div className={classes.Content}>{children}</div>
        </div>
    );
};

export default Dashboard;
