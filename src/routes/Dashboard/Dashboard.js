import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const Dashboard = ({ items, children }) => {
    return (
        <div>
            <NavBar title="pacient" items={items} />
            {children}
        </div>
    );
};

export default Dashboard;
