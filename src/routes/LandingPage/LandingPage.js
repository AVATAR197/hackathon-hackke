import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LandingPage.module.scss';

const LandingPage = () => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Image}>
                <img
                    src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                />
            </div>

            <h1>Sign in as</h1>
            <div>
                <Link to="/user">Pacient</Link>
                <Link to="/doctor">Doctor</Link>
            </div>
            <p>You don't have an account?</p>
            <p>Sign up</p>
        </div>
    );
};

export default LandingPage;
