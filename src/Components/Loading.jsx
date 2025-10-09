import React from 'react';
import logoImg from '../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex text-5xl gap-2 justify-center items-center h-[90vh]'>
            <span>L </span>
            {/* <img className='w-[50px] animate-spin' src={logoImg} alt="" /> */}
            <span>oading....</span>
        </div>
    );
};

export default Loading;