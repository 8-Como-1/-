import React, { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/views/discover/c-cpns/nav-bar';

interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FC<IProps> = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(Discover);
