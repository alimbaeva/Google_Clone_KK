import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* <Loader type='Puff' color='#00BFFF' height={500} width={80} /> */}
            <BallTriangle color="#00BFFF" height={80} width={80} />
        </div>
    );
};
