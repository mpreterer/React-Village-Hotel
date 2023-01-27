import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { SearchRooms } from '../pages/SearchRooms';

import SCREENS from './endpoints';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={SCREENS.LANDING_PAGE} element={<LandingPage />} />
        <Route path={SCREENS.SEARCH_ROOMS} element={<SearchRooms />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
