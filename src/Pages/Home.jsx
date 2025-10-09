import React from 'react';
import heroImg from '../assets/hero.png'
import { Link } from 'react-router';
import useLoadData from '../Hooks/UseLoadData';
import AppCard from '../Components/AppCard';
import Loading from '../Components/Loading';

const Home = () => {
    const { appData, loading, error } = useLoadData();
    const trendingAppData = appData.slice(0, 8)
    // console.log(trendingAppData);
    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className='flex flex-col justify-center text-center space-y-10 mt-15'>
                <div className='space-y-7'>
                    <h1 className='text-6xl font-bold'>We Build <br /> <span className='text-[#8d59eb]'>Productive</span>Apps</h1>
                    <p className='text-gray-400'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex gap-5 justify-center'>
                    <a className='btn' href="https://play.google.com/store"><img src={'playStore.png'} alt="" />Google Play</a>
                    <a className='btn' href="https://www.apple.com/app-store"><img src={'appStore.png'} alt="" /> App Store</a>
                </div>
                <div className=''>
                    <img className='max-w-[60%] mx-auto' src={heroImg} alt="" />

                </div>
            </div>

            {/* States Section */}
            <div className=' bg-gradient-to-br from-[#642fe3] to-[#9f62f2] text-white py-13'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='mb-10 text-4xl text-center font-bold'>Trusted by Millions, Built for You</h2>
                    <div className='flex justify-between'>
                        <div className='space-y-2 text-center'>
                            <p className='text-sm text-gray-300'>Total Downloads</p>
                            <h3 className='text-3xl font-bold'>29.5M</h3>
                            <p className='text-sm text-gray-300'>21% more than last month</p>
                        </div>
                        <div className='space-y-2 text-center'>
                            <p className='text-sm text-gray-300'>Total Reviews</p>
                            <h3 className='text-3xl font-bold'>906K</h3>
                            <p className='text-sm text-gray-300'>46% more than last month</p>
                        </div>
                        <div className='space-y-2 text-center'>
                            <p className='text-sm text-gray-300'>Active Apps</p>
                            <h3 className='text-3xl font-bold'>132+</h3>
                            <p className='text-sm text-gray-300'>31 more will Launch</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Trending Apps section */}
            <div className='text-center my-15 space-y-10'>
                <div className='space-y-2'>
                    <h1 className='text-4xl font-bold'>Trending Apps</h1>
                    <p className='text-sm text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                {/* <div>
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : error ? (
                        <h1 className='text-red-500'>Error loading data</h1>
                    ) : (
                        trendingAppData.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))
                    )}
                </div> */}

                <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 container mx-auto'>
                    {
                        trendingAppData.map((singlData, index)=> <AppCard singlData={singlData} key={index}></AppCard>)
                    }
                </div>
                <div>
                    <Link to={'/allapps'} className='btn px-10 bg-gradient-to-br from-[#642fe3] to-[#9f62f2] text-white'>Show All</Link>
                </div>
            </div>

        </div>

    );
};

export default Home;