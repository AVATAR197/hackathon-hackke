import React, { useState } from "react";
import classes from "./Login.module.scss";
import { loginFunc } from "../../utils/utils";
import Input from "../../components/UI/Input/Input";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const login = (e) => {
        e.preventDefault();
        loginFunc({ password, email })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className={classes.Wrapper}>
            <h1>Log in</h1>
            <form onSubmit={login}>
                <Input value={email} type="text" label="email" onChange={emailOnChangeHandler} />
                <Input value={password} type="password" label="password" onChange={passwordOnChangeHandler} />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
