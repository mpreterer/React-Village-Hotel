import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Profile } from '../pages/Profile/Profile';
import { Room } from '../pages/Room/Room';
import { SearchRooms } from '../pages/SearchRooms/SearchRooms';
import { SignUp } from '../pages/SignUp/SignUp';

import { SCREENS } from './endpoints';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={SCREENS.LANDING} element={<LandingPage />} />
        <Route path={SCREENS.SEARCH_ROOMS} element={<SearchRooms />} />
        <Route path={SCREENS.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={`${SCREENS.ROOM}:id`} element={<Room />} />
        <Route path={SCREENS.PROFILE} element={<Profile />} />
        <Route path={SCREENS.SIGN_UP} element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
