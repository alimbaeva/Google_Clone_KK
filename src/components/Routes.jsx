import React from 'react';
import { Routes as Routed, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => {
    return (
        <div className='p-4 '>
            <Routed >
                <Route exact path='/' element={<Navigate replace to="/search" />} />
                <Route exact path='/search' element={<Results />} />
                <Route exact path='/images' element={<Results />} />
                <Route exact path='/news' element={<Results />} />
                <Route exact path='/videos' element={<Results />} />
                {/* <Route exact path={['/search', '/images', '/news', '/videos']} element={<Results replace to={['/search', '/images', '/news', '/videos']} />} /> */}
                {/* <Redirect to='/search' /> */}
                {/* <Navigate replace to="/search" /> */}
                {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
            </Routed >
        </div>
    );
};
