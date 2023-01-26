import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';

import './Layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__header">header</div>
      <div className="layout__main">
        <Outlet />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
