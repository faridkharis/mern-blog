import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<MainApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;