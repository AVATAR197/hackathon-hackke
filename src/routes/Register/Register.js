import React, { useState } from 'react';
import classes from './Register.module.scss';
import { registerFunc } from '../../utils/utils';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import validateForRegister from './validationForRegister';

const Register = () => {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const repeatPasswordOnChangeHandler = (e) => {
        setRepeatPassword(e.target.value);
    };

    const register = (e) => {
        e.preventDefault();

        setErrors(validateForRegister(password, repeatPassword, email));

        if (errors !== {}) return;

        registerFunc({ password, email, repeatPassword })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className={classes.Wrapper}>
            <h1>Register</h1>
            <form onSubmit={register}>
                <Input
                    value={email}
                    type="text"
                    label="email"
                    onChange={emailOnChangeHandler}
                />
                {errors.email && <span>{errors.email}</span>}
                <Input
                    autoComplete="off"
                    value={password}
                    type="password"
                    label="password"
                    onChange={passwordOnChangeHandler}
                />
                {errors.password && <span>{errors.password}</span>}

                <Input
                    autoComplete="off"
                    value={repeatPassword}
                    type="password"
                    label="repeat password"
                    onChange={repeatPasswordOnChangeHandler}
                />
                {errors.repeatPassword && <span>{errors.repeatPassword}</span>}

                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default Register;
