import Loader from '@/shared/Loader';
import React from 'react';

const loading = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
