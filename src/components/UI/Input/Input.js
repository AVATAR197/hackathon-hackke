import React from "react";
import classes from "./Input.module.scss";

const Input = ({ type, label, onChange, value }) => {
    return (
        <>
            <label className={classes.Label} htmlFor={label}>
                {label}
            </label>
            <input value={value} className={classes.Input} onChange={onChange} type={type} id={label} />
        </>
    );
};

export default Input;
