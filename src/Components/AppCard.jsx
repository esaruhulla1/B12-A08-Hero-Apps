import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ singlData }) => {
    const { ratingAvg, title, image, downloads, id } = singlData
    return (
        <Link to={`/allapps/${id}`}>
            <div className='p-5 bg-[#ffffff] space-y-3 shadow rounded-lg'>
                <img className=' w-[316px] mx-auto rounded-2xl' src={image} alt="" />
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className='flex justify-between'>
                    <p className='bg-[#f1f5e8] rounded-md px-5 py-1 flex items-center justify-between gap-2'><img className='w-4 h-4' src={'/download.png'} alt="" /> {downloads}M</p>
                    <p className='bg-[#f1f5e8] rounded-md px-5 py-1 flex items-center justify-between gap-2'><img className='w-4 h-4' src={'/star.png'} alt="" /> {ratingAvg}</p>
                </div>
            </div></Link>
    );
};

export default AppCard;