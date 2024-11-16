import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

//路由懒加载，提高渲染速度
const Discover = React.lazy(() => import('@/views/discover'));
const Album = React.lazy(() => import('@/views/discover/c-views/album'));
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'));
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'));
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'));
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'));
const Recommend = React.lazy(
  () => import('@/views/discover/c-views/recommend'),
);
const Mine = React.lazy(() => import('@/views/mine'));
const Focus = React.lazy(() => import('@/views/focus'));

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/discover" />} />
    <Route path="/discover" element={<Discover />}>
      <Route index element={<Navigate to="/discover/recommend" />} />
      <Route path="album" element={<Album />} />
      <Route path="ranking" element={<Ranking />} />
      <Route path="artist" element={<Artist />} />
      <Route path="djradio" element={<Djradio />} />
      <Route path="recommend" element={<Recommend />} />
      <Route path="songs" element={<Songs />} />
    </Route>
    <Route path="/mine" element={<Mine />} />
    <Route path="/focus" element={<Focus />} />
  </Routes>
);

export default MyRoutes;
