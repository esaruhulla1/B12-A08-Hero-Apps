import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useLoadData from '../Hooks/UseLoadData';
import Loading from '../Components/Loading';
import likeImg from '../assets/icon-review.png'
import star from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import ErrorApp from '../ErrorPage/ErrorApp';
import { toast } from 'react-toastify';



const AppDetails = () => {
    const { id } = useParams()
    const [ratings, setRatings] = useState([])
    const [installed, setInstalled] = useState(false);
    // console.log(typeof id);
    const { appData, loading, error } = useLoadData();
    const filterData = appData.find(singlaData => singlaData.id === Number(id))
    console.log(typeof filterData);

    
    useEffect(() => {
        if (!loading && filterData) {
            setRatings(filterData.ratings || []);
        }
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const isInstalled = installedApps.some(app => app.id === Number(id));
        setInstalled(isInstalled);
    }, [loading, filterData, id]);

    // start
    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];

        
        if (installedApps.some(app => app.id === Number(id))) {
            setInstalled(true);
            return;
        }


        
        installedApps.push(filterData);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        setInstalled(true);

        // success alert
        toast('✅ App installed successfully!');
    };
    // end



    if (loading) {
        return <Loading />;
    }

    if (error || !filterData) {
        return (<ErrorApp></ErrorApp>)
    }




    return (
        <div className='container mx-auto px-10'>
            <div className='flex gap-10 mt-15 mb-9'>
                <div>
                    <img src={filterData.image} alt="" />
                </div>
                <div className='space-y-3 flex-1'>
                    <h1 className='text-2xl font-bold'>{filterData.title}</h1>
                    <p className='text-gray-400'>Developed by: <span className='text-[#8752ec]'>{filterData.companyName}</span></p>
                    <div className='border-t-2  border-gray-200'></div>
                    <div className='flex gap-10'>
                        <div>
                            <img className='w-7' src={download} alt="" />
                            <p className='text-gray-500'>Downloads</p>
                            <h2 className='text-3xl font-bold'>{filterData.downloads}M</h2>
                        </div>
                        <div>
                            <img className='w-7' src={star} alt="" />
                            <p className='text-gray-500'>Average Ratings</p>
                            <h2 className='text-3xl font-bold'>{filterData.ratingAvg}</h2>
                        </div>
                        <div>
                            <img className='w-7' src={likeImg} alt="" />
                            <p className='text-gray-500'>Total Reviews</p>
                            <h2 className='text-3xl font-bold'>{filterData.reviews}</h2>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleInstall}
                            disabled={installed}
                            className={`btn text-white ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00d390]'}`}>
                            {installed ? 'Installed' : `Install Now (${filterData.size} MB)`}
                        </button>                    
                        </div>
                </div>

            </div>
            <div className='border-t-2  border-gray-200'></div>

            <div className='my-10'>
                <h1 className='text-2xl font-bold mb-3'>Ratings</h1>
                {/* rechart here */}
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={400}
                        data={ratings}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis reversed dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" barSize={20} fill="#ff8811" />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>

            <div>
                <h2 className='text-2xl mb-3 font-bold'>Description</h2>
                <div className='space-y-12 text-gray-500'>
                    <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                    <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                    <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;