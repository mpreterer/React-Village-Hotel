import { Outlet } from 'react-router-dom';
import { Filters } from '../Filters/Filters';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './Layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__main">
        <Outlet />
        <Filters />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
