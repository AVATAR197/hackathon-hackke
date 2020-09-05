import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from './Dashboard.module.scss';
import AddData from './AddData';

const Dashboard = ({ items, children }) => {
    return (
        <div>
            <NavBar title="pacient" items={items} />
            <div className={classes.Content}>
                {children}
                <AddData/>
            </div>
        </div>
    );
};

export default Dashboard;
