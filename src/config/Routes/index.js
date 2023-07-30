import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<MainApp />} />
            </Switch>
        </Router>
    )
}

export default Routes;