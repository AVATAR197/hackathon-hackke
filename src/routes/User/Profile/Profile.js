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

            <table>
                <tbody>
                    <tr>
                        <td className={classes.Info}>Diabetes type:</td>
                        <td className={classes.Data}>2</td>
                    </tr>

                    <tr>
                        <td className={classes.Info}>Name:</td>
                        <td className={classes.Data}>Jack John</td>
                    </tr>

                    <tr>
                        <td className={classes.Info}>BirthDate:</td>
                        <td className={classes.Data}>20.5.2001</td>
                    </tr>

                    <tr>
                        <td className={classes.Info}>Birth number:</td>
                        <td className={classes.Data}>110998/7458</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
