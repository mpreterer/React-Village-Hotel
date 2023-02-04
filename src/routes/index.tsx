import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { Room } from '../pages/Room/Room';
import { SearchRooms } from '../pages/SearchRooms/SearchRooms';

import { SCREENS } from './endpoints';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={SCREENS.LANDING} element={<LandingPage />} />
        <Route path={SCREENS.SEARCH_ROOMS} element={<SearchRooms />} />
        <Route path={`${SCREENS.ROOM}:id`} element={<Room />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
