import React from 'react';
import error from '../../assets/Error/404.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-full' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;