import { Suspense, useEffect } from 'react';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import MyRoutes from '@/router';
import AppPlayerBar from './views/player/app-player-bar';
import { useAppDispatch } from './store';
import { fetchCurrentSongAction } from '@/views/player/store';
import LoginModal from '@/views/login';
import { CustomScrollbar } from '@/components/customScrollbar';

const App = () => {
  const display = useAppDispatch();
  useEffect(() => {
    display(fetchCurrentSongAction(2116533072));
  });

  return (
    <>
      <LoginModal/>
      <AppHeader />
      {/* <CustomScrollbar> */}
      <Suspense fallback="">
        <MyRoutes />
      </Suspense>
      <AppFooter />
      {/* </CustomScrollbar> */}
      <AppPlayerBar />
    </>
  );
};

export default App;
