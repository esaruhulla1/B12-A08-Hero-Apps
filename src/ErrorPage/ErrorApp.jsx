import React from 'react';
import { Link } from 'react-router';
import appErrorimg from '../assets/App-Error.png';

const ErrorApp = () => {
    return (
        <div className='flex justify-center items-center h-[90vh] gap-10 flex-col '>
            <img src={appErrorimg} alt="" />
            <div>
                <h1 className='text-5xl'>OPPS!! APP NOT FOUND</h1>
                <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>
            <Link to={'/allapps'} className='bg-[#8d53ee] scale-x-105 text-white px-8 rounded-lg py-2 btn '>Go Back!</Link>
        </div>
    );
};

export default ErrorApp;