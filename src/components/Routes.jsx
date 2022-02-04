import React from 'react';
import { Routes as Routed, Route, Navigate } from 'react-router-dom';

export const Routes = () => {
    return (
        <div className='p-4 '>
            <Routed >
                <Route exact path='/' element={<Navigate replace to="/search" />}>
                    {/* <Redirect to='/search' /> */}
                    {/* <Navigate replace to="/search" /> */}
                    {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
                </Route>
            </Routed >
        </div>
    );
};
