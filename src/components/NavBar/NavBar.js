import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

//items bude array of objects = [{name: "main menu", path: "/main-menu"}]

const NavBar = ({ title, items = [] }) => {

 
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Title}><i class={title === 'patient' ? "fas fa-hospital-user" : "fas fa-stethoscope"}></i>{title}</div>
           

            <ul className={classes.Items}>
                {items.map((e, index) => {
                    return (
                        <NavLink
                            key={index}
                            className={classes.Item}
                            activeClassName={classes.ActiveLink}
                            exact
                            to={`${e.path}`}
                        >
                            {e.name}
                        </NavLink>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavBar;
