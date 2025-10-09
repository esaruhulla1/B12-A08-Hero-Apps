import React from 'react';
import errorImg404 from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage404 = () => {
    return (
        <div className='flex justify-center items-center h-[90vh] gap-10 flex-col '>
                <img src={errorImg404} alt="" />
                <div>
                    <h1 className='text-5xl'>Oops, page not found!</h1>
                    <p className='text-gray-500'>The page you are looking for is not available.</p>
                </div>
                <Link className='bg-[#8d53ee] text-white px-8 rounded-lg py-2 btn '>Go Back!</Link>
            </div>
    );
};

export default ErrorPage404;