import React from 'react';
import classes from './Input.module.scss';

const Input = ({ type, label, onChange, value, ...rest }) => {
    return (
        <section className={classes.Section}>
            <label className={classes.Label} htmlFor={label}>
                {label}
            </label>
            <input
                {...rest}
                value={value}
                className={classes.Input}
                onChange={onChange}
                type={type}
                id={label}
            />
        </section>
    );
};

export default Input;
