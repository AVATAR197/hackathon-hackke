import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, onClick, ...rest }) => {
    return (
        <button {...rest} onClick={onClick} className={classes.Button}>
            {children}
        </button>
    );
};

export default Button;
