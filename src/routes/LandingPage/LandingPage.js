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
            <div className={classes.ButtonWrapper}>
                <Link className={classes.Button} to="/user">
                    Pacient
                </Link>
                <Link className={classes.Button} to="/doctor">
                    Doctor
                </Link>
            </div>
            <div>
                <p>You don't have an account?</p>
                <Link>Sign Up</Link>
            </div>

            <p></p>
        </div>
    );
};

export default LandingPage;
