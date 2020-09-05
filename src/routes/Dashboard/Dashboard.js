import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from './Dashboard.module.scss';

const Dashboard = ({ items, children }) => {
    return (
        <div>
            <NavBar title="pacient" items={items} />
<<<<<<< HEAD
            
            
=======
            <div className={classes.Content}>{children}</div>
>>>>>>> 236b3b1790a5530b8077374e528bf764f10f4fcd
        </div>
    );
};

export default Dashboard;
