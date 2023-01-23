import { Route, Routes } from 'react-router-dom';

import Layout from '../Components/Layout/Layout';
import Main from '../Pages/Main';
import SearchRooms from '../Pages/SearchRooms';

import SCREENS from './endpoints';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={SCREENS.MAIN} element={<Main />} />
        <Route path={SCREENS.SEARCH_ROOMS} element={<SearchRooms />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
