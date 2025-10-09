import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]); 
    const [sortOrder, setSortOrder] = useState(''); 

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        toast('❌ App Uninstalled Successfully!')
    };

    const handleSort = (order) => {
        setSortOrder(order);

        let sorted = [...installedApps];
        if (order === 'High-Low') {
            sorted.sort((a, b) => b.downloads - a.downloads);
        } else if (order === 'Low-High') {
            sorted.sort((a, b) => a.downloads - b.downloads);
        }
        setInstalledApps(sorted);
    };

    return (
        <div className="container mx-auto">
            <div className="mt-15 mb-10 space-y-4">
                <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
                <p className="text-gray-500 text-center">
                    Explore all apps you have installed from the market
                </p>
            </div>

            <div className="text-2xl flex justify-between items-center mb-10">
                <div className="flex gap-1 font-bold">
                    <span>{installedApps.length}</span>
                    <h4>Apps Found</h4>
                </div>
                <div>
                    <select
                        onChange={(e) => handleSort(e.target.value)}
                        className="select border p-2 rounded-md"
                        value={sortOrder}
                    >
                        <option value="">Sort by Downloads</option>
                        <option value="Low-High">Low-High</option>
                        <option value="High-Low">High-Low</option>
                    </select>
                </div>
            </div>

            
            {installedApps.length === 0 ? (
                <p className="text-center text-gray-500  text-xl">No apps installed yet.</p>
            ) : (
                <div className=" gap-6 space-y-5">
                    {installedApps.map((app) => (
                        <div key={app.id} className=' p-4 justify-between pb-1 items-center  flex  bg-[#ffffff] space-y-3 shadow rounded-lg'>
                            <div className='flex justify-between gap-4 items-center'>
                                <img className='w-[80px] ' src={app.image} alt="" />
                                <div className='flex flex-col gap-3 items-start justify-center'>
                                    <h3 className='text-2xl '>{app.title}</h3>
                                    <div className='flex justify-start gap-5'>
                                        <p className='rounded-md  py-1 flex items-center justify-between gap-2'><img className='w-4 h-4' src={'/download.png'} alt="" /> {app.downloads}M</p>
                                        <p className=' rounded-md  py-1 flex items-center justify-between gap-2'><img className='w-4 h-4' src={'/star.png'} alt="" /> {app.ratingAvg}</p>
                                        <p className=' rounded-md  py-1 flex items-center justify-between gap-2'> {app.size}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="btn bg-red-500 text-white rounded-lg px-4 py-2"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installation;
