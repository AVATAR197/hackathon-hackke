import React, { useState } from 'react';
import classes from './Login.module.scss';
import { loginFunc } from '../../utils/utils';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { useParams } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { type } = useParams();

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const login = (e) => {
        e.preventDefault();
        loginFunc({ password, email, type: type })
            .then((res) => {
                //redirect the user based on the type
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={classes.Wrapper}>
            <h1>Log in</h1>
            <form onSubmit={login}>
                <Input
                    value={email}
                    type="text"
                    label="email"
                    onChange={emailOnChangeHandler}
                />
                <Input
                    autoComplete="current-passwords"
                    value={password}
                    type="password"
                    label="password"
                    onChange={passwordOnChangeHandler}
                />
                <Button type="submit">Log in</Button>
            </form>
        </div>
    );
};

export default Login;
