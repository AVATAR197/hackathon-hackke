import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LandingPage.module.scss';
import LandingPageImage from '../../assets/landingPageImage.jpg';

const LandingPage = () => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Image}>
                <h1>Diabetes Tracker</h1>
                <img src={LandingPageImage} alt="" />
            </div>
            <h1>Sign in as</h1>
            <div className={classes.ButtonWrapper}>
                <Link className={classes.Button} to="/login/patient">
                    Patient
                </Link>
                <Link className={classes.Button} to="/login/doctor">
                    Doctor
                </Link>
            </div>
            <div className={classes.WithoutAccountDiv}>
                <p>You don't have an account?</p>
                <Link>Sign Up</Link>
            </div>
            <div></div>
        </div>
    );
};

export default LandingPage;
