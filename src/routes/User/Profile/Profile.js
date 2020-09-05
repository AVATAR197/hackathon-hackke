import React, { useEffect, useState } from 'react';
import classes from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={classes.Wrapper}>
            <h1>Profile</h1>
            <div className={classes.Image}>
                <img
                    src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="profile_picture"
                />
            </div>
            <ul>
                <li>
                    Diabetes type: <span>2</span>
                </li>
                <li>
                    Name: <span>Jack John</span>
                </li>
                <li>
                    Birth date: <span>20.5.2001</span>
                </li>
                <li>
                    BirthNumber: <span>56010561041560</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
