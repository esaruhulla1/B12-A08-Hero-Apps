import React, { useState } from 'react';
import useLoadData from '../Hooks/UseLoadData';
import AppCard from '../Components/AppCard';
import ErrorPage404 from '../ErrorPage/ErrorPage404';

const AllApps = () => {
    const { appData, loading, error } = useLoadData();
    const [search, setSearch] = useState('')
    const term = search.trim().toLowerCase()
    const searchedProducts = term
        ? appData.filter(singlData => singlData.title.toLowerCase().includes(term))
        : appData
    console.log(searchedProducts);



    return (
        <div className='container mx-auto'>
            <div className='my-15 space-y-2'>
                <h1 className='text-3xl text-center font-bold'>Our All Applications</h1>
                <p className='text-gray-400 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mb-5 flex justify-between'>
                <h3 className='text-2xl font-bold'><span>({searchedProducts.length})</span> Apps Found</h3>
                <label className='input'>
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type='search'
                        placeholder='🔍 Search Products'
                    />
                </label>
            </div>
            {
                 searchedProducts.length===0? (
                    <div className='space-y-5 mt-20'>
                        <h1 className='text-center text-3xl text-gray-500 font-bold'>No App Found!</h1>
                        <h5 className='text-center text-4xl'>😟</h5>
                    </div>
                ) : (
                    <div className=' mb-15 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            searchedProducts.map((singlData, index) => <AppCard singlData={singlData} key={index}></AppCard>)
                        }
                    </div>
                )
            }

        </div>
    );
};

export default AllApps;