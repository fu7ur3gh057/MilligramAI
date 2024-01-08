import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainOutlet from "../ui/pages/main/MainOutlet";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainOutlet/>}>

            </Route>
        </Routes>
    );
};

export default Router;