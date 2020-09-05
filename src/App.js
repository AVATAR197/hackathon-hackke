import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './routes/User/User';

const App = () => (
    <BrowserRouter>
        <User />
    </BrowserRouter>
);

export default App;
