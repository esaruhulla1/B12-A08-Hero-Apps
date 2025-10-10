import React, { useState, useEffect } from 'react';
import useLoadData from '../Hooks/UseLoadData';
import AppCard from '../Components/AppCard';
import Loading from '../Components/Loading';

const AllApps = () => {
  const { appData, loading } = useLoadData();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (loading) return; 

    setSearchLoading(true); 
    const timer = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const filtered = term
        ? appData.filter((item) =>
            item.title.toLowerCase().includes(term)
          )
        : appData;
      setSearchedProducts(filtered);
      setSearchLoading(false); 
    }, 500); 

    return () => clearTimeout(timer); 
  }, [search, appData, loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <div className='my-15 space-y-2'>
        <h1 className='text-3xl text-center font-bold'>
          Our All Applications
        </h1>
        <p className='text-gray-400 text-center'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className='mb-5 flex justify-between'>
        <h3 className='text-2xl font-bold'>
          <span>({searchedProducts.length})</span> Apps Found
        </h3>
        <label className='input'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='search'
            placeholder='🔍 Search Apps'
          />
        </label>
      </div>

      
      {searchLoading ? (
        <div className='flex justify-center mt-20'>
          <Loading />
        </div>
      ) : searchedProducts.length === 0 ? (
        <div className='space-y-5 mt-20'>
          <h1 className='text-center text-3xl text-gray-500 font-bold'>
            No App Found!
          </h1>
          <h5 className='text-center text-4xl'>😟</h5>
        </div>
      ) : (
        <div className='mb-15 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
          {searchedProducts.map((singlData, index) => (
            <AppCard singlData={singlData} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
