// Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading ? '' : 'hidden'}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
