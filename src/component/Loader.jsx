import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loaderimage from '../assets/image/loaderimage.gif';
import Rootlayout from '../layout/Rootlayout';
import Home from '../pages/Home';



const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/layout/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='relative'>
      {loading ? (
        <div className='bg-slate-200 dark:bg-slate-200 h-screen w-full absolute'>
          <img id='img'
            src={loaderimage}
            alt="Loading..."
            style={{ display: 'block', margin: '0 auto', width: '250px', height: '250px', marginTop:'200px' }}
          />
        </div>
      ) : (
        <div>
          <Home/>
        </div>
      )}
    </div>
  );
};

export default Loader;
