import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children }) => {
    return <button className={classes.Button}>{children}</button>;
};

export default Button;
