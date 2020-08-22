import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
